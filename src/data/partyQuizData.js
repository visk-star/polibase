// This quiz is a self-reflection tool, not a prediction of party membership.
// Each answer maps internally to a broad party perspective. The UI does not
// show numeric scores, rank parties, or tell anyone how to vote.
const basePartyQuizQuestions = [
  {
    id: 1,
    question: 'Which approach to the economy sounds closest to you?',
    options: [
      { text: 'More public investment and programs to reduce inequality', party: 'democratic' },
      { text: 'Lower taxes, fewer regulations, and a strong private sector', party: 'republican' },
      { text: 'An economy centered on ecological sustainability and worker/community power', party: 'green' },
      { text: 'Free markets with a much smaller government role', party: 'libertarian' },
      { text: 'Strict constitutional limits on federal spending and taxation', party: 'constitution' }
    ]
  },
  {
    id: 2,
    question: 'What is your preferred approach to healthcare?',
    options: [
      { text: 'Expand public coverage and protect access to care', party: 'democratic' },
      { text: 'Encourage private choices while protecting important services', party: 'republican' },
      { text: 'Treat healthcare as a universal right with strong public programs', party: 'green' },
      { text: 'Give individuals more control and reduce government mandates', party: 'libertarian' },
      { text: 'Protect conscience rights and keep most decisions closer to families, states, and communities', party: 'constitution' }
    ]
  },
  {
    id: 3,
    question: 'Which climate approach is closest to your view?',
    options: [
      { text: 'Federal action, clean energy investment, and environmental standards', party: 'democratic' },
      { text: 'Innovation, energy development, and practical environmental rules', party: 'republican' },
      { text: 'Fast climate action, renewable energy, and ecological justice', party: 'green' },
      { text: 'Market competition and voluntary innovation over mandates', party: 'libertarian' },
      { text: 'Protect property rights and local control while caring for natural resources', party: 'constitution' }
    ]
  },
  {
    id: 4,
    question: 'Which immigration approach is closest to your view?',
    options: [
      { text: 'A legal pathway, humanitarian protections, and family unity', party: 'democratic' },
      { text: 'Stronger border enforcement and clearer legal processes', party: 'republican' },
      { text: 'Migrant rights, humanitarian protections, and fewer detention practices', party: 'green' },
      { text: 'More freedom to move and work with less government restriction', party: 'libertarian' },
      { text: 'Strong national sovereignty, border enforcement, and limits on federal overreach', party: 'constitution' }
    ]
  },
  {
    id: 5,
    question: 'Which criminal justice approach is closest to your view?',
    options: [
      { text: 'Accountability plus reforms that reduce unequal treatment', party: 'democratic' },
      { text: 'Public safety, enforcement, and support for law enforcement', party: 'republican' },
      { text: 'Restorative justice, prevention, and reducing incarceration', party: 'green' },
      { text: 'Limit government power and protect individual rights', party: 'libertarian' },
      { text: 'Strict constitutional protections, due process, and local accountability', party: 'constitution' }
    ]
  },
  {
    id: 6,
    question: 'What education approach sounds closest to you?',
    options: [
      { text: 'More public investment in schools, teachers, and student aid', party: 'democratic' },
      { text: 'More parent choice, local control, and school flexibility', party: 'republican' },
      { text: 'Free or affordable education and stronger community schools', party: 'green' },
      { text: 'More school choice and less government control', party: 'libertarian' },
      { text: 'More family control, local authority, and protection of religious freedom in education', party: 'constitution' }
    ]
  },
  {
    id: 7,
    question: 'Which tax approach is closest to your view?',
    options: [
      { text: 'Higher contributions from wealthy people to fund public services', party: 'democratic' },
      { text: 'Lower taxes and policies designed to encourage growth', party: 'republican' },
      { text: 'Progressive taxes that fund social and environmental programs', party: 'green' },
      { text: 'Much lower taxes and a smaller government', party: 'libertarian' },
      { text: 'Lower federal taxes and constitutional limits on federal spending', party: 'constitution' }
    ]
  },
  {
    id: 8,
    question: 'Which labor policy sounds closest to you?',
    options: [
      { text: 'Support unions, workplace protections, and wage standards', party: 'democratic' },
      { text: 'Keep labor markets flexible and reduce barriers for employers', party: 'republican' },
      { text: 'Strengthen worker power, cooperatives, and workplace democracy', party: 'green' },
      { text: 'Let workers and employers negotiate with minimal government rules', party: 'libertarian' },
      { text: 'Local decision-making and fewer federal labor mandates', party: 'constitution' }
    ]
  },
  {
    id: 9,
    question: 'Which election reform sounds most useful?',
    options: [
      { text: 'Make voting access easier and protect participation', party: 'democratic' },
      { text: 'Use clear identification and election-security procedures', party: 'republican' },
      { text: 'Use ranked-choice voting, proportional representation, and public financing', party: 'green' },
      { text: 'Reduce government barriers to ballot access and political participation', party: 'libertarian' },
      { text: 'Election rules run mainly by states with strong constitutional safeguards', party: 'constitution' }
    ]
  },
  {
    id: 10,
    question: 'Which approach to firearm policy is closest to your view?',
    options: [
      { text: 'Stronger background checks and safety rules', party: 'democratic' },
      { text: 'Protect firearm rights while enforcing existing laws', party: 'republican' },
      { text: 'Community violence prevention and fewer weapons in public life', party: 'green' },
      { text: 'Protect the right to own firearms and limit government restrictions', party: 'libertarian' },
      { text: 'Strong Second Amendment protections with limited federal restriction', party: 'constitution' }
    ]
  },
  {
    id: 11,
    question: 'Which foreign-policy approach sounds closest to you?',
    options: [
      { text: 'Use alliances, diplomacy, and international cooperation', party: 'democratic' },
      { text: 'Maintain strong national defense and deter threats', party: 'republican' },
      { text: 'Prioritize peace, nonviolence, and international justice', party: 'green' },
      { text: 'Avoid unnecessary intervention and limit overseas commitments', party: 'libertarian' },
      { text: 'National sovereignty, constitutional war powers, and caution about global institutions', party: 'constitution' }
    ]
  },
  {
    id: 12,
    question: 'Which energy approach is closest to your view?',
    options: [
      { text: 'Public investment in clean energy and a transition to lower emissions', party: 'democratic' },
      { text: 'A broad energy mix, domestic production, and energy independence', party: 'republican' },
      { text: 'A rapid renewable-energy transition with environmental justice', party: 'green' },
      { text: 'Let competition and innovation determine energy choices', party: 'libertarian' },
      { text: 'Domestic energy choices guided by property rights, state authority, and limited federal control', party: 'constitution' }
    ]
  },
  {
    id: 13,
    question: 'Which housing approach sounds closest to you?',
    options: [
      { text: 'Housing assistance and public investment for affordability', party: 'democratic' },
      { text: 'Build more housing by reducing regulations and speeding permits', party: 'republican' },
      { text: 'Expand public, cooperative, and permanently affordable housing', party: 'green' },
      { text: 'Reduce zoning restrictions and let private choices lead development', party: 'libertarian' },
      { text: 'Housing decisions led by families, property owners, and local communities', party: 'constitution' }
    ]
  },
  {
    id: 14,
    question: 'What is your preferred approach to privacy and technology?',
    options: [
      { text: 'Strong consumer protections and rules for large technology companies', party: 'democratic' },
      { text: 'Protect security while allowing technology and business innovation', party: 'republican' },
      { text: 'Digital rights, open technology, and limits on corporate surveillance', party: 'green' },
      { text: 'Strong privacy and freedom from government surveillance or control', party: 'libertarian' },
      { text: 'Protect speech, religious liberty, privacy, and constitutional limits on surveillance', party: 'constitution' }
    ]
  },
  {
    id: 15,
    question: 'Which statement about social policy is closest to your view?',
    options: [
      { text: 'Government should protect civil rights and equal access', party: 'democratic' },
      { text: 'Communities and families should have more room to shape social life', party: 'republican' },
      { text: 'Social equality and protections for marginalized communities should be central', party: 'green' },
      { text: 'Adults should be free to make personal choices without government interference', party: 'libertarian' },
      { text: 'Traditional social values, religious freedom, and constitutional protections should guide policy', party: 'constitution' }
    ]
  },
  {
    id: 16,
    question: 'How should power be divided between federal and state governments?',
    options: [
      { text: 'Use national standards when rights or access need consistency', party: 'democratic' },
      { text: 'Give states and local communities more control when possible', party: 'republican' },
      { text: 'Decentralize power and expand grassroots democracy', party: 'green' },
      { text: 'Keep government smaller and decisions closer to individuals', party: 'libertarian' },
      { text: 'The federal government should stay within strictly defined constitutional powers', party: 'constitution' }
    ]
  },
  {
    id: 17,
    question: 'Which business policy sounds closest to you?',
    options: [
      { text: 'Set guardrails for businesses and protect consumers and workers', party: 'democratic' },
      { text: 'Reduce regulation and support entrepreneurship and investment', party: 'republican' },
      { text: 'Support cooperatives, local economies, and shared ownership', party: 'green' },
      { text: 'Use free markets and limit government interference', party: 'libertarian' },
      { text: 'Protect property rights, entrepreneurship, and constitutional limits on regulation', party: 'constitution' }
    ]
  },
  {
    id: 18,
    question: 'What kind of democracy sounds most appealing?',
    options: [
      { text: 'A broad coalition using public institutions to expand opportunity', party: 'democratic' },
      { text: 'A constitutional system emphasizing order, continuity, and responsibility', party: 'republican' },
      { text: 'Grassroots participation, direct democracy, and community decision-making', party: 'green' },
      { text: 'A system centered on individual liberty and voluntary cooperation', party: 'libertarian' },
      { text: 'A constitutional system focused on limited federal power and traditional civic duties', party: 'constitution' }
    ]
  },
  {
    id: 19,
    question: 'Which approach to public lands and natural resources is closest to you?',
    options: [
      { text: 'Balance conservation with public investment and community needs', party: 'democratic' },
      { text: 'Support responsible development, energy production, and local control', party: 'republican' },
      { text: 'Prioritize conservation, biodiversity, and long-term sustainability', party: 'green' },
      { text: 'Give owners and local communities more control with fewer federal rules', party: 'libertarian' },
      { text: 'Local and state control of land decisions with strong property rights', party: 'constitution' }
    ]
  },
  {
    id: 20,
    question: 'Which description best matches your political outlook?',
    options: [
      { text: 'I usually support a larger public role in expanding opportunity and rights', party: 'democratic' },
      { text: 'I usually support limited government, tradition, security, and private enterprise', party: 'republican' },
      { text: 'I usually prioritize ecology, social justice, peace, and grassroots democracy', party: 'green' },
      { text: 'I usually prioritize individual liberty, personal responsibility, and smaller government', party: 'libertarian' },
      { text: 'I usually prioritize constitutional limits, national sovereignty, and traditional values', party: 'constitution' }
    ]
  }
]

