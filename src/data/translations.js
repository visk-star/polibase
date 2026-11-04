// Add new translated text here as the site grows.
// To translate another page later, add a matching section under each language.
// To add another language, copy the shape of "en" and translate each value.
export const translations = {
  en: {
    nav: {
      tagline: 'Civic education, simplified',
      menu: 'Menu',
      homeAria: 'Go to PoliBase home',
      languageLabel: 'Choose language',
      home: 'Home',
      map: 'Map',
      basics: 'Basics',
      parties: 'Parties',
      whyItMatters: 'Why It Matters',
      news: 'News',
      quiz: 'Quiz'
    },
    home: {
      badge: 'Nonpartisan civic education',
      title: 'PoliBase',
      subtitle: 'Your simple guide to U.S. elections, political parties, politicians, and how American government affects your life.',
      focus: 'Focused on American politics',
      exploreMap: 'Explore the Map',
      learnBasics: 'Learn the Basics',
      whoTitle: 'Who PoliBase is for',
      whoText: 'PoliBase is built for people who want a clear starting point. No party cheerleading, no insider language, and no assumption that you already know how elections work.',
      audiences: [
        'Young voters',
        'First-time voters',
        'Students',
        'Immigrants',
        'Anyone confused by politics'
      ],
      disclaimer: 'PoliBase is a nonpartisan civic education project. Some features currently use sample data for demonstration purposes.',
      officialInfo: 'Always verify voting information with official state election offices.'
    },
    footer: {
      sampleData: 'PoliBase is a neutral civic learning project using sample data.',
      officialInfo: 'Always check official election offices for current voting information.'
    },
    news: {
      badge: 'Civic news',
      title: 'Recent U.S. political news',
      intro: 'Follow recent reporting about court decisions, immigration, education, healthcare, housing, elections, and other issues that shape public life.',
      disclaimer: 'PoliBase links to reporting from established news organizations and public-information sources. Read the original article for full context. News links come from a free public index and may change throughout the day.',
      loading: 'Loading recent news...',
      latest: 'Latest',
      exploreTopics: 'Explore by topic',
      liveFeed: 'Live news feed',
      refreshNote: 'Refreshes automatically',
      stories: 'recent stories',
      unavailableTitle: 'News is temporarily unavailable',
      unavailableText: 'PoliBase could not load individual news stories right now. Please try again in a moment.',
      noStories: 'No recent stories matched this topic. Try another topic or check again soon.',
      tryAgain: 'Try again',
      readMore: 'Read the original report',
      fallbackTitle: 'Open trusted news pages',
      fallbackText: 'The live feed is temporarily unavailable. These pages are useful places to check for the latest coverage.'
    },
    map: {
      badge: 'Interactive U.S. map',
      title: 'Explore Recent State Voting Trends',
      intro: 'Click a state to see a snapshot with simplified educational data about elections, offices, and recent voting trends.',
      disclaimer: 'State political trends can change over time. These colors are simplified educational labels based on recent election patterns, not permanent identities.',
      hoverHint: 'Hover or tap a state',
      mapAria: 'Clickable map of the United States',
      legendDemocratic: 'Blue: leans Democratic',
      legendRepublican: 'Red: leans Republican',
      legendCompetitive: 'Purple: swing / competitive',
      emptyState: 'Select a state to see sample election details.',
      snapshot: 'State snapshot',
      recentVotingTrend: 'Recent voting trend',
      electoralVotes: 'Electoral votes',
      electoralVotesTooltip: 'Electoral votes are the number of votes a state has in the Electoral College. They help determine who wins the U.S. presidency. States with more people usually have more electoral votes.',
      lastMajorElection: 'Last major election',
      nextMajorElection: 'Next major election',
      registrationDeadline: 'Registration deadline',
      officialElectionSite: 'Official election site',
      keyOffices: 'Key offices elected',
      whyStateMatters: 'Why this state matters politically',
      leanings: {
        democratic: 'Leans Democratic',
        republican: 'Leans Republican',
        competitive: 'Swing / Competitive'
      }
    },
    basics: {
      badge: 'Start here',
      title: 'Learn the Basics',
      intro: 'These short explainers cover the words and systems people mention all the time, without assuming you took a government class.',
      label: 'Learn',
      cards: [
        {
          title: 'What is a primary election?',
          description: 'A primary is how voters help choose which candidate a party will nominate for a later election. Rules vary by state, and some states let more voters take part than others.',
          accent: 'blue'
        },
        {
          title: 'What is a general election?',
          description: 'A general election is the final contest where voters choose who will hold an office. It usually includes candidates from major parties, third parties, and sometimes independent candidates.',
          accent: 'red'
        },
        {
          title: 'What is the Electoral College?',
          description: 'The Electoral College is the system used to choose the president. Each state gets a number of electoral votes, and candidates try to win enough states to reach the required total.',
          accent: 'purple'
        },
        {
          title: 'What does Congress do?',
          description: 'Congress writes federal laws, approves spending, confirms some officials, and checks the power of the president. It has two parts: the House of Representatives and the Senate.',
          accent: 'blue'
        },
        {
          title: 'Federal, state, and local government',
          description: 'Federal government handles national issues, state government manages statewide rules and services, and local government makes decisions close to daily life, like schools, roads, and zoning.',
          accent: 'slate'
        },
        {
          title: 'Why voting matters',
          description: 'Voting is one way people shape decisions about taxes, schools, healthcare, courts, roads, housing, and civil rights. Local elections can affect daily life very directly.',
          accent: 'purple'
        }
      ]
    },
    parties: {
      badge: 'Neutral comparison',
      title: 'Parties & Politicians',
      intro: 'Political parties are groups that organize around candidates, ideas, and priorities. People inside the same party can still disagree with one another.',
      figuresTitle: 'Major political figures',
      note: 'Parties change over time, and candidates do not always match every party position. The best way to understand a candidate is to check their official platform, voting record, public statements, and trusted nonpartisan summaries.',
      groups: [
        {
          name: 'Democrats',
          color: 'bg-blue-50 border-blue-100',
          summary: 'The Democratic Party is one of the two major U.S. political parties. Its candidates often focus on issues such as healthcare access, climate policy, labor rights, civil rights, and public programs.',
          figures: ['Placeholder: national Democratic figure', 'Placeholder: state Democratic figure']
        },
        {
          name: 'Republicans',
          color: 'bg-rose-50 border-rose-100',
          summary: 'The Republican Party is one of the two major U.S. political parties. Its candidates often focus on issues such as taxes, business regulation, public safety, immigration enforcement, energy policy, and limited government.',
          figures: ['Placeholder: national Republican figure', 'Placeholder: state Republican figure']
        },
        {
          name: 'Independents / third parties',
          color: 'bg-violet-50 border-violet-100',
          summary: 'Independent candidates and third parties are not part of the two major parties. They may focus on a wide range of views, and their role can vary a lot by state, office, and election year.',
          figures: ['Placeholder: independent figure', 'Placeholder: third-party figure']
        }
      ]
    },
    whyItMattersPage: {
      badge: 'Daily life',
      title: 'Why It Matters to You',
      intro: 'Politics can feel distant, but many decisions show up in everyday costs, rights, services, jobs, and opportunities.',
      topics: [
        { title: 'College tuition', text: 'Elected officials can influence public college funding, financial aid, student loan rules, and job training programs.' },
        { title: 'Immigration', text: 'Federal law shapes visas, citizenship, asylum, and border policy, while state and local decisions can affect services and enforcement priorities.' },
        { title: 'Healthcare', text: 'Government choices can affect insurance rules, public health programs, prescription costs, clinics, and emergency care funding.' },
        { title: 'Jobs and minimum wage', text: 'Federal, state, and local governments can set labor standards, workplace protections, tax rules, and minimum wage levels.' },
        { title: 'Housing', text: 'Local zoning, state housing policy, rent rules, permits, transportation, and public investment can all affect housing supply and cost.' },
        { title: 'Climate and transportation', text: 'Public decisions shape roads, transit, clean energy projects, disaster planning, air quality, and how communities prepare for extreme weather.' }
      ]
    },
    quiz: {
      badge: 'Quick quiz',
      title: 'Find a Starting Point',
      intro: 'Choose a quiz: test your basic civics knowledge, or explore broad party perspectives through simple issue questions.',
      resultLabel: 'Your result',
      retake: 'Try 5 New Questions',
      progress: 'Questions completed: {count}/{total}',
      incomplete: 'Answer all {count} questions to see your result. Completed in this round: {completed}.',
      completionNotice: 'PoliBase is currently working on updating the quiz and will bring new questions soon.',
      results: {
        local: 'You might want to learn more about local elections.',
        national: 'You might want to start with national politics.',
        students: 'You may be interested in policy issues that affect students.'
      },
      modesTitle: 'Choose a quiz',
      knowledgeMode: 'Test your civics knowledge',
      knowledgeModeText: 'Answer five questions from the 100-question knowledge bank. Each answer shows whether it is correct.',
      partyMode: 'Explore party perspectives',
      partyModeText: 'Answer 20 issue questions to explore the broad party perspectives represented in your responses.',
      startKnowledge: 'Start knowledge quiz',
      startParty: 'Start party quiz',
      backToQuizChoices: 'Back to quiz choices',
      correct: 'Correct',
      incorrect: 'Not quite',
      correctAnswer: 'Correct answer',
      knowledgeScore: 'Knowledge quiz result',
      knowledgeResult: 'You answered {correct} of {total} questions correctly.',
      partyIntro: 'This is a self-reflection activity, not a prediction of party membership. Parties contain many different viewpoints, and people can agree with different parties on different issues.',
      partyResultLabel: 'Your party perspective result',
      partyPerspectivesTitle: 'Party perspectives in your answers',
      partyResultIntro: 'These are the broad party perspectives represented in your answers. This activity does not assign you a party or tell you how to vote.',
      partyProgress: 'Questions answered: {answered}/{total}',
      showPartyResult: 'Show my perspective result',
      partyFounded: 'How it was created',
      partyRepresents: 'What it commonly represents',
      partyLeaders: 'Famous or nationally prominent leaders',
      partyCurrentLeadership: 'Current national leadership',
      partyRegionalPresence: 'Where it is organized or especially visible',
      partyIdentification: 'Party identification note',
      partyResources: 'Resources to learn more',
      partyWhyTitle: 'Why this perspective appeared',
      partyWhyIntro: 'Some of your answers used ideas that are commonly connected with the {party}. For example:',
      partyRetake: 'Retake party quiz',
      partyProfiles: {
        democratic: {
          name: 'Democratic Party',
          founded: 'The modern Democratic Party developed from the coalition that supported Andrew Jackson and became a national party in the 1820s and 1830s.',
          representation: 'The party’s stated priorities commonly include expanding access to healthcare and education, protecting civil rights, supporting workers, investing in public programs, and addressing climate change. Positions and emphasis can change over time.',
          leaders: 'Historical figures associated with the party include Andrew Jackson, Franklin D. Roosevelt, Eleanor Roosevelt, Lyndon B. Johnson, and Barack Obama.',
          currentLeadership: 'Current DNC Chair: Ken Martin. Party leadership also includes additional vice chairs and committee officers.',
          regionalPresence: 'Organized nationwide, with state parties in all 50 states and U.S. territories.',
          identificationNote: 'Party identification varies by survey, state, and time. PoliBase does not assign a percentage.',
          resources: [
            { label: 'Democratic Party website', url: 'https://democrats.org/' },
            { label: 'DNC leadership', url: 'https://democrats.org/leadership/' },
            { label: 'FEC party information', url: 'https://www.fec.gov/press/resources-journalists/political-parties/' }
          ]
        },
        republican: {
          name: 'Republican Party',
          founded: 'The Republican Party was organized in the 1850s by groups opposing the expansion of slavery and became a national party in 1854.',
          representation: 'The party’s stated priorities commonly include lower taxes, economic growth, public safety, national defense, energy development, and a stronger role for states and private enterprise. Positions and emphasis can change over time.',
          leaders: 'Historical figures associated with the party include Abraham Lincoln, Theodore Roosevelt, Dwight D. Eisenhower, Ronald Reagan, and George H. W. Bush.',
          currentLeadership: 'Current RNC Chair: Joe Gruters. Current RNC Co-Chair: KC Crosbie.',
          regionalPresence: 'Organized nationwide through state Republican parties and local committees.',
          identificationNote: 'Party identification varies by survey, state, and time. PoliBase does not assign a percentage.',
          resources: [
            { label: 'Republican Party website', url: 'https://www.rnc.org/' },
            { label: 'GOP platform', url: 'https://www.presidency.ucsb.edu/documents/2024-republican-party-platform' },
            { label: 'FEC party information', url: 'https://www.fec.gov/press/resources-journalists/political-parties/' }
          ]
        },
        green: {
          name: 'Green Party',
          founded: 'Green organizing in the United States grew from state and local groups beginning in the 1980s. The Green Party of the United States formed as a national party in 2001.',
          representation: 'The party’s stated values commonly emphasize ecological sustainability, social justice, grassroots democracy, nonviolence, and community-based decision-making.',
          leaders: 'Nationally prominent figures associated with the U.S. Green movement include Ralph Nader, Jill Stein, and Howie Hawkins.',
          currentLeadership: 'Green Party of the United States leadership is organized through a Steering Committee, which includes co-chairs such as Ann Link, Arshia Papari, Craig Cayetano, and Kalia J. Fitzgerald.',
          regionalPresence: 'Organized through state parties; ballot access and strength vary by state.',
          identificationNote: 'Party identification estimates vary by survey and state, especially for smaller parties. PoliBase does not assign a percentage.',
          resources: [
            { label: 'Green Party website', url: 'https://www.gp.org/' },
            { label: 'Green Party values', url: 'https://www.gp.org/about' },
            { label: 'Green Party leadership', url: 'https://www.gp.org/steering' }
          ]
        },
        libertarian: {
          name: 'Libertarian Party',
          founded: 'The Libertarian Party was founded on December 11, 1971, after meetings organized by David Nolan and other libertarian activists.',
          representation: 'The party’s stated principles commonly emphasize individual liberty, personal responsibility, free markets, civil liberties, and a smaller government role.',
          leaders: 'Prominent figures associated with the party include David Nolan, John Hospers, Tonie Nathan, Ron Paul, and Gary Johnson.',
          currentLeadership: 'Current Libertarian National Committee Chair: Evan McMahon.',
          regionalPresence: 'Organized through state affiliates; ballot access varies by state.',
          identificationNote: 'Party identification estimates vary by survey and state, especially for smaller parties. PoliBase does not assign a percentage.',
          resources: [
            { label: 'Libertarian Party website', url: 'https://lp.org/' },
            { label: 'Libertarian Party history', url: 'https://lp.org/our-history/' },
            { label: 'Libertarian Party leadership', url: 'https://lp.org/who-we-are/' }
          ]
        },
        other: {
          name: 'Independent / Other',
          founded: 'Independent candidates are not part of one national party. Other parties in U.S. history have formed around particular movements, regions, or policy ideas.',
          representation: 'This perspective means your answers did not line up closely with one party perspective in this quiz, or that you prefer to decide issue by issue. Independent voters and smaller parties can hold many different views.',
          leaders: 'There is no single list of leaders for independent voters or all other parties. Examples from U.S. history include George Washington as an unaffiliated president and Ross Perot as an independent presidential candidate.',
          currentLeadership: 'There is no single national leadership structure for all independent voters or other parties.',
          regionalPresence: 'Varies by candidate, issue, state, and election year.',
          identificationNote: 'Independent and other-party identification varies widely by survey and state. PoliBase does not assign a percentage.'
        },
        constitution: {
          name: 'Constitution Party',
          founded: 'The Constitution Party was organized in 1992 as the U.S. Taxpayers Party and adopted the Constitution Party name in 1999.',
          representation: 'Its stated principles emphasize constitutional limits on federal power, national sovereignty, traditional social values, and protection of life, liberty, and property.',
          leaders: 'Howard Phillips is associated with the party’s founding; its current national chair is Justin L. Magill.',
          currentLeadership: 'Current national chair: Justin L. Magill.',
          regionalPresence: 'Ballot access and organized state presence vary by state.',
          identificationNote: 'Reliable estimates vary by survey and state. PoliBase does not assign a percentage.',
          resources: [
            { label: 'Constitution Party website', url: 'https://constitutionparty.com/' },
            { label: 'Constitution Party platform', url: 'https://constitutionparty.com/platform/' },
            { label: 'Constitution Party news', url: 'https://constitutionparty.com/press_room/' }
          ]
        },
        reform: {
          name: 'Reform Party',
          founded: 'The Reform Party was founded by concerned citizens in the early 1990s and grew from presidential campaigns associated with Ross Perot.',
          representation: 'Its stated priorities commonly emphasize ethics reform, accountability, government transparency, centrist problem-solving, and economic policies aimed at working and middle-class voters.',
          leaders: 'Ross Perot is the best-known figure associated with the party; leadership can vary by national and state organization.',
          currentLeadership: 'Leadership should be checked on the Reform Party National Committee website because party structures can change.',
          regionalPresence: 'Activity and ballot access vary significantly by state.',
          identificationNote: 'Reliable estimates vary by survey and state. PoliBase does not assign a percentage.'
        },
        workingFamilies: {
          name: 'Working Families Party',
          founded: 'The Working Families Party began as a New York State party in 1998 and later developed a national coordinating structure.',
          representation: 'Its stated priorities commonly emphasize worker power, unions, economic equality, affordable services, racial justice, and grassroots organizing.',
          leaders: 'Prominent figures associated with the party include Zephyr Teachout, Jamaal Bowman, and state and local Working Families leaders.',
          currentLeadership: 'The party is organized through a national committee and state chapters; leadership is shared across its network.',
          regionalPresence: 'Especially organized in states with Working Families ballot lines, including New York and several states in the Northeast and Pacific Northwest; ballot rules vary.',
          identificationNote: 'Party identification is tracked differently for state parties and national organizations. PoliBase does not assign a percentage.'
        },
        solidarity: {
          name: 'American Solidarity Party',
          founded: 'The movement began in 2011, adopted the American Solidarity Party name in 2012, and incorporated in 2016.',
          representation: 'Its stated platform draws on Christian-democratic ideas and emphasizes human dignity, family and community support, social justice, peace, and a common-good approach.',
          leaders: 'Prominent party figures include Brian Carroll and Peter Sonski; current leadership includes Patrick Harris as chair.',
          currentLeadership: 'Current national leadership listed by the party includes Patrick Harris, Jack Ternan, and Lucy Moye.',
          regionalPresence: 'It has a national organization, while candidates and ballot access vary by state.',
          identificationNote: 'Reliable estimates vary by survey and state. PoliBase does not assign a percentage.'
        },
        alliance: {
          name: 'Alliance Party',
          founded: 'The U.S. Alliance Party formed through mergers of several independent parties and registered with the FEC in 2019.',
          representation: 'Its stated values emphasize opportunity, equality, integrity, transparency, accountability, and practical cooperation.',
          leaders: 'Its public profile is built around independent and moderate candidates; prominent leaders may vary by state and election.',
          currentLeadership: 'Leadership can vary across the party and its state organizations; verify current details with the national party.',
          regionalPresence: 'Organized presence and ballot access vary by state.',
          identificationNote: 'Reliable estimates vary by survey and state. PoliBase does not assign a percentage.'
        }
      },
      questions: [
        {
          question: 'Which election is usually most connected to city services like parks, roads, and local schools?',
          options: [
            { text: 'Local election', category: 'local' },
            { text: 'Presidential election', category: 'national' },
            { text: 'International election', category: 'national' }
          ]
        },
        {
          question: 'If you care most about tuition, student loans, and campus policy, where might you start learning?',
          options: [
            { text: 'Education and student policy', category: 'students' },
            { text: 'Only foreign policy', category: 'national' },
            { text: 'Only campaign ads', category: 'local' }
          ]
        },
        {
          question: 'What does a primary election help decide?',
          options: [
            { text: 'Which candidates move on for a party or race', category: 'national' },
            { text: 'The winner of every office automatically', category: 'local' },
            { text: 'Which laws courts must follow', category: 'students' }
          ]
        },
        {
          question: 'Which level of government often decides zoning and housing permits?',
          options: [
            { text: 'Local government', category: 'local' },
            { text: 'The United Nations', category: 'national' },
            { text: 'Only the president', category: 'national' }
          ]
        },
        {
          question: 'What is a good first step before voting?',
          options: [
            { text: 'Check your registration and official election site', category: 'local' },
            { text: 'Only read one social media post', category: 'students' },
            { text: 'Ignore down-ballot races', category: 'national' }
          ]
        }
      ]
    }
  },

  pt: {
    nav: {
      tagline: 'Educação cívica simplificada',
      menu: 'Menu',
      homeAria: 'Ir para a página inicial do PoliBase',
      languageLabel: 'Escolher idioma',
      home: 'Início',
      map: 'Mapa',
      basics: 'Básico',
      parties: 'Partidos',
      whyItMatters: 'Por Que Importa',
      news: 'Notícias',
      quiz: 'Quiz'
    },
    home: {
      badge: 'Educação cívica não partidária',
      title: 'PoliBase',
      subtitle: 'Seu guia simples para entender eleições dos EUA, partidos políticos, políticos e como o governo americano afeta a sua vida.',
      focus: 'Focado na política dos Estados Unidos',
      exploreMap: 'Explorar o Mapa',
      learnBasics: 'Aprender o Básico',
      whoTitle: 'Para quem é o PoliBase',
      whoText: 'O PoliBase foi criado para pessoas que querem um ponto de partida claro. Sem propaganda partidária, sem linguagem complicada e sem presumir que você já entende como as eleições funcionam.',
      audiences: [
        'Jovens eleitores',
        'Pessoas votando pela primeira vez',
        'Estudantes',
        'Imigrantes',
        'Qualquer pessoa confusa sobre política'
      ],
      disclaimer: 'O PoliBase é um projeto de educação cívica não partidário. Algumas funções atualmente usam dados de exemplo para demonstração.',
      officialInfo: 'Sempre confira informações eleitorais em sites oficiais dos estados.'
    },
    footer: {
      sampleData: 'O PoliBase é um projeto neutro de educação cívica que usa dados de exemplo.',
      officialInfo: 'Sempre confira informações eleitorais atuais com os órgãos eleitorais oficiais.'
    },
    news: {
      badge: 'Notícias cívicas',
      title: 'Notícias políticas recentes dos EUA',
      intro: 'Acompanhe reportagens recentes sobre decisões judiciais, imigração, educação, saúde, moradia, eleições e outros temas que afetam a vida pública.',
      disclaimer: 'O PoliBase faz links para reportagens de organizações jornalísticas reconhecidas e fontes de informação pública. Leia o artigo original para ver o contexto completo. Os links vêm de um índice público gratuito e podem mudar ao longo do dia.',
      loading: 'Carregando notícias recentes...',
      latest: 'Mais recentes',
      exploreTopics: 'Explorar por tema',
      liveFeed: 'Feed de notícias ao vivo',
      refreshNote: 'Atualiza automaticamente',
      stories: 'notícias recentes',
      unavailableTitle: 'As notícias estão temporariamente indisponíveis',
      unavailableText: 'O PoliBase não conseguiu carregar as notícias agora. Tente novamente em instantes.',
      noStories: 'Nenhuma notícia recente correspondeu a este tema. Tente outro tema ou volte em breve.',
      tryAgain: 'Tentar novamente',
      readMore: 'Ler a reportagem original',
      fallbackTitle: 'Abrir páginas de notícias confiáveis',
      fallbackText: 'O feed ao vivo está temporariamente indisponível. Estas páginas são bons lugares para conferir a cobertura mais recente.'
    },
    map: {
      badge: 'Mapa interativo dos EUA',
      title: 'Explore tendências recentes de votação por estado',
      intro: 'Clique em um estado para ver um resumo com dados educacionais simplificados sobre eleições, cargos e tendências recentes de votação.',
      disclaimer: 'As tendências políticas dos estados podem mudar com o tempo. Estas cores são rótulos educacionais simplificados com base em padrões eleitorais recentes, não identidades permanentes.',
      hoverHint: 'Passe o mouse ou toque em um estado',
      mapAria: 'Mapa clicável dos Estados Unidos',
      legendDemocratic: 'Azul: tendência Democratic',
      legendRepublican: 'Vermelho: tendência Republican',
      legendCompetitive: 'Roxo: disputado / competitivo',
      emptyState: 'Selecione um estado para ver detalhes eleitorais de exemplo.',
      snapshot: 'Resumo do estado',
      recentVotingTrend: 'Tendência recente de votação',
      electoralVotes: 'Votos eleitorais',
      electoralVotesTooltip: 'Votos eleitorais são o número de votos que um estado tem no Electoral College. Eles ajudam a determinar quem vence a presidência dos EUA. Estados com mais pessoas geralmente têm mais votos eleitorais.',
      lastMajorElection: 'Última eleição importante',
      nextMajorElection: 'Próxima eleição importante',
      registrationDeadline: 'Prazo de registro',
      officialElectionSite: 'Site eleitoral oficial',
      keyOffices: 'Cargos eleitos principais',
      whyStateMatters: 'Por que este estado importa politicamente',
      leanings: {
        democratic: 'Tendência Democratic',
        republican: 'Tendência Republican',
        competitive: 'Disputado / competitivo'
      }
    },
    basics: {
      badge: 'Comece aqui',
      title: 'Aprenda o Básico',
      intro: 'Estes textos curtos explicam palavras e sistemas que as pessoas mencionam o tempo todo, sem presumir que você fez uma aula de governo.',
      label: 'Aprender',
      cards: [
        { title: 'O que é uma eleição primária?', description: 'Uma primária é como eleitores ajudam a escolher qual candidato um partido vai indicar para uma eleição posterior. As regras variam por estado, e alguns estados permitem que mais eleitores participem do que outros.', accent: 'blue' },
        { title: 'O que é uma eleição geral?', description: 'Uma eleição geral é a disputa final em que os eleitores escolhem quem ocupará um cargo. Ela geralmente inclui candidatos dos principais partidos, terceiros partidos e, às vezes, candidatos independentes.', accent: 'red' },
        { title: 'O que é o Electoral College?', description: 'O Electoral College é o sistema usado para escolher o presidente. Cada estado recebe um número de votos eleitorais, e os candidatos tentam vencer estados suficientes para alcançar o total necessário.', accent: 'purple' },
        { title: 'O que o Congress faz?', description: 'O Congress cria leis federais, aprova gastos, confirma alguns funcionários públicos e limita o poder do presidente. Ele tem duas partes: a House of Representatives e o Senate.', accent: 'blue' },
        { title: 'Governo federal, estadual e local', description: 'O governo federal cuida de questões nacionais, o governo estadual administra regras e serviços do estado, e o governo local toma decisões próximas da vida diária, como escolas, estradas e zoneamento.', accent: 'slate' },
        { title: 'Por que votar importa', description: 'Votar é uma forma de as pessoas influenciarem decisões sobre impostos, escolas, saúde, tribunais, estradas, moradia e direitos civis. Eleições locais podem afetar a vida diária de forma muito direta.', accent: 'purple' }
      ]
    },
    parties: {
      badge: 'Comparação neutra',
      title: 'Partidos e Políticos',
      intro: 'Partidos políticos são grupos que se organizam em torno de candidatos, ideias e prioridades. Pessoas dentro do mesmo partido ainda podem discordar entre si.',
      figuresTitle: 'Figuras políticas importantes',
      note: 'Partidos mudam com o tempo, e candidatos nem sempre seguem todas as posições de um partido. A melhor forma de entender um candidato é verificar sua plataforma oficial, histórico de votos, declarações públicas e resumos confiáveis não partidários.',
      groups: [
        { name: 'Democrats', color: 'bg-blue-50 border-blue-100', summary: 'O Democratic Party é um dos dois principais partidos políticos dos EUA. Seus candidatos frequentemente se concentram em temas como acesso à saúde, política climática, direitos trabalhistas, direitos civis e programas públicos.', figures: ['Espaço reservado: figura nacional Democratic', 'Espaço reservado: figura estadual Democratic'] },
        { name: 'Republicans', color: 'bg-rose-50 border-rose-100', summary: 'O Republican Party é um dos dois principais partidos políticos dos EUA. Seus candidatos frequentemente se concentram em temas como impostos, regulação de empresas, segurança pública, fiscalização da imigração, política energética e governo limitado.', figures: ['Espaço reservado: figura nacional Republican', 'Espaço reservado: figura estadual Republican'] },
        { name: 'Independents / third parties', color: 'bg-violet-50 border-violet-100', summary: 'Candidatos independentes e terceiros partidos não fazem parte dos dois principais partidos. Eles podem defender uma ampla variedade de ideias, e seu papel pode variar muito por estado, cargo e ano eleitoral.', figures: ['Espaço reservado: figura independente', 'Espaço reservado: figura de terceiro partido'] }
      ]
    },
    whyItMattersPage: {
      badge: 'Vida diária',
      title: 'Por Que Isso Importa Para Você',
      intro: 'A política pode parecer distante, mas muitas decisões aparecem nos custos do dia a dia, direitos, serviços, empregos e oportunidades.',
      topics: [
        { title: 'Mensalidade da faculdade', text: 'Autoridades eleitas podem influenciar o financiamento de faculdades públicas, ajuda financeira, regras de empréstimos estudantis e programas de capacitação profissional.' },
        { title: 'Imigração', text: 'A lei federal molda vistos, cidadania, asilo e política de fronteira, enquanto decisões estaduais e locais podem afetar serviços e prioridades de fiscalização.' },
        { title: 'Saúde', text: 'Escolhas do governo podem afetar regras de seguro, programas de saúde pública, custos de medicamentos, clínicas e financiamento de atendimento de emergência.' },
        { title: 'Empregos e salário mínimo', text: 'Governos federal, estaduais e locais podem definir padrões de trabalho, proteções no local de trabalho, regras fiscais e níveis de salário mínimo.' },
        { title: 'Moradia', text: 'Zoneamento local, política habitacional estadual, regras de aluguel, licenças, transporte e investimento público podem afetar a oferta e o custo da moradia.' },
        { title: 'Clima e transporte', text: 'Decisões públicas moldam estradas, transporte público, projetos de energia limpa, planejamento para desastres, qualidade do ar e como comunidades se preparam para eventos climáticos extremos.' }
      ]
    },
    quiz: {
      badge: 'Quiz rápido',
      title: 'Encontre um Ponto de Partida',
      intro: 'Escolha um quiz: teste seus conhecimentos cívicos básicos ou explore perspectivas partidárias amplas com perguntas simples sobre temas políticos.',
      resultLabel: 'Seu resultado',
      retake: 'Tentar 5 Novas Perguntas',
      progress: 'Perguntas concluídas: {count}/{total}',
      incomplete: 'Responda todas as {count} perguntas para ver seu resultado. Concluídas nesta rodada: {completed}.',
      completionNotice: 'O PoliBase está trabalhando para atualizar o quiz e trará novas perguntas em breve.',
      results: {
        local: 'Talvez você queira aprender mais sobre eleições locais.',
        national: 'Talvez você queira começar pela política nacional.',
        students: 'Você pode se interessar por temas de política pública que afetam estudantes.'
      },
      modesTitle: 'Escolha um quiz',
      knowledgeMode: 'Teste seus conhecimentos cívicos',
      knowledgeModeText: 'Responda cinco perguntas do banco de 100 perguntas. Cada resposta mostra se está correta.',
      partyMode: 'Explore perspectivas partidárias',
      partyModeText: 'Responda 20 perguntas sobre temas para explorar as perspectivas partidárias amplas representadas nas suas respostas.',
      startKnowledge: 'Começar quiz de conhecimentos',
      startParty: 'Começar quiz partidário',
      backToQuizChoices: 'Voltar às opções de quiz',
      correct: 'Correto',
      incorrect: 'Não exatamente',
      correctAnswer: 'Resposta correta',
      knowledgeScore: 'Resultado do quiz de conhecimentos',
      knowledgeResult: 'Você respondeu corretamente {correct} de {total} perguntas.',
      partyIntro: 'Esta é uma atividade de autorreflexão, não uma previsão de filiação partidária. Os partidos incluem muitos pontos de vista, e as pessoas podem concordar com partidos diferentes em questões diferentes.',
      partyResultLabel: 'Resultado das suas perspectivas partidárias',
      partyPerspectivesTitle: 'Perspectivas partidárias nas suas respostas',
      partyResultIntro: 'Estas são as perspectivas partidárias amplas representadas nas suas respostas. Esta atividade não atribui um partido a você nem diz como votar.',
      partyProgress: 'Perguntas respondidas: {answered}/{total}',
      showPartyResult: 'Mostrar meu resultado de perspectiva',
      partyFounded: 'Como foi criado',
      partyRepresents: 'O que geralmente representa',
      partyLeaders: 'Líderes famosos ou nacionalmente conhecidos',
      partyCurrentLeadership: 'Liderança nacional atual',
      partyRegionalPresence: 'Onde é organizada ou especialmente visível',
      partyIdentification: 'Observação sobre identificação partidária',
      partyResources: 'Recursos para aprender mais',
      partyWhyTitle: 'Por que esta perspectiva apareceu',
      partyWhyIntro: 'Algumas das suas respostas usaram ideias que costumam estar ligadas ao {party}. Por exemplo:',
      partyRetake: 'Refazer quiz partidário',
      partyProfiles: {
        democratic: { name: 'Democratic Party', founded: 'O Democratic Party moderno se desenvolveu a partir da coalizão que apoiou Andrew Jackson e se tornou um partido nacional nas décadas de 1820 e 1830.', representation: 'As prioridades declaradas do partido geralmente incluem ampliar o acesso à saúde e à educação, proteger direitos civis, apoiar trabalhadores, investir em programas públicos e enfrentar as mudanças climáticas. As posições podem mudar com o tempo.', leaders: 'Figuras históricas associadas ao partido incluem Andrew Jackson, Franklin D. Roosevelt, Eleanor Roosevelt, Lyndon B. Johnson e Barack Obama.', currentLeadership: 'Atual presidente do DNC: Ken Martin. A liderança também inclui vice-presidentes e dirigentes do comitê.', regionalPresence: 'Organizado nacionalmente, com partidos estaduais nos 50 estados e territórios dos EUA.', identificationNote: 'A identificação partidária varia conforme a pesquisa, o estado e o momento. O PoliBase não atribui uma porcentagem.' },
        republican: { name: 'Republican Party', founded: 'O Republican Party foi organizado na década de 1850 por grupos que se opunham à expansão da escravidão e se tornou um partido nacional em 1854.', representation: 'As prioridades declaradas do partido geralmente incluem impostos mais baixos, crescimento econômico, segurança pública, defesa nacional, desenvolvimento energético e um papel maior para estados e empresas privadas. As posições podem mudar com o tempo.', leaders: 'Figuras históricas associadas ao partido incluem Abraham Lincoln, Theodore Roosevelt, Dwight D. Eisenhower, Ronald Reagan e George H. W. Bush.', currentLeadership: 'Atual presidente do RNC: Joe Gruters. Atual copresidente do RNC: KC Crosbie.', regionalPresence: 'Organizado nacionalmente por meio de partidos republicanos estaduais e comitês locais.', identificationNote: 'A identificação partidária varia conforme a pesquisa, o estado e o momento. O PoliBase não atribui uma porcentagem.' },
        green: { name: 'Green Party', founded: 'A organização Green nos Estados Unidos cresceu a partir de grupos estaduais e locais iniciados na década de 1980. O Green Party of the United States se formou como partido nacional em 2001.', representation: 'Os valores declarados do partido geralmente enfatizam sustentabilidade ecológica, justiça social, democracia de base, não violência e decisões baseadas na comunidade.', leaders: 'Figuras nacionalmente conhecidas associadas ao movimento Green dos EUA incluem Ralph Nader, Jill Stein e Howie Hawkins.', currentLeadership: 'A liderança do Green Party of the United States é organizada por um Comitê Diretor, que inclui copresidentes como Ann Link, Arshia Papari, Craig Cayetano e Kalia J. Fitzgerald.', regionalPresence: 'Organizado por partidos estaduais; o acesso à cédula e a força variam conforme o estado.', identificationNote: 'As estimativas de identificação partidária variam conforme a pesquisa e o estado, especialmente para partidos menores. O PoliBase não atribui uma porcentagem.' },
        libertarian: { name: 'Libertarian Party', founded: 'O Libertarian Party foi fundado em 11 de dezembro de 1971, após reuniões organizadas por David Nolan e outros ativistas libertários.', representation: 'Os princípios declarados do partido geralmente enfatizam liberdade individual, responsabilidade pessoal, mercados livres, liberdades civis e um papel menor para o governo.', leaders: 'Figuras proeminentes associadas ao partido incluem David Nolan, John Hospers, Tonie Nathan, Ron Paul e Gary Johnson.', currentLeadership: 'Atual presidente do Libertarian National Committee: Evan McMahon.', regionalPresence: 'Organizado por afiliados estaduais; o acesso à cédula varia conforme o estado.', identificationNote: 'As estimativas de identificação partidária variam conforme a pesquisa e o estado, especialmente para partidos menores. O PoliBase não atribui uma porcentagem.' },
        other: { name: 'Independent / Other', founded: 'Candidatos independentes não fazem parte de um único partido nacional. Outros partidos na história dos EUA surgiram em torno de movimentos, regiões ou ideias políticas específicas.', representation: 'Esta perspectiva significa que suas respostas não se alinharam de perto com uma perspectiva partidária deste quiz, ou que você prefere decidir questão por questão. Eleitores independentes e partidos menores podem ter opiniões muito diferentes.', leaders: 'Não existe uma lista única de líderes para eleitores independentes ou todos os outros partidos. Exemplos da história dos EUA incluem George Washington como presidente sem filiação partidária e Ross Perot como candidato presidencial independente.', currentLeadership: 'Não existe uma estrutura nacional única de liderança para todos os eleitores independentes ou outros partidos.', regionalPresence: 'Varia conforme o candidato, o tema, o estado e o ano eleitoral.', identificationNote: 'A identificação de independentes e outros partidos varia muito conforme a pesquisa e o estado. O PoliBase não atribui uma porcentagem.' },
        constitution: { name: 'Constitution Party', founded: 'O Constitution Party foi organizado em 1992 como U.S. Taxpayers Party e adotou o nome Constitution Party em 1999.', representation: 'Seus princípios declarados enfatizam limites constitucionais ao poder federal, soberania nacional, valores sociais tradicionais e proteção da vida, liberdade e propriedade.', leaders: 'Howard Phillips é associado à fundação do partido; seu atual presidente nacional é Justin L. Magill.', currentLeadership: 'Atual presidente nacional: Justin L. Magill.', regionalPresence: 'O acesso à cédula e a presença organizada nos estados variam conforme o estado.', identificationNote: 'As estimativas confiáveis variam conforme a pesquisa e o estado. O PoliBase não atribui uma porcentagem.' },
        reform: { name: 'Reform Party', founded: 'O Reform Party foi fundado por cidadãos no início da década de 1990 e cresceu a partir de campanhas presidenciais associadas a Ross Perot.', representation: 'Suas prioridades geralmente enfatizam reforma ética, responsabilidade, transparência governamental, soluções centristas e políticas econômicas voltadas a trabalhadores e à classe média.', leaders: 'Ross Perot é a figura mais conhecida associada ao partido; a liderança pode variar conforme a organização nacional e estadual.', currentLeadership: 'A liderança deve ser conferida no site do Reform Party National Committee, pois as estruturas partidárias podem mudar.', regionalPresence: 'A atividade e o acesso à cédula variam bastante conforme o estado.', identificationNote: 'As estimativas confiáveis variam conforme a pesquisa e o estado. O PoliBase não atribui uma porcentagem.' },
        workingFamilies: { name: 'Working Families Party', founded: 'O Working Families Party começou como um partido do estado de Nova York em 1998 e depois desenvolveu uma estrutura nacional de coordenação.', representation: 'Suas prioridades geralmente enfatizam poder dos trabalhadores, sindicatos, igualdade econômica, serviços acessíveis, justiça racial e organização comunitária.', leaders: 'Figuras associadas ao partido incluem Zephyr Teachout, Jamaal Bowman e líderes estaduais e locais do Working Families.', currentLeadership: 'O partido é organizado por um comitê nacional e capítulos estaduais; a liderança é compartilhada por sua rede.', regionalPresence: 'É especialmente organizado em estados com linhas eleitorais do Working Families, incluindo Nova York e vários estados do Nordeste e do Noroeste do Pacífico; as regras eleitorais variam.', identificationNote: 'A identificação partidária é acompanhada de forma diferente para partidos estaduais e organizações nacionais. O PoliBase não atribui uma porcentagem.' },
        solidarity: { name: 'American Solidarity Party', founded: 'O movimento começou em 2011, adotou o nome American Solidarity Party em 2012 e foi incorporado em 2016.', representation: 'Sua plataforma declarada reúne ideias da democracia-cristã e enfatiza dignidade humana, apoio à família e à comunidade, justiça social, paz e uma abordagem voltada ao bem comum.', leaders: 'Figuras associadas ao partido incluem Brian Carroll e Peter Sonski; a liderança atual inclui Patrick Harris como presidente.', currentLeadership: 'A liderança nacional atual listada pelo partido inclui Patrick Harris, Jack Ternan e Lucy Moye.', regionalPresence: 'Possui uma organização nacional, enquanto candidatos e acesso à cédula variam conforme o estado.', identificationNote: 'As estimativas confiáveis variam conforme a pesquisa e o estado. O PoliBase não atribui uma porcentagem.' },
        alliance: { name: 'Alliance Party', founded: 'O Alliance Party dos EUA se formou por meio da união de vários partidos independentes e foi registrado na FEC em 2019.', representation: 'Seus valores declarados enfatizam oportunidade, igualdade, integridade, transparência, responsabilidade e cooperação prática.', leaders: 'Seu perfil público é construído em torno de candidatos independentes e moderados; figuras proeminentes podem variar conforme o estado e a eleição.', currentLeadership: 'A liderança pode variar entre o partido e suas organizações estaduais; confira os detalhes atuais com o partido nacional.', regionalPresence: 'A presença organizada e o acesso à cédula variam conforme o estado.', identificationNote: 'As estimativas confiáveis variam conforme a pesquisa e o estado. O PoliBase não atribui uma porcentagem.' }
      },
      questions: [
        { question: 'Qual eleição costuma estar mais ligada a serviços da cidade, como parques, ruas e escolas locais?', options: [{ text: 'Eleição local', category: 'local' }, { text: 'Eleição presidencial', category: 'national' }, { text: 'Eleição internacional', category: 'national' }] },
        { question: 'Se você se importa mais com mensalidade, empréstimos estudantis e políticas do campus, por onde pode começar a aprender?', options: [{ text: 'Educação e políticas para estudantes', category: 'students' }, { text: 'Somente política externa', category: 'national' }, { text: 'Somente anúncios de campanha', category: 'local' }] },
        { question: 'O que uma eleição primária ajuda a decidir?', options: [{ text: 'Quais candidatos avançam por um partido ou disputa', category: 'national' }, { text: 'O vencedor automático de todos os cargos', category: 'local' }, { text: 'Quais leis os tribunais devem seguir', category: 'students' }] },
        { question: 'Qual nível de governo costuma decidir zoneamento e licenças de moradia?', options: [{ text: 'Governo local', category: 'local' }, { text: 'As Nações Unidas', category: 'national' }, { text: 'Somente o presidente', category: 'national' }] },
        { question: 'Qual é um bom primeiro passo antes de votar?', options: [{ text: 'Verificar seu registro eleitoral e o site oficial da eleição', category: 'local' }, { text: 'Ler apenas uma publicação em rede social', category: 'students' }, { text: 'Ignorar disputas além da principal', category: 'national' }] }
      ]
    }
  },

  es: {
    nav: {
      tagline: 'Educación cívica simplificada',
      menu: 'Menú',
      homeAria: 'Ir al inicio de PoliBase',
      languageLabel: 'Elegir idioma',
      home: 'Inicio',
      map: 'Mapa',
      basics: 'Conceptos básicos',
      parties: 'Partidos',
      whyItMatters: 'Por Que Importa',
      news: 'Noticias',
      quiz: 'Quiz'
    },
    home: {
      badge: 'Educación cívica no partidista',
      title: 'PoliBase',
      subtitle: 'Tu guía sencilla para entender las elecciones de EE. UU., los partidos políticos, los políticos y cómo el gobierno estadounidense afecta tu vida.',
      focus: 'Enfocado en la política de Estados Unidos',
      exploreMap: 'Explorar el Mapa',
      learnBasics: 'Aprender lo Básico',
      whoTitle: 'Para quién es PoliBase',
      whoText: 'PoliBase fue creado para personas que quieren un punto de partida claro. Sin propaganda partidista, sin lenguaje complicado y sin asumir que ya sabes cómo funcionan las elecciones.',
      audiences: [
        'Jóvenes votantes',
        'Personas votando por primera vez',
        'Estudiantes',
        'Inmigrantes',
        'Cualquier persona confundida por la política'
      ],
      disclaimer: 'PoliBase es un proyecto de educación cívica no partidista. Algunas funciones actualmente usan datos de ejemplo para fines de demostración.',
      officialInfo: 'Siempre verifica la información electoral con las oficinas electorales oficiales de cada estado.'
    },
    footer: {
      sampleData: 'PoliBase es un proyecto neutral de educación cívica que usa datos de ejemplo.',
      officialInfo: 'Siempre consulta las oficinas electorales oficiales para obtener información actual sobre votación.'
    },
    news: {
      badge: 'Noticias cívicas',
      title: 'Noticias políticas recientes de EE. UU.',
      intro: 'Sigue reportajes recientes sobre decisiones judiciales, inmigración, educación, salud, vivienda, elecciones y otros temas que afectan la vida pública.',
      disclaimer: 'PoliBase enlaza reportajes de organizaciones periodísticas reconocidas y fuentes de información pública. Lee el artículo original para obtener el contexto completo. Los enlaces se obtienen de un índice público gratuito y pueden cambiar durante el día.',
      loading: 'Cargando noticias recientes...',
      latest: 'Más recientes',
      exploreTopics: 'Explorar por tema',
      liveFeed: 'Noticias en vivo',
      refreshNote: 'Se actualiza automáticamente',
      stories: 'noticias recientes',
      unavailableTitle: 'Las noticias no están disponibles temporalmente',
      unavailableText: 'PoliBase no pudo cargar las noticias en este momento. Inténtalo de nuevo en unos instantes.',
      noStories: 'No encontramos noticias recientes sobre este tema. Prueba otro tema o vuelve pronto.',
      tryAgain: 'Intentar de nuevo',
      readMore: 'Leer el reportaje original',
      fallbackTitle: 'Abrir páginas de noticias confiables',
      fallbackText: 'El feed en vivo no está disponible temporalmente. Estas páginas son buenos lugares para consultar la cobertura más reciente.'
    },
    map: {
      badge: 'Mapa interactivo de EE. UU.',
      title: 'Explora tendencias recientes de votación por estado',
      intro: 'Haz clic en un estado para ver un resumen con datos educativos simplificados sobre elecciones, cargos y tendencias recientes de votación.',
      disclaimer: 'Las tendencias políticas estatales pueden cambiar con el tiempo. Estos colores son etiquetas educativas simplificadas basadas en patrones electorales recientes, no identidades permanentes.',
      hoverHint: 'Pasa el cursor o toca un estado',
      mapAria: 'Mapa clicable de Estados Unidos',
      legendDemocratic: 'Azul: tendencia Democratic',
      legendRepublican: 'Rojo: tendencia Republican',
      legendCompetitive: 'Morado: competitivo / en disputa',
      emptyState: 'Selecciona un estado para ver detalles electorales de ejemplo.',
      snapshot: 'Resumen del estado',
      recentVotingTrend: 'Tendencia reciente de votación',
      electoralVotes: 'Votos electorales',
      electoralVotesTooltip: 'Los votos electorales son la cantidad de votos que un estado tiene en el Electoral College. Ayudan a determinar quién gana la presidencia de EE. UU. Los estados con más personas normalmente tienen más votos electorales.',
      lastMajorElection: 'Última elección importante',
      nextMajorElection: 'Próxima elección importante',
      registrationDeadline: 'Fecha límite de registro',
      officialElectionSite: 'Sitio electoral oficial',
      keyOffices: 'Cargos principales elegidos',
      whyStateMatters: 'Por qué este estado importa políticamente',
      leanings: {
        democratic: 'Tendencia Democratic',
        republican: 'Tendencia Republican',
        competitive: 'Competitivo / en disputa'
      }
    },
    basics: {
      badge: 'Empieza aquí',
      title: 'Aprende lo Básico',
      intro: 'Estas explicaciones cortas cubren palabras y sistemas que la gente menciona todo el tiempo, sin asumir que tomaste una clase de gobierno.',
      label: 'Aprender',
      cards: [
        { title: '¿Qué es una elección primaria?', description: 'Una primaria es la forma en que los votantes ayudan a elegir qué candidato nominará un partido para una elección posterior. Las reglas varían por estado, y algunos estados permiten que más votantes participen que otros.', accent: 'blue' },
        { title: '¿Qué es una elección general?', description: 'Una elección general es la contienda final en la que los votantes eligen quién ocupará un cargo. Usualmente incluye candidatos de partidos principales, terceros partidos y a veces candidatos independientes.', accent: 'red' },
        { title: '¿Qué es el Electoral College?', description: 'El Electoral College es el sistema usado para elegir al presidente. Cada estado recibe un número de votos electorales, y los candidatos intentan ganar suficientes estados para alcanzar el total necesario.', accent: 'purple' },
        { title: '¿Qué hace el Congress?', description: 'El Congress redacta leyes federales, aprueba gastos, confirma a algunos funcionarios y limita el poder del presidente. Tiene dos partes: la House of Representatives y el Senate.', accent: 'blue' },
        { title: 'Gobierno federal, estatal y local', description: 'El gobierno federal maneja temas nacionales, el gobierno estatal administra reglas y servicios estatales, y el gobierno local toma decisiones cercanas a la vida diaria, como escuelas, carreteras y zonificación.', accent: 'slate' },
        { title: 'Por qué votar importa', description: 'Votar es una forma en que las personas influyen en decisiones sobre impuestos, escuelas, salud, tribunales, carreteras, vivienda y derechos civiles. Las elecciones locales pueden afectar la vida diaria de manera muy directa.', accent: 'purple' }
      ]
    },
    parties: {
      badge: 'Comparación neutral',
      title: 'Partidos y Políticos',
      intro: 'Los partidos políticos son grupos que se organizan alrededor de candidatos, ideas y prioridades. Las personas dentro del mismo partido aún pueden estar en desacuerdo entre sí.',
      figuresTitle: 'Figuras políticas importantes',
      note: 'Los partidos cambian con el tiempo, y los candidatos no siempre coinciden con cada posición de un partido. La mejor forma de entender a un candidato es revisar su plataforma oficial, historial de votación, declaraciones públicas y resúmenes confiables no partidistas.',
      groups: [
        { name: 'Democrats', color: 'bg-blue-50 border-blue-100', summary: 'El Democratic Party es uno de los dos principales partidos políticos de EE. UU. Sus candidatos suelen enfocarse en temas como acceso a la salud, política climática, derechos laborales, derechos civiles y programas públicos.', figures: ['Marcador de posición: figura nacional Democratic', 'Marcador de posición: figura estatal Democratic'] },
        { name: 'Republicans', color: 'bg-rose-50 border-rose-100', summary: 'El Republican Party es uno de los dos principales partidos políticos de EE. UU. Sus candidatos suelen enfocarse en temas como impuestos, regulación empresarial, seguridad pública, aplicación de leyes migratorias, política energética y gobierno limitado.', figures: ['Marcador de posición: figura nacional Republican', 'Marcador de posición: figura estatal Republican'] },
        { name: 'Independents / third parties', color: 'bg-violet-50 border-violet-100', summary: 'Los candidatos independientes y terceros partidos no forman parte de los dos partidos principales. Pueden enfocarse en una amplia variedad de ideas, y su papel puede variar mucho por estado, cargo y año electoral.', figures: ['Marcador de posición: figura independiente', 'Marcador de posición: figura de tercer partido'] }
      ]
    },
    whyItMattersPage: {
      badge: 'Vida diaria',
      title: 'Por Qué Te Importa',
      intro: 'La política puede sentirse distante, pero muchas decisiones aparecen en costos diarios, derechos, servicios, empleos y oportunidades.',
      topics: [
        { title: 'Matrícula universitaria', text: 'Los funcionarios electos pueden influir en el financiamiento de universidades públicas, ayuda financiera, reglas de préstamos estudiantiles y programas de capacitación laboral.' },
        { title: 'Inmigración', text: 'La ley federal moldea visas, ciudadanía, asilo y política fronteriza, mientras que decisiones estatales y locales pueden afectar servicios y prioridades de aplicación.' },
        { title: 'Salud', text: 'Las decisiones del gobierno pueden afectar reglas de seguro, programas de salud pública, costos de medicamentos, clínicas y financiamiento de atención de emergencia.' },
        { title: 'Empleos y salario mínimo', text: 'Los gobiernos federal, estatales y locales pueden establecer normas laborales, protecciones en el trabajo, reglas fiscales y niveles de salario mínimo.' },
        { title: 'Vivienda', text: 'La zonificación local, política estatal de vivienda, reglas de alquiler, permisos, transporte e inversión pública pueden afectar la oferta y el costo de la vivienda.' },
        { title: 'Clima y transporte', text: 'Las decisiones públicas moldean carreteras, transporte público, proyectos de energía limpia, planificación ante desastres, calidad del aire y cómo las comunidades se preparan para clima extremo.' }
      ]
    },
    quiz: {
      badge: 'Quiz rápido',
      title: 'Encuentra un Punto de Partida',
      intro: 'Elige un quiz: pon a prueba tus conocimientos cívicos básicos o explora perspectivas partidistas amplias con preguntas simples sobre temas políticos.',
      resultLabel: 'Tu resultado',
      retake: 'Probar 5 Preguntas Nuevas',
      progress: 'Preguntas completadas: {count}/{total}',
      incomplete: 'Responde las {count} preguntas para ver tu resultado. Completadas en esta ronda: {completed}.',
      completionNotice: 'PoliBase está trabajando actualmente en la actualización del quiz y traerá nuevas preguntas pronto.',
      results: {
        local: 'Quizás quieras aprender más sobre elecciones locales.',
        national: 'Quizás quieras comenzar con la política nacional.',
        students: 'Puede que te interesen temas de políticas públicas que afectan a estudiantes.'
      },
      modesTitle: 'Elige un quiz',
      knowledgeMode: 'Pon a prueba tus conocimientos cívicos',
      knowledgeModeText: 'Responde cinco preguntas del banco de 100 preguntas. Cada respuesta muestra si es correcta.',
      partyMode: 'Explora perspectivas partidistas',
      partyModeText: 'Responde 20 preguntas sobre temas para explorar las perspectivas partidistas amplias representadas en tus respuestas.',
      startKnowledge: 'Comenzar quiz de conocimientos',
      startParty: 'Comenzar quiz partidista',
      backToQuizChoices: 'Volver a las opciones del quiz',
      correct: 'Correcto',
      incorrect: 'No exactamente',
      correctAnswer: 'Respuesta correcta',
      knowledgeScore: 'Resultado del quiz de conocimientos',
      knowledgeResult: 'Respondiste correctamente {correct} de {total} preguntas.',
      partyIntro: 'Esta es una actividad de autorreflexión, no una predicción de afiliación partidista. Los partidos incluyen muchos puntos de vista, y las personas pueden coincidir con partidos diferentes en temas diferentes.',
      partyResultLabel: 'Resultado de tus perspectivas partidistas',
      partyPerspectivesTitle: 'Perspectivas partidistas en tus respuestas',
      partyResultIntro: 'Estas son las perspectivas partidistas amplias representadas en tus respuestas. Esta actividad no te asigna un partido ni te dice cómo votar.',
      partyProgress: 'Preguntas respondidas: {answered}/{total}',
      showPartyResult: 'Mostrar mi resultado de perspectiva',
      partyFounded: 'Cómo se creó',
      partyRepresents: 'Lo que comúnmente representa',
      partyLeaders: 'Líderes famosos o reconocidos a nivel nacional',
      partyCurrentLeadership: 'Liderazgo nacional actual',
      partyRegionalPresence: 'Dónde está organizada o es especialmente visible',
      partyIdentification: 'Nota sobre identificación partidista',
      partyResources: 'Recursos para aprender más',
      partyWhyTitle: 'Por qué apareció esta perspectiva',
      partyWhyIntro: 'Algunas de tus respuestas usaron ideas que suelen relacionarse con el {party}. Por ejemplo:',
      partyRetake: 'Repetir quiz partidista',
      partyProfiles: {
        democratic: { name: 'Democratic Party', founded: 'El Democratic Party moderno se desarrolló a partir de la coalición que apoyó a Andrew Jackson y se convirtió en un partido nacional en las décadas de 1820 y 1830.', representation: 'Las prioridades declaradas del partido suelen incluir ampliar el acceso a la salud y la educación, proteger los derechos civiles, apoyar a los trabajadores, invertir en programas públicos y abordar el cambio climático. Las posiciones pueden cambiar con el tiempo.', leaders: 'Figuras históricas asociadas con el partido incluyen Andrew Jackson, Franklin D. Roosevelt, Eleanor Roosevelt, Lyndon B. Johnson y Barack Obama.', currentLeadership: 'Presidente actual del DNC: Ken Martin. El liderazgo también incluye vicepresidentes y funcionarios del comité.', regionalPresence: 'Organizado a nivel nacional, con partidos estatales en los 50 estados y territorios de EE. UU.', identificationNote: 'La identificación partidista varía según la encuesta, el estado y el momento. PoliBase no asigna un porcentaje.' },
        republican: { name: 'Republican Party', founded: 'El Republican Party fue organizado en la década de 1850 por grupos que se oponían a la expansión de la esclavitud y se convirtió en un partido nacional en 1854.', representation: 'Las prioridades declaradas del partido suelen incluir impuestos más bajos, crecimiento económico, seguridad pública, defensa nacional, desarrollo energético y un papel más fuerte para los estados y las empresas privadas. Las posiciones pueden cambiar con el tiempo.', leaders: 'Figuras históricas asociadas con el partido incluyen Abraham Lincoln, Theodore Roosevelt, Dwight D. Eisenhower, Ronald Reagan y George H. W. Bush.', currentLeadership: 'Presidente actual del RNC: Joe Gruters. Copresidenta actual del RNC: KC Crosbie.', regionalPresence: 'Organizado a nivel nacional mediante partidos republicanos estatales y comités locales.', identificationNote: 'La identificación partidista varía según la encuesta, el estado y el momento. PoliBase no asigna un porcentaje.' },
        green: { name: 'Green Party', founded: 'La organización Green en Estados Unidos creció a partir de grupos estatales y locales que comenzaron en la década de 1980. El Green Party of the United States se formó como partido nacional en 2001.', representation: 'Los valores declarados del partido suelen enfatizar la sostenibilidad ecológica, la justicia social, la democracia de base, la no violencia y las decisiones comunitarias.', leaders: 'Entre las figuras reconocidas a nivel nacional asociadas con el movimiento Green de EE. UU. están Ralph Nader, Jill Stein y Howie Hawkins.', currentLeadership: 'El liderazgo del Green Party of the United States se organiza mediante un Comité Directivo, que incluye copresidentes como Ann Link, Arshia Papari, Craig Cayetano y Kalia J. Fitzgerald.', regionalPresence: 'Organizado mediante partidos estatales; el acceso a la boleta y la fuerza varían según el estado.', identificationNote: 'Las estimaciones de identificación partidista varían según la encuesta y el estado, especialmente para partidos pequeños. PoliBase no asigna un porcentaje.' },
        libertarian: { name: 'Libertarian Party', founded: 'El Libertarian Party fue fundado el 11 de diciembre de 1971, después de reuniones organizadas por David Nolan y otros activistas libertarios.', representation: 'Los principios declarados del partido suelen enfatizar la libertad individual, la responsabilidad personal, los mercados libres, las libertades civiles y un papel menor del gobierno.', leaders: 'Entre las figuras prominentes asociadas con el partido están David Nolan, John Hospers, Tonie Nathan, Ron Paul y Gary Johnson.', currentLeadership: 'Presidente actual del Libertarian National Committee: Evan McMahon.', regionalPresence: 'Organizado mediante afiliados estatales; el acceso a la boleta varía según el estado.', identificationNote: 'Las estimaciones de identificación partidista varían según la encuesta y el estado, especialmente para partidos pequeños. PoliBase no asigna un porcentaje.' },
        other: { name: 'Independent / Other', founded: 'Los candidatos independientes no forman parte de un solo partido nacional. Otros partidos en la historia de EE. UU. se han formado alrededor de movimientos, regiones o ideas políticas específicas.', representation: 'Esta perspectiva significa que tus respuestas no coincidieron estrechamente con una perspectiva partidista de este quiz, o que prefieres decidir tema por tema. Los votantes independientes y los partidos pequeños pueden tener opiniones muy diferentes.', leaders: 'No existe una lista única de líderes para los votantes independientes o todos los demás partidos. Ejemplos de la historia de EE. UU. incluyen a George Washington como presidente sin afiliación partidista y Ross Perot como candidato presidencial independiente.', currentLeadership: 'No existe una estructura nacional única de liderazgo para todos los votantes independientes u otros partidos.', regionalPresence: 'Varía según el candidato, el tema, el estado y el año electoral.', identificationNote: 'La identificación de independientes y otros partidos varía mucho según la encuesta y el estado. PoliBase no asigna un porcentaje.' },
        constitution: { name: 'Constitution Party', founded: 'El Constitution Party se organizó en 1992 como U.S. Taxpayers Party y adoptó el nombre Constitution Party en 1999.', representation: 'Sus principios declarados enfatizan los límites constitucionales al poder federal, la soberanía nacional, los valores sociales tradicionales y la protección de la vida, la libertad y la propiedad.', leaders: 'Howard Phillips está asociado con la fundación del partido; su actual presidente nacional es Justin L. Magill.', currentLeadership: 'Presidente nacional actual: Justin L. Magill.', regionalPresence: 'El acceso a la boleta y la presencia organizada en los estados varían según el estado.', identificationNote: 'Las estimaciones confiables varían según la encuesta y el estado. PoliBase no asigna un porcentaje.' },
        reform: { name: 'Reform Party', founded: 'El Reform Party fue fundado por ciudadanos a principios de la década de 1990 y creció a partir de campañas presidenciales asociadas con Ross Perot.', representation: 'Sus prioridades suelen enfatizar la reforma ética, la responsabilidad, la transparencia gubernamental, soluciones centristas y políticas económicas dirigidas a trabajadores y a la clase media.', leaders: 'Ross Perot es la figura más conocida asociada con el partido; el liderazgo puede variar según la organización nacional y estatal.', currentLeadership: 'El liderazgo debe verificarse en el sitio del Reform Party National Committee porque las estructuras partidistas pueden cambiar.', regionalPresence: 'La actividad y el acceso a la boleta varían considerablemente según el estado.', identificationNote: 'Las estimaciones confiables varían según la encuesta y el estado. PoliBase no asigna un porcentaje.' },
        workingFamilies: { name: 'Working Families Party', founded: 'El Working Families Party comenzó como un partido del estado de Nueva York en 1998 y después desarrolló una estructura nacional de coordinación.', representation: 'Sus prioridades suelen enfatizar el poder de los trabajadores, los sindicatos, la igualdad económica, los servicios accesibles, la justicia racial y la organización comunitaria.', leaders: 'Entre las figuras asociadas con el partido están Zephyr Teachout, Jamaal Bowman y líderes estatales y locales del Working Families.', currentLeadership: 'El partido se organiza mediante un comité nacional y capítulos estatales; el liderazgo se comparte en su red.', regionalPresence: 'Está especialmente organizado en estados con líneas electorales del Working Families, incluidos Nueva York y varios estados del Noreste y del Noroeste del Pacífico; las reglas electorales varían.', identificationNote: 'La identificación partidista se registra de manera diferente para partidos estatales y organizaciones nacionales. PoliBase no asigna un porcentaje.' },
        solidarity: { name: 'American Solidarity Party', founded: 'El movimiento comenzó en 2011, adoptó el nombre American Solidarity Party en 2012 y se incorporó en 2016.', representation: 'Su plataforma declarada reúne ideas de la democracia cristiana y enfatiza la dignidad humana, el apoyo a la familia y la comunidad, la justicia social, la paz y un enfoque centrado en el bien común.', leaders: 'Entre las figuras asociadas con el partido están Brian Carroll y Peter Sonski; el liderazgo actual incluye a Patrick Harris como presidente.', currentLeadership: 'El liderazgo nacional actual listado por el partido incluye a Patrick Harris, Jack Ternan y Lucy Moye.', regionalPresence: 'Tiene una organización nacional, mientras que los candidatos y el acceso a la boleta varían según el estado.', identificationNote: 'Las estimaciones confiables varían según la encuesta y el estado. PoliBase no asigna un porcentaje.' },
        alliance: { name: 'Alliance Party', founded: 'El Alliance Party de EE. UU. se formó mediante la unión de varios partidos independientes y se registró ante la FEC en 2019.', representation: 'Sus valores declarados enfatizan la oportunidad, la igualdad, la integridad, la transparencia, la responsabilidad y la cooperación práctica.', leaders: 'Su perfil público se basa en candidatos independientes y moderados; las figuras prominentes pueden variar según el estado y la elección.', currentLeadership: 'El liderazgo puede variar entre el partido y sus organizaciones estatales; verifica los detalles actuales con el partido nacional.', regionalPresence: 'La presencia organizada y el acceso a la boleta varían según el estado.', identificationNote: 'Las estimaciones confiables varían según la encuesta y el estado. PoliBase no asigna un porcentaje.' }
      },
      questions: [
        { question: '¿Qué elección suele estar más conectada con servicios de la ciudad como parques, calles y escuelas locales?', options: [{ text: 'Elección local', category: 'local' }, { text: 'Elección presidencial', category: 'national' }, { text: 'Elección internacional', category: 'national' }] },
        { question: 'Si te importa más la matrícula, los préstamos estudiantiles y las políticas del campus, ¿por dónde podrías empezar a aprender?', options: [{ text: 'Educación y políticas estudiantiles', category: 'students' }, { text: 'Solo política exterior', category: 'national' }, { text: 'Solo anuncios de campaña', category: 'local' }] },
        { question: '¿Qué ayuda a decidir una elección primaria?', options: [{ text: 'Qué candidatos avanzan por un partido o contienda', category: 'national' }, { text: 'El ganador automático de todos los cargos', category: 'local' }, { text: 'Qué leyes deben seguir los tribunales', category: 'students' }] },
        { question: '¿Qué nivel de gobierno suele decidir la zonificación y los permisos de vivienda?', options: [{ text: 'Gobierno local', category: 'local' }, { text: 'Las Naciones Unidas', category: 'national' }, { text: 'Solo el presidente', category: 'national' }] },
        { question: '¿Cuál es un buen primer paso antes de votar?', options: [{ text: 'Revisar tu registro y el sitio electoral oficial', category: 'local' }, { text: 'Leer solo una publicación en redes sociales', category: 'students' }, { text: 'Ignorar las contiendas menos visibles', category: 'national' }] }
      ]
    }
  }
}
