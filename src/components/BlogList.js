import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blogs-list">
      <h1>{title}</h1>
      {blogs &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Wirtten By {blog.author}</p>
            </Link>
            {/* <button
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              Delete
            </button> */}
          </div>
        ))}
    </div>
  );
};

export default BlogList;
