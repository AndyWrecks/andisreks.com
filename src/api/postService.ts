// @ts-ignore
import axios from "axios";
import { TrelloList } from "@/types";

const url = "api/post/";

class PostService {
  // Get Posts
  static getPosts() {
    return new Promise((resolve, reject) => {
      return axios
        .get(url)
        .catch((err: any) => reject(err))
        .then((response: any) => {
          resolve(
            response.data.map((post: any) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            }))
          );
        });
    });
  }

  // Create Post
  static insertPost(text: string) {
    return axios.post(url, {
      text,
    });
  }

  // Delete Post
  static deletePost(id: string | number) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
