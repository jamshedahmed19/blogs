const Home = () => {
  const handleClick = () => {
    console.log("btn clicked");
  };
  const handleClickAgain = (name, e) => {
    console.log(name, e.target);
  };
  return (
    <div className="home">
      <h1>Homepage</h1>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("jamshed", e)}>Click me</button>
    </div>
  );
};

export default Home;
