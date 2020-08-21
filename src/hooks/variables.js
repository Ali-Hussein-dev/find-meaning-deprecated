export const baseUrl_Twinword =
  "https://twinword-word-graph-dictionary.p.rapidapi.com";

const urlList = [
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=",
  [
    "https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=",
    "https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=",
  ],
  "https://owlbot.info/api/v4/dictionary/",
  "https://lingua-robot.p.rapidapi.com/language/v1/entries/en/",
];
const rapidapiHeaders = [
  "mashape-community-urban-dictionary.p.rapidapi.com",
  "twinword-word-graph-dictionary.p.rapidapi.com",
  "lingua-robot.p.rapidapi.com",
];
export const [
  urbanUrl,
  [twinwordUrl, twinwordUrlEx],
  owlbotUrl,
  linguaRobotUrl,
] = urlList;
export const [xHostUrban, xHostTwinword, xHostLinguaRobot] = rapidapiHeaders;

// export const userMsg = {
//   nodefinition: "has no definition for",
// };
