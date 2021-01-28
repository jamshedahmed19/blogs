import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:4000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new Blog Added", blog);
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Create A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label htmlFor="body">Blog Body: </label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label htmlFor="author">Blog Author: </label>
        <select
          name="author"
          id="author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="jamshed">Jamshed</option>
          <option value="hammad">Hammad</option>
          <option value="uzair">Uzair</option>
        </select>
        {!isPending && <button type="submit">Submit</button>}
        {isPending && <button type="submit">Adding Blog</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
