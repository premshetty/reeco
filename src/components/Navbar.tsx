import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full bg-[#1e633f] h-14 flex justify-between items-center text-white px-20'>
            <div className='flex gap-8 items-center '>
                <h2 className='text-xl font-bold '>Reeco</h2>
                <Link className='text-sm' href={'#'}>
                    Store
                </Link>
                <Link className='text-sm' href={'#'}>
                    Orders
                </Link>
                <Link className='text-sm' href={'#'}>
                    Analytics
                </Link>
            </div>
            <div className='flex gap-8 items-center '>
                <div className='relative'>

                    <Icon height={24} icon="ph:shopping-cart-light" hFlip={true} />
                    <div className='h-3 w-3 p-[1px] text-[8px] flex justify-center items-center rounded-full text-center bg-green-400 absolute -top-1 -left-1'>
                        10
                    </div>
                </div>
                <div className='flex  items-center gap-2 '>
                    <p className='text-sm'>Hello, James</p>
                    <Icon icon="icon-park-outline:down" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar