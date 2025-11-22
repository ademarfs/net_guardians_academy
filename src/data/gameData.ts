export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const cyberAttacks: Question[] = [
  // PHISHING
  {
    id: 1,
    question: "Você recebe um email dizendo que ganhou um prêmio e precisa clicar em um link para receber. O que você deve fazer?",
    options: [
      "Clicar no link imediatamente para receber o prêmio",
      "Perguntar para um adulto antes de clicar",
      "Responder o email com seus dados pessoais",
      "Compartilhar com todos os amigos"
    ],
    correctAnswer: 1,
    explanation: "🎣 Phishing é quando alguém tenta te enganar com mensagens falsas! Sempre pergunte para um adulto antes de clicar em links desconhecidos.",
    category: "Phishing"
  },
  {
    id: 2,
    question: "Uma mensagem no WhatsApp diz que sua conta será bloqueada se você não clicar no link. O que fazer?",
    options: [
      "Clicar rapidamente para não perder a conta",
      "Ignorar e avisar um adulto",
      "Encaminhar para todos os contatos",
      "Digitar sua senha no link"
    ],
    correctAnswer: 1,
    explanation: "🎣 Golpes de Phishing usam medo para fazer você agir rápido! Mensagens oficiais nunca pedem senha por links.",
    category: "Phishing"
  },
  {
    id: 3,
    question: "Um email parece ser do seu jogo favorito pedindo sua senha. O que você faz?",
    options: [
      "Enviar a senha porque parece real",
      "Verificar com um adulto antes de responder",
      "Criar uma senha nova e enviar",
      "Clicar em todos os links do email"
    ],
    correctAnswer: 1,
    explanation: "🎣 Empresas reais NUNCA pedem sua senha por email! Isso é Phishing - uma tentativa de roubar suas informações.",
    category: "Phishing"
  },

  // SENHAS FRACAS
  {
    id: 4,
    question: "Qual destas senhas é mais segura?",
    options: [
      "123456",
      "meunome",
      "Cach0rr0F3l1z#2024",
      "senha123"
    ],
    correctAnswer: 2,
    explanation: "🔐 Senhas fortes misturam letras maiúsculas, minúsculas, números e símbolos! Nunca use senhas óbvias como '123456'.",
    category: "Senhas Fracas"
  },
  {
    id: 5,
    question: "Seu amigo quer saber sua senha para jogar junto. O que você deve fazer?",
    options: [
      "Contar a senha para ele",
      "Escrever a senha e dar para ele",
      "Nunca compartilhar, nem com amigos",
      "Falar metade da senha"
    ],
    correctAnswer: 2,
    explanation: "🔐 Senhas são SECRETAS! Nem com melhores amigos devemos compartilhar. Cada pessoa deve ter suas próprias contas.",
    category: "Senhas Fracas"
  },
  {
    id: 6,
    question: "Onde é o melhor lugar para guardar suas senhas?",
    options: [
      "Num papel grudado no computador",
      "Contar para todo mundo não esquecer",
      "Num caderno secreto ou com ajuda de um adulto",
      "Deixar salva no navegador de computador público"
    ],
    correctAnswer: 2,
    explanation: "🔐 Senhas devem ser guardadas em lugares seguros! Um caderno secreto ou gerenciador de senhas com supervisão de adultos é a melhor opção.",
    category: "Senhas Fracas"
  },

  // LINKS SUSPEITOS
  {
    id: 7,
    question: "Você vê um link com endereço estranho: 'www.g00gle-premio.xyz'. Parece seguro?",
    options: [
      "Sim, tem 'google' no nome",
      "Não, o endereço parece falso",
      "Sim, porque termina com .xyz",
      "Não sei, vou clicar para ver"
    ],
    correctAnswer: 1,
    explanation: "🔗 Links Suspeitos têm endereços estranhos! O Google verdadeiro é 'google.com', não g00gle ou google-premio. Sempre confira!",
    category: "Links Suspeitos"
  },
  {
    id: 8,
    question: "Um link promete '1000 Robux grátis' no jogo. O que você faz?",
    options: [
      "Clica porque quer Robux",
      "Compartilha com amigos",
      "Ignora - provavelmente é golpe",
      "Clica e coloca sua senha"
    ],
    correctAnswer: 2,
    explanation: "🔗 Links prometendo coisas 'grátis demais' são normalmente golpes! Jogos oficiais não dão prêmios por links aleatórios.",
    category: "Links Suspeitos"
  },
  {
    id: 9,
    question: "Como saber se um link é seguro antes de clicar?",
    options: [
      "Clicar e ver o que acontece",
      "Verificar se começa com 'https://' e tem cadeado",
      "Todos os links são seguros",
      "Links coloridos são sempre seguros"
    ],
    correctAnswer: 1,
    explanation: "🔗 Sites seguros começam com 'https://' e mostram um cadeado! Mas mesmo assim, sempre pergunte a um adulto se não tiver certeza.",
    category: "Links Suspeitos"
  },

  // COMPARTILHAMENTO EXCESSIVO
  {
    id: 10,
    question: "É seguro postar seu endereço completo nas redes sociais?",
    options: [
      "Sim, para meus amigos saberem onde moro",
      "Não, pessoas desconhecidas podem ver",
      "Sim, se a conta for privada",
      "Só o CEP pode"
    ],
    correctAnswer: 1,
    explanation: "🔓 Compartilhamento Excessivo é perigoso! Nunca compartilhe endereço, escola, telefone ou localização online - pessoas desconhecidas podem ver.",
    category: "Compartilhamento Excessivo"
  },
  {
    id: 11,
    question: "Você tira uma foto com uniforme da escola. Pode postar?",
    options: [
      "Sim, é só uma foto",
      "Melhor não - mostra onde você estuda",
      "Sim, se esconder o rosto",
      "Pode, mas só no fim de semana"
    ],
    correctAnswer: 1,
    explanation: "🔓 Uniformes revelam sua escola! Evite postar fotos que mostrem onde você estuda, treina ou mora. Sua segurança é mais importante!",
    category: "Compartilhamento Excessivo"
  },
  {
    id: 12,
    question: "Um desconhecido na internet quer ser seu amigo e saber sua idade e cidade. O que fazer?",
    options: [
      "Contar tudo, ele parece legal",
      "Não responder e contar para um adulto",
      "Contar só a idade",
      "Perguntar a idade dele primeiro"
    ],
    correctAnswer: 1,
    explanation: "🔓 NUNCA compartilhe informações pessoais com desconhecidos online! Sempre conte para um adulto quando alguém desconhecido fizer perguntas.",
    category: "Compartilhamento Excessivo"
  },

  // GOLPES ONLINE
  {
    id: 13,
    question: "Um site promete 'iPhone de graça - só pagar frete de R$50'. É confiável?",
    options: [
      "Sim! É só pagar o frete",
      "Não! Isso é um golpe clássico",
      "Sim, se tiver fotos bonitas",
      "Talvez, vou tentar"
    ],
    correctAnswer: 1,
    explanation: "💰 Golpes Online prometem coisas valiosas por preços baixos! Ninguém dá iPhone pagando só frete. Se parece bom demais, é golpe!",
    category: "Golpes Online"
  },
  {
    id: 14,
    question: "Você vê um anúncio: 'Clique aqui e ganhe R$1000!'. O que fazer?",
    options: [
      "Clicar rapidamente",
      "Ignorar - é golpe",
      "Preencher dados pessoais",
      "Compartilhar com amigos"
    ],
    correctAnswer: 1,
    explanation: "💰 Ninguém dá dinheiro de graça na internet! Estes são Golpes Online para roubar seus dados ou dinheiro. Sempre ignore!",
    category: "Golpes Online"
  },
  {
    id: 15,
    question: "Como identificar uma loja online falsa?",
    options: [
      "Todas as lojas são verdadeiras",
      "Preços muito baixos, site mal feito, sem telefone",
      "Se tiver fotos é verdadeira",
      "Sites novos são sempre confiáveis"
    ],
    correctAnswer: 1,
    explanation: "💰 Golpistas criam lojas falsas com preços incríveis! Desconfie de sites sem contato, mal feitos ou com preços absurdos. Sempre compre com adultos!",
    category: "Golpes Online"
  },
];

export const feedbackQuestions = [
  "O jogo foi divertido e fácil de entender?",
  "Você aprendeu sobre os perigos da internet?",
  "As explicações ajudaram você a entender melhor?",
  "Você se sente mais seguro na internet agora?",
  "O apresentador da aula explicou bem o conteúdo?"
];
