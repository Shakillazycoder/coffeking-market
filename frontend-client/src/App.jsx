import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  const products = useLoaderData();
  return (
    <>
      <Header></Header>
      <h1>Products: {products.length}</h1>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {products.map((product) => (
          <div key={product._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={product.image}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p className="card-price">${product.price}</p>
                <div className="card-actions">
                  <Link to='/myProduct'>
                  <button className="btn btn-primary">Add to Cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
