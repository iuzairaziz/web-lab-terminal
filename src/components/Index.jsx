import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import productService from "../services/ProductsService";
import Stars from "../components/Stars";

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productService
      .getProduct()
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((item, index) => {
            return (
              <div className="col-md-4 ">
                <div
                  class="card d-flex flex-column justify-content-center"
                  style={{ width: "18rem" }}
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title text-center">
                      <b>{item.name}</b>
                    </h5>
                    <section class="rating-widget mt-4">
                      <div class="rating-stars text-center">
                        <ul id="stars">
                          <li class="star" title="Poor" data-value="1">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="Fair" data-value="2">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="Good" data-value="3">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="Excellent" data-value="4">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                          <li class="star" title="WOW!!!" data-value="5">
                            <i class="fa fa-star fa-fw"></i>
                          </li>
                        </ul>
                      </div>

                      <div class="success-box">
                        <div class="clearfix"></div>
                        <img
                          alt="tick image"
                          width="32"
                          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
                        />
                        <div class="text-message"></div>
                        <div class="clearfix"></div>
                      </div>
                    </section>
                    <p class="card-text text-center">{item.details}</p>
                    <p class="card-text text-center">
                      <b>${item.price}</b>
                    </p>
                    <a href="#" class="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Stars />
    </>
  );
};

export default Index;
