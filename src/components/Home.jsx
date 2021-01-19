import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title={"All Blogs!"}
        handleDelete={handleDelete}
      />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario's Blogs!"}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title={"Yoshi's Blogs!"}
      /> */}
    </div>
  );
};

export default Home;
