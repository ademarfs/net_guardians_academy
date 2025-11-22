import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Gamepad2 } from "lucide-react";

interface WelcomeScreenProps {
  onStart: (name: string, age: number) => void;
}

export const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && age && parseInt(age) > 0) {
      onStart(name.trim(), parseInt(age));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-4">
      <Card className="w-full max-w-md shadow-2xl border-4 border-primary/20">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <Shield className="w-16 h-16 text-primary" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold text-primary">
            🛡️ Cyber Segurança Kids
          </CardTitle>
          <CardDescription className="text-lg">
            Aprenda a se proteger no mundo digital de forma divertida!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg font-semibold">
                Qual é o seu nome?
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome aqui"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="text-lg h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age" className="text-lg font-semibold">
                Quantos anos você tem?
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="Digite sua idade"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
                min="1"
                max="99"
                className="text-lg h-12"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-xl h-14 font-bold"
              disabled={!name.trim() || !age}
            >
              <Gamepad2 className="mr-2 h-6 w-6" />
              Começar a Aventura!
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
