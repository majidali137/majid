import React, { useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";
import PostDetails from "./PostDetails";
import Spinner from "./Spinner";


const url = "http://localhost:8000/data";

const Blog = () => {

  const params = useParams();
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
      {posts.map(
        (post) =>
          post.slug === params.slug && (
            <PostDetails
            key={post.id}
              blogTitle={post.blogTitle}
              image={post.blogImage}
              blogText={post.blogText}
            />
          )
      )}
    </div>
  );
};

export default Blog;
