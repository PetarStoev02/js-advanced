/*
  Day 8 - Modules
  Exercise: Circular Dependencies
  
  This file has a circular dependency with User.js
  Your task: Refactor to eliminate the circular import
*/

import { User } from './User.js';  // CIRCULAR! User.js also imports Post

export class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;  // User instance
    this.createdAt = new Date();
    this.likes = [];
  }
  
  like(user) {
    // User likes this post
    if (!(user instanceof User)) {
      throw new Error('Only users can like posts');
    }
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }
  
  getLikeCount() {
    return this.likes.length;
  }
  
  getAuthorName() {
    return this.author.name;
  }
  
  toJSON() {
    return {
      title: this.title,
      content: this.content,
      author: this.author.name,
      likes: this.likes.length,
      createdAt: this.createdAt.toISOString()
    };
  }
}
