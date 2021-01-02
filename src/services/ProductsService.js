import GenericService from "./GenericService";

class ProductsService extends GenericService {
  constructor() {
    super();
  }
  addProduct = (data) => {
    console.log("addpost : " + data);
    const formData = new FormData();
    formData.append("image", data.image);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("details", data.details);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return this.post("products/", data);
  };

  getProduct = (page = 1, perPage = 10) => {
    return this.get("products?page=" + page + "&perPage=" + perPage);
  };

  deleteProduct = (id) => {
    return this.delete("posts/" + id);
  };
  updateProduct = (id, data) => {
    return this.put("posts/" + id, data);
  };

  getSingleProduct = (id) => {
    return this.get("posts/" + id);
  };
}

let productService = new ProductsService();
export default productService;
