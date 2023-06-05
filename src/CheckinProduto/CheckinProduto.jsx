import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../components/Cart/slice';
import Product from '../types/product'; 
import Cart from '../components/Cart/slice';
import Book1 from "../../src/assets/book1.png";

const CheckinProduto = ({ product }) => {
    const [quantidade, setQuantidade] = useState(1);

    const incrementarQuantidade = () => {
        setQuantidade((prevQuantidade) => prevQuantidade + 1);
    };

    const decrementarQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade((prevQuantidade) => prevQuantidade - 1);
        }
    };

    const adicionarNoCarrinho = () => {
        toast.success('Produto adicionado ao carrinho!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    const comprarProduto = () => {
        toast.info('Produto comprado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addProductToCart(product));
    };
      
    return (
        <div className="mx-auto w-full">          
            <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 flex justify-center">
                            <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                                <div className="w-full lg:w-full px-4 mx-auto">
                                    <Carousel showThumbs={false} showStatus={false}>
                                        <div>
                                            <img
                                                className="mb-5 w-full object-cover carousel-image"
                                                src={Book1}
                                                alt=""
                                            />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-md mb-6">
                                <h2 className="mt-6 mb-4 text-5xl md:text-7xl lg:text-4xl font-heading font-medium">The Dragon's Quest</h2>
                                <p className="flex items-center mb-6">
                                    <span className="mr-2 text-sm text-black font-medium">$</span>
                                    <span className="text-3xl text-black font-medium">19,90</span>
                                </p>
                                <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             
                                <div className="flex flex-col items-center">
                                    <h4 className="mr-2 font-heading font-medium">Quantidade:</h4>
                                    <div className="border border-black rounded-lg">
                                        <button className="px-4 py-2 border-r border-black focus:outline-none" onClick={decrementarQuantidade}>
                                            -
                                        </button>
                                        <span className="px-4 py-2">{quantidade}</span>
                                        <button className="px-4 py-2 border-l border-black focus:outline-none" onClick={incrementarQuantidade}>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row -mx-2 mb-12">
                                <div className="w-full md:w-3/4 px-2 mb-2 md:mb-0">
                                    <button className="block w-full py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-black focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                        onClick={() => {
                                            adicionarNoCarrinho();
                                            dispatch(addProductToCart(product));
                                        }}
                                    >
                                        Adicionar ao Carrinho
                                    </button>
                                </div>
                                <div className="w-full md:w-1/4 px-2 mb-2 md:mb-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default CheckinProduto;
