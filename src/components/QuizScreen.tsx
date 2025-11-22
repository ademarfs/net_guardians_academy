import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Question } from "@/data/gameData";

interface QuizScreenProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export const QuizScreen = ({ questions, onComplete }: QuizScreenProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 10);
    }
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsCorrect(false);
    } else {
      // A pontuação já foi atualizada na handleAnswerSelect, não precisa adicionar novamente
      onComplete(score);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
      <Card className="w-full max-w-3xl shadow-2xl border-4 border-primary/20">
        <CardHeader className="space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <Trophy className="h-6 w-6" />
              Pontuação: {score} pontos
            </CardTitle>
            <span className="text-lg font-semibold text-muted-foreground">
              Pergunta {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
            <p className="text-xl font-semibold text-foreground mb-2">
              {currentQuestion.category}
            </p>
            <p className="text-lg text-foreground">
              {currentQuestion.question}
            </p>
          </div>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              const showCorrect = showExplanation && isCorrectAnswer;
              const showIncorrect = showExplanation && isSelected && !isCorrect;

              return (
                <Button
                  key={index}
                  variant={showCorrect ? "default" : showIncorrect ? "destructive" : "outline"}
                  className={`h-auto py-4 px-6 text-left justify-start text-base font-medium ${
                    showCorrect ? "bg-success hover:bg-success" : ""
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <span className="flex items-center gap-3 w-full">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showCorrect && <CheckCircle2 className="h-5 w-5 flex-shrink-0" />}
                    {showIncorrect && <XCircle className="h-5 w-5 flex-shrink-0" />}
                  </span>
                </Button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`p-6 rounded-lg border-2 ${
              isCorrect 
                ? "bg-success/10 border-success" 
                : "bg-warning/10 border-warning"
            }`}>
              <p className="text-lg font-semibold mb-2 flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="h-6 w-6 text-success" />
                    <span className="text-success">Muito bem! 🎉</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-6 w-6 text-warning" />
                    <span className="text-warning">Quase lá! 💪</span>
                  </>
                )}
              </p>
              <p className="text-base text-foreground">
                {currentQuestion.explanation}
              </p>
            </div>
          )}

          {showExplanation && (
            <Button 
              onClick={handleNext}
              size="lg"
              className="w-full text-lg h-14 font-bold"
            >
              {currentQuestionIndex < questions.length - 1 ? (
                <>
                  Próxima Pergunta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              ) : (
                "Ver Resultado Final 🏆"
              )}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
