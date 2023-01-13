import axios from "axios";
import { TrelloList } from "@/types";
import { data } from "autoprefixer";

const url = "api/media-log/";

class MediaLogService {
  // Get Posts
  static getMediaLogData() {
    return new Promise((resolve, reject) => {
      return axios
        .get(url)
        .catch((err: any) => reject(err))
        .then((response: any) => {
          resolve(response.data);
        });
    });
  }
}

export default MediaLogService;
