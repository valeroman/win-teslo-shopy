import React from 'react';
import type { Category } from '@/interfaces';
import { notFound } from 'next/navigation';
import { initialData } from '@/seed/seed';
import { ProductGrid, Title } from '@/components';

interface Props {
  params: {
    id: Category,
  }
}

export default function({ params }: Props) {

  const { id } = params;
  const seedProducts = initialData.products;

  const labels: Record<Category, string> = {
    'men': 'hombres',
    'women': 'mujeres',
    'kid': 'niños',
    'unisex': 'todos'
  }

  /* if ( id === 'kid') {
    notFound()
  } */

  const products = seedProducts.filter( product => product.gender === id );

  return (
    <>
      <Title 
        title={`Artículos para ${ labels[id] }`}
        subtitle='Todos los productos'
        className='mb-2'
      />

      <ProductGrid products={ products } />
    </>
  )
}
