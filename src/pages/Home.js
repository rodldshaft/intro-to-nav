import { Link } from "react-router-dom";

const Home = () => {
  const id = "12345678";

  //   const name = "Bastien";
  return (
    <div className="page home">
      <h1>Home</h1>
      <Link to={`/product/${id}`}>Go to product Page with id: {id}</Link>
      <br />
      {/* <Link to={`/product/${name}`}>Go to product Page with name: {name}</Link> */}
    </div>
  );
};

export default Home;
