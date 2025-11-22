import { useState, useEffect } from "react";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { QuizScreen } from "@/components/QuizScreen";
import { FeedbackScreen } from "@/components/FeedbackScreen";
import { ThankYouScreen } from "@/components/ThankYouScreen";
import { cyberAttacks, Question } from "@/data/gameData";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type GameScreen = "welcome" | "quiz" | "feedback" | "thankyou";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>("welcome");
  const [playerName, setPlayerName] = useState("");
  const [playerAge, setPlayerAge] = useState(0);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const { toast } = useToast();

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const selectRandomQuestions = () => {
    const categories = ["Phishing", "Senhas Fracas", "Links Suspeitos", "Compartilhamento Excessivo", "Golpes Online"];
    const selectedQuestions: Question[] = [];

    categories.forEach(category => {
      const categoryQuestions = cyberAttacks.filter(q => q.category === category);
      if (categoryQuestions.length > 0) {
        // Seleciona 2 perguntas aleatórias de cada categoria
        const shuffled = shuffleArray([...categoryQuestions]);
        const selected = shuffled.slice(0, 2);
        selectedQuestions.push(...selected);
      }
    });

    return shuffleArray(selectedQuestions);
  };

  const handleStart = async (name: string, age: number) => {
    try {
      const { data, error } = await supabase
        .from("players")
        .insert([{ name, age, score: 0 }])
        .select()
        .single();

      if (error) throw error;

      setPlayerName(name);
      setPlayerAge(age);
      setPlayerId(data.id);
      setQuizQuestions(selectRandomQuestions());
      setCurrentScreen("quiz");

      toast({
        title: `Bem-vindo, ${name}! 🎮`,
        description: "Vamos começar a aventura de segurança digital!",
      });
    } catch (error) {
      console.error("Error saving player:", error);
      toast({
        variant: "destructive",
        title: "Erro ao iniciar",
        description: "Não foi possível salvar seus dados. Tente novamente.",
      });
    }
  };

  const handleQuizComplete = async (finalScore: number) => {
    setScore(finalScore);
    
    try {
      if (playerId) {
        const { error } = await supabase
          .from("players")
          .update({ score: finalScore })
          .eq("id", playerId);

        if (error) throw error;
      }

      setCurrentScreen("feedback");
    } catch (error) {
      console.error("Error updating score:", error);
      setCurrentScreen("feedback");
    }
  };

  const handleFeedbackComplete = async (feedbackAnswers: string[]) => {
    try {
      if (playerId) {
        const { error } = await supabase
          .from("feedback")
          .insert([{
            player_id: playerId,
            question_1: feedbackAnswers[0] || "",
            question_2: feedbackAnswers[1] || "",
            question_3: feedbackAnswers[2] || "",
            question_4: feedbackAnswers[3] || "",
            question_5: feedbackAnswers[4] || "",
          }]);

        if (error) throw error;
      }

      toast({
        title: "Feedback enviado! ✅",
        description: "Obrigado por compartilhar sua opinião!",
      });

      setCurrentScreen("thankyou");
    } catch (error) {
      console.error("Error saving feedback:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar feedback",
        description: "Não foi possível salvar seu feedback. Tente novamente.",
      });
    }
  };

  const handleRestart = () => {
    setCurrentScreen("welcome");
    setPlayerName("");
    setPlayerAge(0);
    setPlayerId(null);
    setScore(0);
    setQuizQuestions([]);
  };

  return (
    <>
      {currentScreen === "welcome" && <WelcomeScreen onStart={handleStart} />}
      {currentScreen === "quiz" && (
        <QuizScreen 
          questions={quizQuestions} 
          onComplete={handleQuizComplete}
        />
      )}
      {currentScreen === "feedback" && (
        <FeedbackScreen 
          score={score}
          totalQuestions={quizQuestions.length}
          onComplete={handleFeedbackComplete}
        />
      )}
      {currentScreen === "thankyou" && (
        <ThankYouScreen onRestart={handleRestart} />
      )}
    </>
  );
};

export default Index;
