import BlogList from "./BlogList";
import useFetch from "../useFetch";
import { TailSpin } from "react-loading-icons";
import { useState } from "react";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="home">
      {error && <h1 className="error">{error}</h1>}
      {isLoading && (
        <h1 className="loading">
          <TailSpin stroke="#ffd100" />
        </h1>
      )}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
