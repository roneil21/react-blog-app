import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { TailSpin } from "react-loading-icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogContent = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-content">
      {isLoading && (
        <h1 className="loading">
          <TailSpin stroke="#ffd100" />
        </h1>
      )}
      {error && <h1>{error}</h1>}
      {blog && (
        <article>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="author">Author : {blog.author}</p>
          <p>{blog.content}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogContent;
