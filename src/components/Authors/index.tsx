import React from 'react';
import Quote1 from '../../assets/Quote1.svg'
import Quote2 from '../../assets/Quote2.svg'

function Avaliations(){
  return (
    <div className='bg-bege-100 m-auto py-16'>
        <p className="text-h1 font-semibold text-center text-[#656A70] py-2">Autores em alta</p>
        <div className='w-10/12 m-auto gap-14 flex flex-col md:flex-row py-4'>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>"Aqueles que sonham de dia são conscientes de muitas coisas que escapam àqueles que sonham apenas à noite."</p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#222321] mt-10'>
                        Edgar Allan Poe
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>"A maior recompensa para o trabalho do homem não é o que se ganha com ele, mas o que ele se torna por meio dele." </p>
                <div className='flex justify-between'>
                    <p className='name text-[22px] text-[#222321] mt-10'>
                        Ayn Rand
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
            <div>
                <div className='py-6 w-[60px] md:w-full'><img src={Quote1} alt="" /></div>
                <p className='text-h4'>"A arte é uma forma de beleza que opera de longe - é como o vento que toca o rosto quando você fecha os olhos."</p>
                <div className='flex justify-between'>
                    <p className='text-[22px] text-[#222321] mt-10'>
                        Stephen King
                    </p>
                    <img className='w-[60px] md:w-[82px]' src={Quote2} alt="" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Avaliations;
