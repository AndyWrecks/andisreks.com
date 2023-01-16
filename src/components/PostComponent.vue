<template>
  <section class="container">
    <h1>Latest Posts</h1>

    <!--    Create-->

    <div class="create-post">
      <label for="create-post">Say Something...</label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        placeholder="Create a post"
      />
      <button v-on:click="createPost">Post</button>
    </div>

    <hr />

    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container flex flex-col">
      <div
        class="post flex flex-col bg-red"
        v-for="(post, index) in posts"
        :item="post"
        :key="`post-${index}`"
        v-on:dblclick="deletePost(post._id)"
      >
        {{
          `${post.createdAt.getMonth() + 1}/${post.createdAt.getDate()}/${post.createdAt.getFullYear()}`
        }}
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import PostService from "@/api/postService";

export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
  },
};
</script>

<style scoped></style>
