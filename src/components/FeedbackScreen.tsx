import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Trophy, Star, RotateCcw } from "lucide-react";
import { feedbackQuestions } from "@/data/gameData";

interface FeedbackScreenProps {
  score: number;
  totalQuestions: number;
  onComplete: (feedbackAnswers: string[]) => void;
}

export const FeedbackScreen = ({ score, totalQuestions, onComplete }: FeedbackScreenProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1);
  const [feedbackAnswers, setFeedbackAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const maxScore = totalQuestions * 10;
  const percentage = (score / maxScore) * 100;

  const getMessage = () => {
    if (percentage === 100) return "Perfeito! Você é um Expert em Segurança! 🏆";
    if (percentage >= 80) return "Excelente! Você está muito bem! 🌟";
    if (percentage >= 60) return "Muito bom! Continue praticando! 👏";
    if (percentage >= 40) return "Bom trabalho! Você aprendeu muito! 💪";
    return "Continue estudando! Você vai melhorar! 📚";
  };

  const handleNext = () => {
    if (currentQuestionIndex === -1) {
      setCurrentQuestionIndex(0);
      return;
    }

    if (currentAnswer) {
      const newAnswers = [...feedbackAnswers, currentAnswer];
      setFeedbackAnswers(newAnswers);
      
      if (currentQuestionIndex < feedbackQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer("");
      } else {
        onComplete(newAnswers);
      }
    }
  };

  if (currentQuestionIndex === -1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
        <Card className="w-full max-w-2xl shadow-2xl border-4 border-primary/20">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-8 rounded-full">
                <Trophy className="w-24 h-24 text-primary" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold text-primary">
              {getMessage()}
            </CardTitle>
            <CardDescription className="text-2xl font-bold text-foreground">
              Sua pontuação: {score} de {maxScore} pontos
            </CardDescription>
            <div className="flex justify-center gap-2 pt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-10 h-10 ${
                    i < Math.round((percentage / 100) * 5)
                      ? "fill-accent text-accent"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-secondary/20 p-6 rounded-lg text-center">
              <p className="text-lg font-semibold text-foreground mb-4">
                🎮 Parabéns por completar o desafio!
              </p>
              <p className="text-base text-muted-foreground">
                Agora, queremos saber sua opinião sobre o jogo e a aula!
              </p>
            </div>
            <Button 
              onClick={handleNext}
              size="lg"
              className="w-full text-xl h-14 font-bold"
            >
              Responder Feedback 📝
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-4 border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Pergunta {currentQuestionIndex + 1} de {feedbackQuestions.length}
          </CardTitle>
          <CardDescription className="text-lg">
            Sua opinião é muito importante para nós!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
            <p className="text-xl font-semibold text-foreground">
              {feedbackQuestions[currentQuestionIndex]}
            </p>
          </div>

          <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
            <div className="space-y-3">
              {["Sim, muito! 😊", "Sim 👍", "Mais ou menos 🤔", "Não muito 😕", "Não 😢"].map((option, index) => (
                <div key={index} className="flex items-center space-x-3 border-2 border-input rounded-lg p-4 hover:bg-accent/50 cursor-pointer">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="text-lg cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <Button 
            onClick={handleNext}
            size="lg"
            className="w-full text-xl h-14 font-bold"
            disabled={!currentAnswer}
          >
            {currentQuestionIndex < feedbackQuestions.length - 1 ? "Próxima" : "Finalizar"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
