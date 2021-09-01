import generateUUID from "../GenerateID/Generate";
export const ROUTER = {
  HOME: "/",
  CHATS: "/chats",
  CHAT1: "/chats/1 ",
  CHAT2: "/chats/2 ",
  CHAT3: "/chats/3 ",
  CHAT4: "/chats/4 ",
  CHAT5: "/chats/5 ",
  CHAT6: "/chats/6 ",
  CHAT7: "/chats/7 ",
  CHAT8: "/chats/8 ",
  PROFILR: "/profile",
  NOT_FOUND: "not-found",
};

export const INITIAL_CHATS = [
  {
    name: " Ali Connors",
    text: "Brunch this weekend?",
    id: generateUUID(10),
  },
  {
    name: " to Scott, Alex, Jennifer",
    text: "Summer BBQ",
    id: generateUUID(10),
  },
  {
    name: "Sandra Adams",
    text: "Oui Oui",
    id: generateUUID(10),
  },
  {
    name: "Tony",
    text: "Crazy boy",
    id: generateUUID(10),
  },
  {
    name: "Martin",
    text: "Chocolate",
    id: generateUUID(10),
  },
  {
    name: "Julli, James, Yan",
    text: "Picnic",
    id: generateUUID(10),
  },
  {
    name: "Anny)",
    text: "Anny",
    id: generateUUID(10),
  },
  {
    name: "Jony",
    text: "J",
    id: generateUUID(10),
  },
];
