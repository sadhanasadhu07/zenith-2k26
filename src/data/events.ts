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
    image: "/image/Indrudex.png", altText: "Illustration representing paper presentation",
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
    title: "UI Matrix",
shortName: "UI Matrix",
category: "Technical",
participants: 2,
format: "Team",

description:
"UI Matrix is a fast-paced frontend interface coding challenge where teams design and develop a creative user interface from scratch within a limited time.",

fullDescription:
"UI Matrix is a frontend development competition where teams are given a unique UI concept on the spot and must build a visually appealing and functional interface within a strict time limit. The event tests participants' creativity, layout structuring ability, frontend coding skills, and time management. Teams must develop the UI completely from scratch using HTML and CSS, with optional JavaScript for interactivity, while maintaining clean code and responsive design.",

image: "/image/UI matrix.png",
altText: "Frontend UI design and development concept",

rounds: [
  {
    name: "Step 1  UI Idea Announcement",
    description:
      "A UI concept such as an e-commerce product page, event registration interface, student dashboard, travel booking interface, or fitness app homepage will be given on the spot. Teams must quickly plan the layout and structure the UI components."
  },
  {
    name: "Step 2  UI Development",
    description:
      "Teams must build the complete interface within the given time, focusing on structured layout, proper spacing, visually appealing design, clean code, and responsive behavior. Bonus features such as animations or interactive elements may be added if time permits."
  }
],

rules: [
  "Each team must consist of two participants.",
  "Internet connection will not be provided during the competition.",
  "Mobile phones are strictly prohibited.",
  "Pre-built templates are not allowed.",
  "Copying code from external sources is strictly prohibited.",
  "Participants must build the UI completely from scratch.",
  "Only offline tools and software may be used.",
  "Judges decisions will be final."
],
    coordinators: [{ name: "Dharani M P", role: "Coordinator", phone: "+91 9042078814" }, { name: "ParvinKumar K", role: "Coordinator", phone: "+91 7010910428" }],
    documentUrl: "/UI_MATRIX.pdf"
  },
  {
    title: "Prompt To Pick", shortName: "Prompt To Pick", category: "Technical", participants: 1, format: "Individual",
    description: "Prompt to Pick is an AI prompt engineering competition where participants design effective prompts to generate accurate and creative AI outputs.",
    fullDescription: "Prompt to Pick is an interactive competition that tests participants creativity and skills in AI prompt engineering. The event has two rounds: the first focuses on creating a structured prompt using given elements such as topic, audience, format, and tone, while the second requires participants to generate an AI image similar to a reference image using a descriptive prompt. The competition helps participants improve creative thinking, prompt design, and effective communication with AI tools.",
    image: "/image/P2P.png", altText: "Illustration representing debugging",
    rounds: [{
    name: "Round 1  Prompt Puzzle",
    description:
      "Participants receive prompt elements such as Topic, Audience, Format, and Tone. They must combine these elements logically to create a clear and structured prompt."
  },
  {
    name: "Round 2  Vision to Visual",
    description:
      "Participants are shown a reference image and must recreate a similar image using an AI image generation tool by writing a detailed descriptive prompt."
  }],
    rules: [
      "Each participant must work individually.",
  "Participants must use all provided prompt elements in Round 1.",
  "AI tools may only be used for prompt testing or image generation.",
  "Uploading the reference image directly into the generator is not allowed.",
  "Participants must complete each round within the given time limit.",
  "Judges' decisions will be final.",
    ],
    coordinators: defaultCoordinators, documentUrl: "/P2P-description.pdf"
  },
  {
   title: "Reverse Arena",
shortName: "RevArena",
category: "Technical",
participants: 3,
format: "Team",

description:
"Reverse Arena is an intense cybersecurity challenge where participants analyze binaries, encoded files, and scripts to uncover hidden logic and capture flags.",

fullDescription:
"Reverse Arena is a reverse engineering competition designed to test analytical thinking, technical expertise, and problem-solving skills under pressure. Participants are given compiled programs, binaries, encoded files, or obfuscated scripts and must analyze them to uncover hidden logic, vulnerabilities, or secrets. The goal is to reverse engineer the challenges and extract the correct flags within the allotted time. This event simulates real-world cybersecurity scenarios such as malware analysis and vulnerability discovery.",

image: "/image/Rev Arena.jpg",
altText: "Cybersecurity reverse engineering concept",

rounds: [
  {
    name: "Reverse Engineering Challenge",
    description:
      "Teams analyze provided binaries, executables, or scripts to identify hidden logic, decode protected content, and capture the correct flags within the time limit."
  }
],

rules: [
  "Participants may compete individually or in teams of up to three members.",
  "Participants must analyze the provided files and extract the correct flags.",
  "Sharing flags between teams is strictly prohibited.",
  "Internet access may be restricted depending on organizer rules.",
  "Fair play must be maintained throughout the competition.",
  "Judges' decisions will be final."
],
    coordinators: defaultCoordinators, documentUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/edit"
  },
];

