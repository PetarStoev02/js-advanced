/*
  Day 8 - Modules
  Exercise: Circular Dependencies
  
  This file has a circular dependency with Post.js
  Your task: Refactor to eliminate the circular import
*/

import { Post } from './Post.js';  // CIRCULAR! Post.js also imports User

export class User {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  
  createPost(title, content) {
    // Creates a Post and adds it to user's posts
    const post = new Post(title, content, this);
    this.posts.push(post);
    return post;
  }
  
  getAllPosts() {
    return this.posts;
  }
  
  getPostCount() {
    return this.posts.length;
  }
}
