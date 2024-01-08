import { titleFont } from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse w-full h-[650px] md:flex-row justify-center items-center align-middle'>

      <div className='text-center md:text-justify mt-10 p-5'>
        <h2 className={`${ titleFont } antialiased text-9xl`}>404</h2>
        <p className='font-semibold text-2xl mt-10'>¡Vaya! Lo sentimos.</p>
        <p className='font-light mt-5'>
          <span>Vuelva a conectarse a la página </span>
          <Link
            href="/"
            className='fornt-normal hover:underline transition-all'
          >
             inicial 
          </Link>
          <span> de Starman</span>
        </p>
        <p className='font-light'>
          <span> o visite nuestra página de preguntas frecuentes</span>
        </p>
        <p className='font-light'>
          <span>para obtener ayuda.</span>
        </p>
      </div>

      <div className='hidden md:block'>
        <Image 
          src="/imgs/starman_750x750.png"
          alt='Starman'
          className='p-5 sm:p-0'
          width={ 550 }
          height={ 550 }
        />
      </div>

    </div>
  )
}
