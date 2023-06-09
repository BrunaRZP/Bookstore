import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "../../styles/produtos.css";
import { mainApiJson } from "../../mainApi/config";
const baseApiUrl = process.env.REACT_APP_BASE_API_URL;

const sortOptions = [
  "Preço: Maior - Menor",
  "Preço: Menor - Maior",
  "Recente",
  "Mais Antigo",
];

interface Iproduct {
  id: number;
  name: string;
  description: string;
  price: number;
  inventory: number;
  categories: Icategory[];
  images: Iimage[];
}
interface Icategory {
  id: number;
  name: string;
  description: string;
}
interface Iimage {
  id: number;
  filename: string;
  productId: number;
}

export default function Products() {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [currentSort, setCurrentSort] = useState("Recente");
  const [productCount, setProductCount] = useState(10);
  const [products, setProducts] = useState<Iproduct[]>();
  const [categories, setCategories] = useState<Icategory[]>();

  useEffect(() => {
    mainApiJson.get(`/product`).then((res) => setProducts(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    mainApiJson.get(`/category`).then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts = currentCategory === "All"
    ? products
    : products?.filter((product) =>
      product.categories.some((category) => category.name === currentCategory)
    );

  let sortedProducts = filteredProducts;

  switch (currentSort) {
    case "Preço: Maior - Menor":
      sortedProducts?.sort((a, b) =>
        parseFloat(b.price.toString().replace("R$", "")) -
        parseFloat(a.price.toString().replace("R$", ""))
      );
      break;
    case "Preço: Menor - Maior":
      sortedProducts?.sort((a, b) =>
        parseFloat(a.price.toString().replace("R$", "")) -
        parseFloat(b.price.toString().replace("R$", ""))
      );
      break;
    case "Mais Antigo":
      sortedProducts?.reverse();
      break;
    default:
      break;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="flex flex-wrap justify-between items-center mb-10">
          <div className="flex flex-wrap">
            {categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.name)}
                className={`${
                  category.name === currentCategory
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-800"
                } px-3 py-2 rounded mr-2 mb-2`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {currentSort}
              <ChevronDownIcon
                className="w-5 h-5 ml-2 -mr-1"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="dropdown-adjust origin-top-right absolute left-0 mt-2 w-auto max-w-screen-md sm:max-w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option}>
                      {({ active }) => (
                        <button
                          onClick={() => setCurrentSort(option)}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } block px-4 py-2 text-sm whitespace-nowrap`}
                        >
                          {option}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts?.slice(0, productCount).map((product) => (
            <a key={product.id} href={product.name} className="group">
              <img src={`${baseApiUrl}/images/${product.images[0].filename}`} />
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
        {productCount < (sortedProducts?.length || 0)
          ? (
            <button
              className="mt-6 px-4 py-2 bg-gray-800 text-white rounded"
              onClick={() => setProductCount(productCount + 10)}
            >
              Ver Mais
            </button>
          )
          : null}
      </div>
    </div>
  );
}
