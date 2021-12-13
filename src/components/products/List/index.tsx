import { useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IProductSearch } from "../types";
import qs from "qs";
import { Link, useSearchParams } from "react-router-dom";

const ProductsListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const { products, last_page } = useTypedSelector((store) => store.product);
  const { fetchProducts } = useActions();
  let [search, setSearch] = useState<IProductSearch>({
    page: searchParams.get("page"),
    name: searchParams.get("name"),
  });

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
        await fetchProducts(search);
        setLoading(false);
      } catch (ex) {
        setLoading(false);
      }
    }
    getProducts();
  }, [search]);

  const buttons = [];
  for (var i = 1; i <= last_page; i++) {
    buttons.push(i);
  }

  return (
    <>
      <h1 className="text-center">Товари на сайті</h1>
      {loading && <h2>Loading ...</h2>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
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

      <div className="text-end">
        {buttons.map((item, key) => {
          
          const data: IProductSearch = {
            ...search,
            page: item,
          };
          return (
            <Link
              onClick={() => {
                setSearch(data);
                //setSearchParams(qs.stringify(data));
              }}
              key={key}
              to={"?"+qs.stringify(data)}
              className="btn btn-success mx-1"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductsListPage;
