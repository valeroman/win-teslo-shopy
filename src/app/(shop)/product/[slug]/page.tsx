import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    slug: string;
  }
}

export default function ({ params }: Props) {

  const { slug } = params;
  const product = initialData.products.find(product => product.slug === slug);

  if (!product) {
    notFound();
  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>

      {/* Slideshow */}
      <div className='col-span-1 md:col-span-2'>

        {/* Desktop Slideshow */}
        <ProductSlideshow
          title={product.title} 
          images={product.images}
          className='hidden md:block' 
        />

        {/* Mobile Slideshow */}
        <ProductMobileSlideshow 
          title={product.title}
          images={product.images}
          className='block md:hidden'
        />
      </div>

      {/* Detalles */}
      <div className='col-span-1 px-5'>
        <h1 className={`${titleFont.className} antialiased font-semibold text-3xl`}>
          {product.title}
        </h1>

        <p className='text-lg mb-5 font-semibold'>
          ${product.price}
        </p>

        {/* Selector de tallas */}
        <SizeSelector 
          availableSizes={ product.sizes } 
          selectedSize={ product.sizes[2]}
        />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={ 3 } />

        {/* Boton */}
        <button className='btn-primary my-5 w-full'>
          Agregar al carrito
        </button>

        {/* Descripcion */}
        <h3 className='font-bold text-sm'>Descripción</h3>
        <p className='font-light mt-4'>
          { product.description }
        </p>
      </div>


    </div>
  )
}
