import { applyMiddleware, combineReducers, createStore } from "redux";
import { chatsReducer } from "./Chats/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";
import { photosReducer } from "./Photos/reducer";
import { BotAnswer } from "../Middlewares/BotAnswer/BotAnswer";
import { compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    photos: photosReducer,
  }),

  composeEnhancers(applyMiddleware(BotAnswer, thunk))
);