export const nonTechnicalEvents: EventDetails[] = [
  // E- sports
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
    title: "Spot and Solve",
shortName: "Spot & Solve",
category: "Technical",
participants: 1,
format: "Individual",

description:
"Spot and Solve is an image-based OSINT quiz where participants analyze real-world images and identify locations, landmarks, and other visual clues using logical reasoning and research.",

fullDescription:
"Spot and Solve is an image-based Open Source Intelligence (OSINT) challenge where participants examine real-world images to extract visual clues and answer location-based questions. Using publicly available tools, AI platforms, maps, and search engines, participants must identify locations, landmarks, coordinates, and time of day from the images. The event tests visual intelligence, analytical thinking, and online research skills while encouraging participants to apply logical reasoning and investigative techniques.",

image: "https://picsum.photos/seed/osint/400/400",
altText: "Visual clue analysis and location identification concept",

rounds: [
  {
    name: "Image Analysis Quiz",
    description:
      "Participants will be given 5 image-based questions where they must identify details such as location, time of day, or geographic coordinates using logical reasoning and publicly available tools."
  }
],

rules: [
  "Individual participation only.",
  "The total time limit for the event is 30 minutes.",
  "Participants may use publicly available tools, AI platforms, search engines, maps, and public databases.",
  "Participants can revisit previous questions within the time limit.",
  "No discussion or collaboration with other participants is allowed.",
  "Each correct answer carries 2 points.",
  "All answers must be verified using Google Maps.",
  "Unverified answers will not be considered.",
  "Any unethical practices or rule violations will lead to disqualification."
],
    coordinators: defaultCoordinators, documentUrl: "/spot_and_solve_zenith.pdf"
  },

  // chess
  {
    title: "Inter-College Blitz Chess Championship",
shortName: "Blitz Chess",
category: "Non-Technical",
participants: 1,
format: "Individual",

description:
"Inter-College Blitz Chess Championship is a competitive chess event featuring an online qualification round followed by an over-the-board knockout stage to determine the final champion.",

fullDescription:
"The Inter-College Blitz Chess Championship is a competitive inter-college event that combines an online qualification stage with an over-the-board knockout stage. Participants first compete in a fast-paced online arena tournament using the Lichess mobile platform. The top four players from the qualification stage advance to the physical knockout rounds, including semifinals and a final match, where a single overall champion will be crowned.",

image: "https://picsum.photos/seed/chess/400/400",
altText: "Chess board representing a blitz chess competition",

rounds: [
  {
    name: "Stage 1  Online Qualification",
    description:
      "Participants compete in a 3+2 blitz arena tournament on the Lichess mobile application. Rankings are determined by total points and performance rating, and the top four players qualify for the knockout stage."
  },
  {
    name: "Stage 2  Knockout Stage",
    description:
      "The top four players compete in over-the-board matches with semifinals and a final. Semifinals are played with 5+0 time control and the final with 5+3 time control using a digital chess clock."
  }
],

rules: [
  "Each participant must compete individually.",
  "Only verified Lichess accounts are allowed for the online qualification stage.",
  "Participants must use the Lichess mobile application on their personal device.",
  "No headphones, Bluetooth devices, or smartwatches are allowed during the game.",
  "Phone must remain on the table with Do Not Disturb mode enabled.",
  "Network stability is the participant's responsibility.",
  "Judges and the Chief Arbiter's decision will be final in all matters.",
],
    coordinators: defaultCoordinators, documentUrl: "/Chess_zenith.pdf"
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
