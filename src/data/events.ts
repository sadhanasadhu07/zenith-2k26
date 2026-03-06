import { EventDetails } from "../components/EventModal";

const defaultRules = [
  "Participants must register before the deadline.",
  "Teams must arrive 15 minutes before the event starts.",
  "Use of unfair means will lead to immediate disqualification.",
  "Decision of the judges and coordinators is final.",
  "Participants must carry a valid college ID card.",
];

const defaultCoordinators = [
  { name: "Prof. R. Meenakshi", role: "Student Coordinator", phone: "9400000001" },
  { name: "Arjun Krishnan", role: "Student Coordinator", phone: "9400000002" },
];

export const technicalEvents: EventDetails[] = [
  {
    title: "Intrudex45", shortName: "Intrudex45", category: "Technical", participants: 2, format: "Team of 2",
    description: "Present your innovative ideas and research papers.",
    fullDescription: "Intrudex45 is a fast-paced competitive paper presentation contest that tests your research and presentation skills under pressure. Gather your papers and pitch your best ideas.",
    image: "https://picsum.photos/seed/paper/400/400", altText: "Illustration representing paper presentation",
    rounds: [{ name: "R1", description: "Online abstract submission" }, { name: "R2", description: "On-site presentation - 10 minutes" }],
    rules: [
      "Abstract must be submitted 48 hours prior to the event.",
      "Presentation time is strictly 10 minutes followed by a 5-minute Q&A.",
      "Plagiarism of any kind will result in disqualification.",
      "Teams must consist of exactly 2 members.",
      "Decision of the judging panel is final and binding.",
    ],
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
  {
    title: "UI Matrix", shortName: "UI Matrix", category: "Technical", participants: 2, format: "Team of 2",
    description: "The ultimate coding challenge to test your logic and speed.",
    fullDescription: "UI MATRIX is a fast-paced UI development competition where teams are provided with a unique User Interface idea on the spot and must develop an efficient and visually appealing UI within a strict time limit.",
    image: "https://picsum.photos/seed/codex/400/400", altText: "Illustration representing coding",
    rounds: [{ name: "R1", description: "Online qualifier — 5 problems in 60 minutes" }, { name: "R2", description: "Round 2: On-site finals — 3 hard problems in 90 minutes" }],
    rules: [
      "Internet connection will NOT be provided.",
      "Mobile phones are strictly prohibited.",
      "Pre-built templates are not allowed",
      "Copy-pasting from external sources is strictly prohibited.",
      "Participants must code from scratch",
      "Judges’ decision will be final",
    ],
    coordinators: [{ name: "Dharani M P", role: "Coordinator", phone: "+91 9042078814" }, { name: "ParvinKumar K", role: "Coordinator", phone: "+91 7010910428" }],
    documentUrl: "/UI_MATRIX.pdf"
  },
  {
    title: "Prompt To Pick", shortName: "Prompt To Pick", category: "Technical", participants: 1, format: "Individual",
    description: "Find and fix bugs in the shortest time possible.",
    fullDescription: "Test your debugging skills! Find and resolve hidden logical, syntax, and runtime errors across multiple codebases.",
    image: "https://picsum.photos/seed/bug/400/400", altText: "Illustration representing debugging",
    rounds: [{ name: "R1", description: "Written test on debugging concepts" }, { name: "R2", description: "Live debugging on provided source code" }],
    rules: [
      "Each participant will be given the same set of buggy code snippets.",
      "Only the provided IDE may be used; no external tools.",
      "Participants are ranked by number of bugs fixed, then by time taken.",
      "No collaboration or communication with other participants.",
      "All electronic devices except the competition system must be switched off.",
    ],
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
  {
    title: "Rev Arena", shortName: "Rev Arena", category: "Technical", participants: 2, format: "Team of 2",
    description: "A fun and chaotic coding event with a twist.",
    fullDescription: "One partner types, the other dictates, but there's a catch: the typist can't see the screen! A hilarious coordination challenge.",
    image: "https://picsum.photos/seed/comali/400/400", altText: "Illustration representing fun coding",
    rounds: [{ name: "R1", description: "Blindfolded basic syntax typing" }, { name: "R2", description: "Full logic building with reversed roles" }],
    rules: [
      "The typist must wear the blindfold at all times during their turn.",
      "The dictator may not touch the keyboard or mouse.",
      "Teams may swap roles only between rounds.",
      "Shouting or physical guidance is not permitted.",
      "Scores are based on accuracy and completion time.",
    ],
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
];

export const nonTechnicalEvents: EventDetails[] = [
  {
    title: "E-Sports", shortName: "GAMING", category: "Non-Technical", participants: "1-4", format: "Squad / Individual",
    description: "Competitive gaming tournament for enthusiasts.",
    fullDescription: "Battle out in BGMI and Valorant tournaments to prove your supremacy.",
    image: "https://picsum.photos/seed/gaming/400/400", altText: "Illustration representing e-sports",
    rounds: [{ name: "R1", description: "Qualifiers" }, { name: "R2", description: "Semi-finals and Finals" }],
    rules: [
      "Participants must use only the devices provided by organizers.",
      "Any form of hacking, cheating, or exploiting game bugs leads to disqualification.",
      "Mobile participants must bring their own registered-account devices.",
      "Matches will be officiated by designated referees whose decisions are final.",
      "Unsportsmanlike conduct will result in immediate removal from the tournament.",
    ],
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
  {
    title: "Spot and Solve", shortName: "Spot And Solve", category: "Non-Technical", participants: 1, format: "Individual",
    description: "Showcase your design skills by creating stunning posters.",
    fullDescription: "		Spot and Solve is an Image-Based Open Source Intelligence (OSINT) quiz where participants analyze real-world images and extract meaningful visual clues to answer location-based questions. Using publicly available tools, AI platforms, and logical reasoning, participants must identify locations, landmarks, and time of day from the given images. This event tests visual intelligence, analytical thinking, and research skills.",
    image: "https://picsum.photos/seed/design/400/400", altText: "Illustration representing poster design",
    rounds: [{ name: "R1", description: "Digital design submission within 2 hours" }],
    rules: [
      "Individual participation only .",
      "Strict adherence to the 30-minute time limit is mandatory.",
      "All publicly available open-source tools, AI platforms, search engines, maps, and public databases are allowed .",
      "Participants are allowed to revisit previous questions within the time limit. ",
      "No discussion or collaboration with other participants during the event.",
    ],
    coordinators: defaultCoordinators, documentUrl: "/spot_and_solve_zenith.pdf"
  },
  {
    title: "Chess", shortName: "Chess", category: "Non-Technical", participants: 1, format: "Individual",
    description: "Identify the tunes and prove your musical knowledge.",
    fullDescription: "Tamil Nadu's first prestigious competitive inter-college chess blitz championship. The event follows a hybrid format combining an online qualification stage conducted on the Lichess mobile platform with an over-theboard physical knockout stage, culminating in the crowning of a single overall Champion. Only the Champion shall be awarded.",
    image: "https://picsum.photos/seed/music/400/400", altText: "Illustration representing music detective",
    rounds: [{ name: "R1", description: "Audio clip identification" }, { name: "R2", description: "Rapid fire buzzer round" }],
    rules: defaultRules,
    coordinators: defaultCoordinators, documentUrl: "/Chess_zenith.pdf"
  },
  {
    title: "IPL Auction", shortName: "AUCTION", category: "Non-Technical", participants: 4, format: "Team of 4",
    description: "Strategize and build your dream cricket team.",
    fullDescription: "Use your virtual budget strategically to bid on players and build the ultimate cricket franchise.",
    image: "https://picsum.photos/seed/cricket/400/400", altText: "Illustration representing IPL auction",
    rounds: [{ name: "R1", description: "Written quiz on cricket trivia" }, { name: "R2", description: "Live mock auction bidding" }],
    rules: [
      "Each team is given a fixed virtual budget; overspending is not allowed.",
      "A minimum squad size must be maintained at the end of the auction.",
      "Teams must have at least one player from each designated category.",
      "Bids once placed cannot be retracted.",
      "The auctioneer's decision on disputed bids is final.",
    ],
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
];

export const funEvents: EventDetails[] = [
  {
    title: "Find the Song", shortName: "Song", category: "Fun", participants: 2, format: "Team of 2",
    description: "Expect the unexpected in our special fun segment.",
    fullDescription: "We aren't telling you what it is, but we promise it's going to be wild, hilarious, and challenging.",
    image: "https://picsum.photos/seed/fun/400/400", altText: "Illustration representing mystery",
    rounds: [{ name: "R1", description: "Surprise Challenge" }],
    rules: defaultRules,
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },

];
