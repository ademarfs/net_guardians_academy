-- Criar tabela para armazenar dados dos jogadores
CREATE TABLE public.players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  age integer NOT NULL CHECK (age >= 1 AND age <= 150),
  score integer NOT NULL DEFAULT 0,
  completed_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now()
);

-- Habilitar RLS (como os dados são públicos para fins educativos, permite inserção anônima)
ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;

-- Política para permitir qualquer um inserir dados (jogo público)
CREATE POLICY "Anyone can insert player data"
ON public.players
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Política para permitir leitura pública
CREATE POLICY "Anyone can read player data"
ON public.players
FOR SELECT
TO anon, authenticated
USING (true);

-- Criar tabela para armazenar feedback
CREATE TABLE public.feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  player_id uuid REFERENCES public.players(id) ON DELETE CASCADE,
  question_1 text NOT NULL,
  question_2 text NOT NULL,
  question_3 text NOT NULL,
  question_4 text NOT NULL,
  question_5 text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de feedback
CREATE POLICY "Anyone can insert feedback"
ON public.feedback
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Política para leitura pública
CREATE POLICY "Anyone can read feedback"
ON public.feedback
FOR SELECT
TO anon, authenticated
USING (true);