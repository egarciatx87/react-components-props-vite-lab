import React from "react";
import blogData from "../data/blog";

import Header from "./Header";
import Article from "./Article";
import ArticleList from "./ArticleList";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* 2. Give the Header the blog name */}
      <Header name={blogData.name} />

      {/* 3. Give About the image and about text */}
      <About image={blogData.image} about={blogData.about} />

      {/* 4. Give ArticleList the array of posts */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
