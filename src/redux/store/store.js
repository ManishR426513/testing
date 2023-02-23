import { createStore } from "redux";
import { rootreducer } from "../reducer/main";


export const store=createStore(rootreducer)