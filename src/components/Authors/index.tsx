import React from 'react';
import Quote1 from '../../assets/Quote1.svg'
import Quote2 from '../../assets/Quote2.svg'

function Avaliations(){
  return (
    <div className='bg-bege-100 m-auto py-16'>
        <p className="text-h1 font-semibold text-center text-[#656A70] py-2">Comentários de quem ja comprou</p>
        <div className='w-10/12 m-auto gap-14 flex flex-col md:flex-row py-4'>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>"Livro chegou muito rápido, veio bem embalado e de otima qualidade!"</p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#222321] mt-10'>
                        Edgar Allan
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Estava buscando um site confiável para fazer minhas compras de livros e encontrei a BookStore, amei, virei cliente! </p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#222321] mt-10'>
                        Ayn Rand
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>Comprei meu livro na semana passada e chegou em menos de uma semana. Muito bem embalado e chegou certinhooo =D</p>
                <div className='flex justify-between'>
                    <p className='text-[22px] text-[#222321] mt-10'>
                        Stephany Ruy
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Avaliations;
