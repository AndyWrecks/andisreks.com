import { ActionContext } from "vuex";

export interface State {
  mediaLog: MediaLogState;
}

export interface MediaLogState extends TrelloApi {}

export interface TrelloApi {
  lists: TrelloList[];
  items: TrelloCard[];
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

export interface TrelloCard {
  _id: string;
  id: string;
  badges: {
    attachmentsByType: {
      trello: {
        board: number;
        card: number;
      };
    };
    location: boolean;
    votes: number;
    viewingMemberVoted: boolean;
    subscribed: boolean;
    fogbugz: string;
    checkItems: number;
    checkItemsChecked: number;
    checkItemsEarliestDue: null;
    comments: number;
    attachments: number;
    description: boolean;
    due: null;
    dueComplete: boolean;
    start: null;
  };
  cardRole: null;
  checkItemStates: null;
  closed: boolean;
  cover: {
    idAttachment: null;
    color: null;
    idUploadedBackground: null;
    size: string;
    brightness: string;
    idPlugin: null;
  };
  dateLastActivity: string;
  desc: string;
  descData: {
    emoji: {};
  };
  due: null;
  dueComplete: boolean;
  dueReminder: null;
  email: null;
  idAttachmentCover: null;
  idBoard: string;
  idChecklists: [];
  idLabels: [];
  idList: string;
  idMembers: [];
  idMembersVoted: [];
  idShort: number;
  isTemplate: boolean;
  labels: [];
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  start: null;
  subscribed: boolean;
  url: string;
}
