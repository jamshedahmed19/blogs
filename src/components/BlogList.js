const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blogs-list">
      <h1>{title}</h1>
      {blogs && blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Wirtten By {blog.author}</p>
          <button
            onClick={() => {
              handleDelete(blog.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
