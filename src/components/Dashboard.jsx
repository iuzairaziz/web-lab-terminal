import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import productService from "../services/ProductsService";
const Dashboard = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();
  const [details, setDetails] = useState("");

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-8 mt-5">
          <form
            encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              productService
                .addProduct({ name, price, category, image, details })
                .then(() => {
                  console.log("success adding product");
                })
                .catch(() => {
                  console.log("failed");
                });
            }}
          >
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={name}
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Price
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Details
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="price"
                value={details}
                onChange={(e) => {
                  setDetails(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Category
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Image
              </label>
              <input
                type="file"
                name="image"
                value={image}
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => {
                  e.preventDefault();
                  setImage(e.target.files[0]);
                }}
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
