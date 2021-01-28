import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, loading, error } = useFetch(
    "http://localhost:4000/blogs"
  );

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {loading && <div>loading ....</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All Blogs!"}
          //handleDelete={handleDelete}
        />
      )}
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
