import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [myProducts, setMyProducts] = useState([])
   useEffect(() => {
      fetch(`http://localhost:3000/addproducts/${user?.email}`)
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setMyProducts(data);
        });
   }, [user])

    return (
        <div>
            <Header></Header>
            <h1>MyProduct: {myProducts.length} </h1>
            <div className="grid grid-cols-2 gap-4 mt-5">
        {myProducts.map((product) => (
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
                  <Link to={`/updateProduct/${product._id}`}>
                  <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button className="btn btn-primary">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default MyProduct;