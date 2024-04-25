import { useContext } from "react";
import Header from "./Header";
import { AuthContext } from "../Provider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const image = e.target.image.value;
    const email = user.email;

    const product = {
      name: name,
      price: price,
      description: description,
      image: image,
      email: email,
    };
    console.log(product);
    fetch("http://localhost:3000/addProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("product added successfully");
          e.target.name.value = "";
          e.target.price.value = "";
          e.target.description.value = "";
          e.target.image.value = "";
        }
      });
  };

  return (
    <div>
      <Header></Header>
      <h1>Add Product</h1>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">App Product</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <form onSubmit={handleAddProduct} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="price"
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image url"
                    name="image"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">App Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
