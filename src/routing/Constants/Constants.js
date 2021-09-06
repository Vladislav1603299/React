import generateUUID from "../../components/GenerateID/Generate";

export const ROUTER = {
  HOME: "/",
  CHATS: "/chats",
  PROFILR: "/profile",
  NOT_FOUND: "not-found",
};

export const INITIAL_CHATS = [
  {
    name: " Ali Connors",
    text: "Brunch this weekend?",
    way: "/chats/1",
    id: generateUUID(),
  },
  {
    name: " to Scott, Alex, Jennifer",
    text: "Summer BBQ",
    way: "/chats/2",
    id: generateUUID(),
  },
  {
    name: "Sandra Adams",
    text: "Oui Oui",
    way: "/chats/3",
    id: generateUUID(),
  },
  {
    name: "Tony",
    text: "Crazy boy",
    way: "/chats/4",
    id: generateUUID(),
  },
  {
    name: "Martin",
    text: "Chocolate",
    way: "/chats/5",
    id: generateUUID(),
  },
  {
    name: "Julli, James, Yan",
    text: "Picnic",
    way: "/chats/6",
    id: generateUUID(),
  },
  {
    name: "Anny)",
    text: "Anny",
    way: "/chats/7",
    id: generateUUID(),
  },
  {
    name: "Jony",
    text: "J",
    way: "/chats/8",
    id: generateUUID(),
  },
  {
    name: "Mark",
    text: "Hello!",
    way: "/chats/9",
    id: generateUUID(),
  },
  {
    name: "Karen",
    text: ":)",
    way: "/chats/10",
    id: generateUUID(),
  },
];