// Keep the activity simple for now: 20 questions with five broad answer choices.
// Additional party profiles can be added later without changing the question count.
export const partyQuizQuestions = basePartyQuizQuestions

export const partyResources = {
  democratic: [
    { label: 'Democratic Party website', url: 'https://democrats.org/' },
    { label: 'DNC leadership', url: 'https://democrats.org/leadership/' },
    { label: 'FEC party information', url: 'https://www.fec.gov/press/resources-journalists/political-parties/' }
  ],
  republican: [
    { label: 'Republican Party website', url: 'https://www.rnc.org/' },
    { label: 'Republican Party platform', url: 'https://www.presidency.ucsb.edu/documents/2024-republican-party-platform' },
    { label: 'FEC party information', url: 'https://www.fec.gov/press/resources-journalists/political-parties/' }
  ],
  green: [
    { label: 'Green Party website', url: 'https://www.gp.org/' },
    { label: 'Green Party values', url: 'https://www.gp.org/about' },
    { label: 'Green Party leadership', url: 'https://www.gp.org/steering' }
  ],
  libertarian: [
    { label: 'Libertarian Party website', url: 'https://lp.org/' },
    { label: 'Libertarian Party history', url: 'https://lp.org/our-history/' },
    { label: 'Libertarian Party leadership', url: 'https://lp.org/who-we-are/' }
  ],
  constitution: [
    { label: 'Constitution Party website', url: 'https://constitutionparty.com/' },
    { label: 'Constitution Party platform', url: 'https://constitutionparty.com/platform/' },
    { label: 'Constitution Party news', url: 'https://constitutionparty.com/press_room/' }
  ],
  other: [
    { label: 'USA.gov voting guide', url: 'https://www.usa.gov/how-to-vote' },
    { label: 'FEC party information', url: 'https://www.fec.gov/press/resources-journalists/political-parties/' }
  ]
}
