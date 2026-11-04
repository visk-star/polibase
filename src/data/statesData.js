// Simplified educational state data for PoliBase.
// Verify voter registration deadlines, election calendars, official links, and
// electoral vote counts with official state election offices, vote.gov, and
// certified election sources before presenting them as current voter guidance.
// Political leaning labels are recent voting trends, not permanent identities.
// Presidential result history belongs on a future Presidents/Elections page,
// so it is intentionally not shown or stored for the Map page.

const keyOffices = ['President', 'U.S. Senate', 'U.S. House', 'Governor', 'State Legislature', 'Local offices']

const state = (abbreviation, name, leaning, colorCategory, electoralVotes, registrationDeadline, officialElectionSite, whyItMatters) => ({
  abbreviation,
  name,
  leaning,
  colorCategory,
  electoralVotes,
  lastMajorElection: 'November 5, 2024',
  nextMajorElection: 'November 3, 2026',
  registrationDeadline,
  officialElectionSite,
  keyOffices,
  whyItMatters
})

export const statesData = {
  AL: state('AL', 'Alabama', 'Leans Republican', 'republican', 9, 'Check Alabama Secretary of State', 'https://www.sos.alabama.gov/alabama-votes', 'Alabama is a strongly watched Southern state for statewide offices, congressional districts, turnout patterns, and state policy debates.'),
  AK: state('AK', 'Alaska', 'Leans Republican', 'republican', 3, 'Check Alaska Division of Elections', 'https://www.elections.alaska.gov/', 'Alaska has unique geography, smaller population centers, ranked choice voting, and statewide races that can attract national attention.'),
  AZ: state('AZ', 'Arizona', 'Swing / Competitive', 'competitive', 11, 'Check Arizona Secretary of State', 'https://azsos.gov/elections', 'Arizona has grown quickly, and recent elections have been shaped by suburban growth, border issues, and changing voter coalitions.'),
  AR: state('AR', 'Arkansas', 'Leans Republican', 'republican', 6, 'Check Arkansas Secretary of State', 'https://www.sos.arkansas.gov/elections', 'Arkansas is important for understanding rural voting patterns, state government decisions, and regional political priorities.'),
  CA: state('CA', 'California', 'Leans Democratic', 'democratic', 54, 'Check California Secretary of State', 'https://www.sos.ca.gov/elections', 'California has the largest population of any state and the most Electoral College votes, so its voters play a major role in national elections.'),
  CO: state('CO', 'Colorado', 'Leans Democratic', 'democratic', 10, 'Check Colorado Secretary of State', 'https://www.sos.state.co.us/pubs/elections/main.html', 'Colorado has fast-growing metro areas, a large outdoor economy, and frequent ballot measures that shape state policy.'),
  CT: state('CT', 'Connecticut', 'Leans Democratic', 'democratic', 7, 'Check Connecticut Secretary of the State', 'https://portal.ct.gov/sots/election-services', 'Connecticut often reflects Northeastern policy debates around cities, suburbs, education, taxes, and public services.'),
  DE: state('DE', 'Delaware', 'Leans Democratic', 'democratic', 3, 'Check Delaware Department of Elections', 'https://elections.delaware.gov/', 'Delaware is a small state where statewide offices, local races, and coastal community issues can be especially visible.'),
  FL: state('FL', 'Florida', 'Leans Republican', 'republican', 30, 'Check Florida Division of Elections', 'https://dos.myflorida.com/elections/', 'Florida is a large state with many Electoral College votes and a mix of urban, suburban, and rural communities.'),
  GA: state('GA', 'Georgia', 'Swing / Competitive', 'competitive', 16, 'Check Georgia Secretary of State', 'https://sos.ga.gov/elections', 'Georgia has had close statewide races recently, and turnout in Atlanta, suburbs, small towns, and rural areas can all matter.'),
  HI: state('HI', 'Hawaii', 'Leans Democratic', 'democratic', 4, 'Check Hawaii Office of Elections', 'https://elections.hawaii.gov/', 'Hawaii brings island, military, tourism, cost-of-living, and Pacific policy issues into state and national elections.'),
  ID: state('ID', 'Idaho', 'Leans Republican', 'republican', 4, 'Check Idaho Secretary of State', 'https://voteidaho.gov/', 'Idaho has rapid population growth in some areas, rural communities, and state debates around land, taxes, and education.'),
  IL: state('IL', 'Illinois', 'Leans Democratic', 'democratic', 19, 'Check Illinois State Board of Elections', 'https://www.elections.il.gov/', 'Illinois has a major urban center in Chicago plus suburban, small-town, and rural regions that shape statewide politics.'),
  IN: state('IN', 'Indiana', 'Leans Republican', 'republican', 11, 'Check Indiana Secretary of State', 'https://www.in.gov/sos/elections/', 'Indiana is important for Midwestern political trends, manufacturing communities, education debates, and statewide offices.'),
  IA: state('IA', 'Iowa', 'Leans Republican', 'republican', 6, 'Check Iowa Secretary of State', 'https://sos.iowa.gov/elections/', 'Iowa is known for agricultural communities, small cities, caucus history, and closely watched state policy debates.'),
  KS: state('KS', 'Kansas', 'Leans Republican', 'republican', 6, 'Check Kansas Secretary of State', 'https://sos.ks.gov/elections/', 'Kansas is useful for understanding Plains state politics, rural priorities, suburbs around Kansas City, and ballot issue campaigns.'),
  KY: state('KY', 'Kentucky', 'Leans Republican', 'republican', 8, 'Check Kentucky State Board of Elections', 'https://elect.ky.gov/', 'Kentucky has nationally watched Senate races, Appalachian communities, urban centers, and debates over healthcare and jobs.'),
  LA: state('LA', 'Louisiana', 'Leans Republican', 'republican', 8, 'Check Louisiana Secretary of State', 'https://www.sos.la.gov/ElectionsAndVoting', 'Louisiana has distinctive election rules, Gulf Coast issues, energy policy debates, and a politically important New Orleans region.'),
  ME: state('ME', 'Maine', 'Leans Democratic', 'democratic', 4, 'Check Maine Bureau of Corporations, Elections and Commissions', 'https://www.maine.gov/sos/cec/elec/', 'Maine uses ranked choice voting for some federal elections and can split electoral votes by congressional district.'),
  MD: state('MD', 'Maryland', 'Leans Democratic', 'democratic', 10, 'Check Maryland State Board of Elections', 'https://elections.maryland.gov/', 'Maryland includes major suburbs near Washington, D.C. and Baltimore, making federal work, transportation, and education key issues.'),
  MA: state('MA', 'Massachusetts', 'Leans Democratic', 'democratic', 11, 'Check Massachusetts Elections Division', 'https://www.sec.state.ma.us/divisions/elections/elections-and-voting.htm', 'Massachusetts is influential in debates about healthcare, education, technology, higher education, and state-level public programs.'),
  MI: state('MI', 'Michigan', 'Swing / Competitive', 'competitive', 15, 'Check Michigan Department of State', 'https://www.michigan.gov/sos/elections', 'Michigan is a key Great Lakes state where labor, manufacturing, college towns, and suburbs often shape election conversations.'),
  MN: state('MN', 'Minnesota', 'Leans Democratic', 'democratic', 10, 'Check Minnesota Secretary of State', 'https://www.sos.state.mn.us/elections-voting/', 'Minnesota has high voter participation, Twin Cities suburbs, rural regions, and state policy debates that often draw attention.'),
  MS: state('MS', 'Mississippi', 'Leans Republican', 'republican', 6, 'Check Mississippi Secretary of State', 'https://www.sos.ms.gov/elections-voting', 'Mississippi is important for understanding Southern politics, civil rights history, rural issues, and state government decisions.'),
  MO: state('MO', 'Missouri', 'Leans Republican', 'republican', 10, 'Check Missouri Secretary of State', 'https://www.sos.mo.gov/elections', 'Missouri includes large metro areas, rural counties, and ballot measures that can show how voters separate candidates from issues.'),
  MT: state('MT', 'Montana', 'Leans Republican', 'republican', 4, 'Check Montana Secretary of State', 'https://sosmt.gov/elections/', 'Montana has a small population, large geography, public lands issues, and statewide races that can become nationally important.'),
  NE: state('NE', 'Nebraska', 'Leans Republican', 'republican', 5, 'Check Nebraska Secretary of State', 'https://sos.nebraska.gov/elections', 'Nebraska can split electoral votes by congressional district, making Omaha-area turnout especially notable in presidential elections.'),
  NV: state('NV', 'Nevada', 'Swing / Competitive', 'competitive', 6, 'Check Nevada Secretary of State', 'https://www.nvsos.gov/sos/elections', 'Nevada often has close races, with issues like jobs, tourism, housing, and growth playing a large role.'),
  NH: state('NH', 'New Hampshire', 'Leans Democratic', 'democratic', 4, 'Check New Hampshire Secretary of State', 'https://www.sos.nh.gov/elections', 'New Hampshire is known for high civic participation, early presidential primary attention, and closely watched local politics.'),
  NJ: state('NJ', 'New Jersey', 'Leans Democratic', 'democratic', 14, 'Check New Jersey Division of Elections', 'https://www.nj.gov/state/elections/', 'New Jersey has dense suburbs, major commuter communities, and state races that can show shifts in suburban politics.'),
  NM: state('NM', 'New Mexico', 'Leans Democratic', 'democratic', 5, 'Check New Mexico Secretary of State', 'https://www.sos.nm.gov/voting-and-elections/', 'New Mexico brings attention to border communities, Native nations, energy policy, public lands, and rural access to services.'),
  NY: state('NY', 'New York', 'Leans Democratic', 'democratic', 28, 'Check New York State Board of Elections', 'https://elections.ny.gov/', 'New York has a large population, major media markets, and congressional districts that can affect control of the U.S. House.'),
  NC: state('NC', 'North Carolina', 'Swing / Competitive', 'competitive', 16, 'Check North Carolina State Board of Elections', 'https://www.ncsbe.gov/', 'North Carolina has fast-growing metro areas, rural communities, and statewide races that are often decided by close margins.'),
  ND: state('ND', 'North Dakota', 'Leans Republican', 'republican', 3, 'Check North Dakota Secretary of State', 'https://www.sos.nd.gov/elections', 'North Dakota is shaped by energy, agriculture, rural access, and a small population spread across a large state.'),
  OH: state('OH', 'Ohio', 'Leans Republican', 'republican', 17, 'Check Ohio Secretary of State', 'https://www.ohiosos.gov/elections/', 'Ohio has large cities, suburbs, manufacturing regions, and ballot issues that remain important to national political analysis.'),
  OK: state('OK', 'Oklahoma', 'Leans Republican', 'republican', 7, 'Check Oklahoma State Election Board', 'https://oklahoma.gov/elections.html', 'Oklahoma is important for energy, tribal sovereignty, rural policy, and state-level debates about education and services.'),
  OR: state('OR', 'Oregon', 'Leans Democratic', 'democratic', 8, 'Check Oregon Secretary of State', 'https://sos.oregon.gov/voting-elections/', 'Oregon is known for vote-by-mail, Portland-area politics, rural-urban divides, and environmental policy debates.'),
  PA: state('PA', 'Pennsylvania', 'Swing / Competitive', 'competitive', 19, 'Check Pennsylvania Department of State', 'https://www.pa.gov/agencies/vote.html', 'Pennsylvania is often closely watched because small shifts across cities, suburbs, and rural counties can change statewide results.'),
  RI: state('RI', 'Rhode Island', 'Leans Democratic', 'democratic', 4, 'Check Rhode Island Department of State', 'https://vote.sos.ri.gov/', 'Rhode Island is the smallest state by area, where local government, coastal issues, and state services are especially visible.'),
  SC: state('SC', 'South Carolina', 'Leans Republican', 'republican', 9, 'Check South Carolina Election Commission', 'https://scvotes.gov/', 'South Carolina has early presidential primary attention, growing coastal regions, and important rural and suburban political patterns.'),
  SD: state('SD', 'South Dakota', 'Leans Republican', 'republican', 3, 'Check South Dakota Secretary of State', 'https://sdsos.gov/elections-voting/', 'South Dakota highlights Plains state politics, tribal communities, agriculture, public lands, and statewide ballot questions.'),
  TN: state('TN', 'Tennessee', 'Leans Republican', 'republican', 11, 'Check Tennessee Secretary of State', 'https://sos.tn.gov/elections', 'Tennessee includes rapidly growing metro areas, rural counties, and state debates over education, health, and public safety.'),
  TX: state('TX', 'Texas', 'Leans Republican', 'republican', 40, 'Check Texas Secretary of State', 'https://www.votetexas.gov/', 'Texas has a fast-growing population, many Electoral College votes, and closely watched races in large cities and suburbs.'),
  UT: state('UT', 'Utah', 'Leans Republican', 'republican', 6, 'Check Utah Lieutenant Governor Elections Office', 'https://vote.utah.gov/', 'Utah has fast growth, distinctive conservative politics, public lands issues, and active debates around housing and transportation.'),
  VT: state('VT', 'Vermont', 'Leans Democratic', 'democratic', 3, 'Check Vermont Secretary of State', 'https://sos.vermont.gov/elections/', 'Vermont has small-town civic traditions, independent political history, and policy debates around rural services and affordability.'),
  VA: state('VA', 'Virginia', 'Leans Democratic', 'democratic', 13, 'Check Virginia Department of Elections', 'https://www.elections.virginia.gov/', 'Virginia includes federal workers, military communities, suburbs, rural regions, and off-year elections that draw national attention.'),
  WA: state('WA', 'Washington', 'Leans Democratic', 'democratic', 12, 'Check Washington Secretary of State', 'https://www.sos.wa.gov/elections', 'Washington is known for vote-by-mail, technology and trade issues, Pacific Northwest politics, and urban-rural differences.'),
  WV: state('WV', 'West Virginia', 'Leans Republican', 'republican', 4, 'Check West Virginia Secretary of State', 'https://sos.wv.gov/elections', 'West Virginia is shaped by energy, rural healthcare, labor history, and economic transition in Appalachian communities.'),
  WI: state('WI', 'Wisconsin', 'Swing / Competitive', 'competitive', 10, 'Check Wisconsin Elections Commission', 'https://elections.wi.gov/', 'Wisconsin has had very close statewide elections, making turnout and local differences especially important.'),
  WY: state('WY', 'Wyoming', 'Leans Republican', 'republican', 3, 'Check Wyoming Secretary of State', 'https://sos.wyo.gov/Elections/', 'Wyoming has the smallest population of any state, large rural areas, public lands, energy issues, and strongly local political concerns.')
}

export const stateAbbreviations = Object.keys(statesData)
