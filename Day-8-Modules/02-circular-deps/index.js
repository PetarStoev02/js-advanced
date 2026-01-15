/*
  Day 8 - Modules
  Exercise: Circular Dependencies - Test File
  
  After fixing the circular dependency, this file should run without errors.
*/

import { User } from './User.js';
import { Post } from './Post.js';

// Create users
const alice = new User('Alice');
const bob = new User('Bob');

// Alice creates a post
const post1 = alice.createPost('Hello World', 'This is my first post!');

// Bob likes Alice's post
post1.like(bob);

// Display results
console.log('Alice\'s posts:', alice.getPostCount());
console.log('Post details:', post1.toJSON());
console.log('Likes on post:', post1.getLikeCount());

// Bob creates a post
const post2 = bob.createPost('My Response', 'Great post Alice!');
alice.createPost('Another Post', 'More content here');

console.log('\nAll of Alice\'s posts:');
alice.getAllPosts().forEach(p => console.log(' -', p.title));

console.log('\nTest passed! Circular dependency resolved.');
