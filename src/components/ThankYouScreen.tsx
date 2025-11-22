import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PartyPopper, RotateCcw } from "lucide-react";

interface ThankYouScreenProps {
  onRestart: () => void;
}

export const ThankYouScreen = ({ onRestart }: ThankYouScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-4 border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-8 rounded-full animate-bounce">
              <PartyPopper className="w-24 h-24 text-primary" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold text-primary">
            Obrigado! 🎉
          </CardTitle>
          <CardDescription className="text-xl font-semibold text-foreground">
            Seu feedback foi registrado com sucesso!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-secondary/20 p-6 rounded-lg text-center space-y-4">
            <p className="text-lg font-semibold text-foreground">
              🛡️ Você aprendeu sobre:
            </p>
            <ul className="text-base text-muted-foreground space-y-2">
              <li>🎣 Phishing - Como identificar mensagens falsas</li>
              <li>🔐 Senhas Fortes - Como criar senhas seguras</li>
              <li>🔗 Links Suspeitos - Como verificar links</li>
              <li>🔓 Compartilhamento - O que não compartilhar online</li>
              <li>💰 Golpes Online - Como identificar ofertas falsas</li>
            </ul>
          </div>

          <div className="bg-accent/20 p-6 rounded-lg text-center">
            <p className="text-base font-semibold text-foreground">
              Continue sempre seguro na internet! 🌐<br/>
              Lembre-se: Na dúvida, pergunte a um adulto! 👨‍👩‍👧‍👦
            </p>
          </div>

          <Button 
            onClick={onRestart}
            size="lg"
            className="w-full text-xl h-14 font-bold"
          >
            <RotateCcw className="mr-2 h-6 w-6" />
            Jogar Novamente
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
