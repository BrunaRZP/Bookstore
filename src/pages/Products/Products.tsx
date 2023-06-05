import { useState, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import '../../styles/produtos.css';
import Book1 from '../../assets/book1.png';


const products = [

    {
        id: 1,
        name: 'The Dragons Quest',
        href: '../Produtos2',
        price: '$ 19,90',
        category: 'Ficção',
        Src: {Book1},
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Livro 2',
        href: '#',
        price: 'R$ 00,00',
        category: 'Categoria 2',
        imageSrc: 'https://img.freepik.com/fotos-premium/ilustracao-de-fundo-de-papel-quadrado-cinza_6344-55.jpg?w=740',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'livro 3',
        href: '#',
        price: 'R$ 00,00',
        category: 'Category 3',
        imageSrc: 'https://img.freepik.com/fotos-premium/ilustracao-de-fundo-de-papel-quadrado-cinza_6344-55.jpg?w=740',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
]

const categories = ['Todos', 'Ficção', 'Ação', 'Romance'];

const sortOptions = ['Preço: Maior - Menor', 'Preço: Menor - Maior', 'Recente', 'Mais Antigo'];

export default function Products() {
    const [currentCategory, setCurrentCategory] = useState('All');
    const [currentSort, setCurrentSort] = useState('Recente');
    const [productCount, setProductCount] = useState(10);

    const filteredProducts = currentCategory === 'All'
        ? products
        : products.filter(product => product.category === currentCategory);

    let sortedProducts = [...filteredProducts];

    switch (currentSort) {
        case 'Preço: Maior - Menor':
            sortedProducts.sort((a, b) => parseFloat(b.price.replace("R$", "")) - parseFloat(a.price.replace("R$", "")));
            break;
        case 'Preço: Menor - Maior':
            sortedProducts.sort((a, b) => parseFloat(a.price.replace("R$", "")) - parseFloat(b.price.replace("R$", "")));
            break;
        case 'Mais Antigo':
            sortedProducts.reverse();
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
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setCurrentCategory(category)}
                                className={`${category === currentCategory ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'} px-3 py-2 rounded mr-2 mb-2`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {currentSort}
                            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                                    {sortOptions.map(option => (
                                        <Menu.Item key={option}>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => setCurrentSort(option)}
                                                    className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
                    {sortedProducts.slice(0, productCount).map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
                {productCount < sortedProducts.length ? (
                    <button
                        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded"
                        onClick={() => setProductCount(productCount + 10)}
                    >
                        Ver Mais
                    </button>
                ) : null}
            </div>
        </div>
    )
}

