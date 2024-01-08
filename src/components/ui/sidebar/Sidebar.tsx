'use client';

import Link from 'next/link';
import React from 'react';

import { useUIStore } from '@/store';
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';
import clsx from 'clsx';


export const Sidebar = () => {

    const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
    const closeMenu = useUIStore( state => state.closeSideMenu );

    return (
        <div>
            {/* Background Black */}

            {
                isSideMenuOpen && (
                    <div
                        className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'
                    />
                )
            }

            {/* Blur */}

            {
                isSideMenuOpen && (
                    <div 
                        className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
                        onClick={ closeMenu }
                    />
                )
            }

            {/* Sidemenu */}
            <nav
                className={
                    clsx(
                        'fixed px-10 right-0 top-0 w-[395px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                        {
                            'translate-x-full': !isSideMenuOpen
                        }
                    )
                }
            >
                <IoCloseOutline 
                    size={ 20 }
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={ closeMenu }
                />

                {/* Input */}
                <div className='relative mt-14'>
                    <IoSearchOutline 
                        size={ 20 }
                        className='absolute top-2 left-2'
                    />
                    <input 
                        type='text'
                        placeholder='Buscar'
                        className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
                    />
                </div>

                {/* Opciones Menu */}
                <Link
                    href="/"
                    className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoPersonOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Perfil</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoTicketOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Ordenes</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoLogInOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Ingresar</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoLogOutOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Salir</span>
                </Link>

                {/* Line Separator */}
                <div className='w-full h-px my-10 bg-gray-100'/>

                <Link
                    href="/"
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoShirtOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Productos</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoTicketOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Ordenes</span>
                </Link>

                <Link
                    href="/"
                    className='flex items-center mt-2 p-2 hover:bg-gray-100 rounded transition-all'
                >
                    <IoPeopleOutline
                        size={ 20 }
                    />
                    <span className='ml-3 text-sm font-semibold'>Usuarios</span>
                </Link>

            </nav>
        </div>
    )
}
