# PoliBase

PoliBase is a responsive civic education website that explains U.S. politics in simple, neutral language. It is designed for young voters, first-time voters, students, immigrants, and anyone who wants politics to feel less confusing.

## Run Locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal, usually `http://localhost:5173`.

## Edit State And Election Data

State map data lives in:

```text
src/data/statesData.js
```

That file stores all 50 states with abbreviations, names, dates, leaning categories, official election links, key offices, educational state notes, and recent presidential results. Translated map labels live in `src/data/translations.js` under each language's `map` section.

Before publishing current voter guidance, verify deadlines, calendars, links, and certified results with official or nonpartisan sources such as `vote.gov`, state election office websites, FEC results, or nonpartisan election databases.

## Edit Quiz Questions

Quiz questions live in:

```text
src/data/quizData.js
```

The bank contains 100 original, nonpartisan questions. The Quiz page randomly selects five at a time and stores completed question IDs in the browser's local storage. Quiz page labels and result messages live in `src/data/translations.js` under `en`, `pt`, and `es`.

The quiz page also includes a separate 20-question party-perspectives activity. Its question and answer mapping live in:

```text
src/data/partyQuizData.js
```

This activity reports the broad party perspectives represented in the user's answers. It does not show numeric scores, rank parties, assign party membership, or tell anyone how to vote. Party explanations and translations live in `src/data/translations.js`.

The party activity currently uses five broad answer perspectives: Democratic, Republican, Green, Libertarian, and Constitution. Results appear as equal buttons; selecting a button expands only that perspective's profile. Additional party profiles are included in the translation data for possible future expansion. Current leadership and party information should be rechecked against official party websites before public launch.

## News Feed

The News tab uses Google News RSS search feeds, converted to browser-readable JSON, to fetch recent political headlines. It filters by civic topics such as immigration, tuition, student loans, healthcare, housing, climate, transportation, elections, Congress, and court decisions. The feed loads fresh results when the page opens and refreshes while the page remains open; edit `src/data/newsSources.js` to change the available topics. PoliBase links to original reporting and does not copy article text.

## Edit Translations

All visible site text lives in:

```text
src/data/translations.js
```

To update Portuguese or Spanish, edit the `pt` or `es` sections. To add a new language later, copy the shape of `en`, translate each value, and add the new language option in `src/components/Navbar.jsx`.

## Suggested Future Improvements

- Real election API integration
- Add D.C. and congressional district details for Maine and Nebraska
- More detailed election timelines
- Automatic voter registration deadline updates
- Local election information by ZIP code
- More languages
- Links to official election office pages for every state
