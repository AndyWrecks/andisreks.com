import { ActionContext } from "vuex";

export interface State {
  mediaLog: MediaLogState;
}

export interface MediaLogState {
  lists: TrelloList[];
}

export interface TrelloApi {
  lists: TrelloList[];
}

export interface TrelloList {
  _id: string;
  id: string;
  closed: boolean;
  idBoard: string;
  name: string;
  pos: number;
  softLimit: null;
  subscribed: boolean;
}
