import { useEffect, useState } from "react";
import http from "../../../http_common";
import { IProductItem, IProductsModel } from "./types";

const ProductsListPage: React.FC = () => {
  const [state, setState] = useState<Array<IProductItem>>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        let response = await http.get<IProductsModel>("api/products");
        const { data } = response.data;
        setState(data);
      } catch (ex) {
        console.log("Problem fetch");
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <h1 className="text-center">Товари на сайті</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.detail}</td>
              </tr>
            );
          })}         
        </tbody>
      </table>
    </>
  );
};

export default ProductsListPage;
