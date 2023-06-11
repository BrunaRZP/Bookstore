import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Book1 from "../assets/book1.png";
import Book2 from "../assets/book2.png";
import Book3 from "../assets/book3.png";

const CheckinProdutov2 = () => {
    const [quantidade, setQuantidade] = useState(1);
    const [corSelecionada, setCorSelecionada] = useState('');
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState('');

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

    const cores = ['Azul', 'Vermelho', 'Verde', 'Amarelo'];
    const tamanhos = ['P', 'M', 'G', 'GG'];

    const handleCorSelecionada = (cor) => {
        setCorSelecionada(cor);
    };

    const handleTamanhoSelecionado = (tamanho) => {
        setTamanhoSelecionado(tamanho);
    };

    return (
        <div className="mx-auto w-full">
            <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                            <div className="flex flex-wrap -mx-4 justify-center lg:justify-start">
                                <div className="w-full lg:w-full px-4">
                                    <div className="flex flex-wrap -mx-4 mb-4 justify-center lg:justify-start">
                                        <div className="w-full sm:w-1/2 px-4 mb-4 flex justify-center sm:justify-start">
                                            <img
                                                className="w-5/6 sm:w-full object-cover"
                                                src={Book1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="w-full sm:w-1/2 px-4 mb-4 flex justify-center sm:justify-start">
                                            <img
                                                className="w-5/6 sm:w-full object-cover"
                                                src={Book2}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-4 justify-center lg:justify-start">
                                        <div className="w-full sm:w-1/2 px-4 mb-4 flex justify-center sm:justify-start">
                                            <img
                                                className="w-5/6 sm:w-full object-cover"
                                                src={Book3}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 px-4">
                            <div className="max-w-md mb-6">
                                <h2 className="mt-6 mb-4 text-5xl md:text-7xl lg:text-4xl font-heading font-medium">3 pelo preço de 2</h2>
                                <p className="flex items-center mb-6">
                                    <span className="mr-2 text-sm text-black font-medium">$</span>
                                    <span className="text-3xl text-black font-medium">49.99</span>
                                </p>
                                <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="flex flex-wrap -mx-2 mb-12">
                                <div className="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                                    <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                                        <button
                                            className="flex-grow sm:flex-grow-0 ml-4 mt-3 py-2 px-4 leading-8 font-heading font-medium tracking-tighter text-xl text-white text-center bg-black focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl"
                                            onClick={adicionarNoCarrinho}
                                            style={{ width: '200px' }}
                                        >
                                            Adicionar no carrinho
                                        </button>
                                        <div className="ml-4">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="m-6 ml-0 flex items-center justify-center sm:justify-start">
                                <a href="#">Free standard shipping</a>
                                <a href="" className="ml-5">Free Returns</a>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    )
}

export default CheckinProdutov2;
