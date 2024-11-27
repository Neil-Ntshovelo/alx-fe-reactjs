import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>This is the content of the blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;