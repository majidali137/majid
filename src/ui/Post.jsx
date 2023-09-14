import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";

import BlogCard from "./BlogCard";
import Spinner from "./Spinner";

const url = "http://localhost:8000/data";
const Post = () => {
  const { posts, error, isLoading } = useFetch(url);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {posts.length > 0 && (
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            // <li key={post.id}>{post.blogTitle}</li>

            <BlogCard
              key={post.id}
              image={post.blogImage}
              title={post.blogCategory}
              description={post.blogText}
              path={`/blog/${post.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
