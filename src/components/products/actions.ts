import { Dispatch } from "react";
import http from "../../http_common";
import { ProductActions, IProductsModel, ProductsActionTypes, IProductSearch } from "./types";

export const fetchProducts = (search: IProductSearch) => {
  return async (dispatch: Dispatch<ProductActions>) => {
    try {
      let response = await http.get<IProductsModel>("api/products",
        {
          params: search
        });
      const {data, last_page} = response.data;
      dispatch({
        type: ProductsActionTypes.FETCH_PRODUCTS,
        payload: {products: data, last_page:last_page},
      });
      return Promise.resolve(data);
    } catch (ex) {
      console.log("Problem fetch");
      return Promise.reject();
    }
  };
};
