import { Icon } from '@iconify/react/dist/iconify.js'

import React, { useEffect, useState } from 'react'
import TableRow, { TableRowProps } from './TableRow'
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, setProducts } from '@/redux/productSlice';

const TableComponent = () => {

    const dispatch = useDispatch();
    const productStore = useSelector(selectProducts);
    const [searchInput, setSearchInput] = useState<string>('');

    console.log(productStore)
    const fetchData = async () => {

        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        dispatch(setProducts(data?.products));

    };

    const filteredProducts = productStore.filter((product) =>
        product.product_name.toLowerCase().includes(searchInput.toLowerCase())
    );


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='px-20 py-2 mt-5 '>
            <div className='w-full rounded-xl border  border-gray-300 py-5 px-7 '>
                <div className='flex justify-between w-full'>
                    <div className='border flex w-[300px] h-9 p-1 items-center 
                    border-gray-300 rounded-full'>
                        <input type="text" placeholder='Serach...'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className='px-3 text-xs border-none outline-none h-full w-[260px]' />
                        <Icon color='#6b7280' className='h-full' icon="circum:search" />
                    </div>
                    <div className='flex gap-10'
                    >
                        <button className='h-9 rounded-full border-2 border-[#1e633f] 
              text-[#1e633f] px-6'>Add item</button>
                        <Icon icon="ph:printer-thin" color="#1e633f" height={36} />
                    </div>
                </div>
                <table className="border-spacing-7 border-separate">
                    <thead className=' ' >
                        <tr className='h-10   outline  rounded-t-[12px!important] outline-[#d1d5db!important]   '>
                            <th className=' text-gray-500 font-normal  text-start'></th>

                            <th className=' text-gray-500 font-normal  text-start whitespace-nowrap'>Product name</th>
                            <th className=' text-gray-500 font-normal  text-start whitespace-nowrap'>Brand</th>
                            <th className=' text-gray-500 font-normal  text-start whitespace-nowrap'>Price</th>
                            <th className=' text-gray-500 font-normal  text-start whitespace-nowrap'>Quality</th>
                            <th className=' text-gray-500 font-normal  text-start whitespace-nowrap'>Total</th>
                            <th className=' text-gray-500 font-normal  w-[150px] text-start whitespace-nowrap'>Status</th>
                            <th className=' text-gray-500 font-normal  text-start'></th>

                        </tr>
                    </thead>
                    <tbody className=''>

                        {
                            filteredProducts.length >= 1 ?
                                filteredProducts?.map((row: TableRowProps) => {
                                    return <TableRow
                                        brand={row.brand}
                                        key={row.id}
                                        price={row.price}
                                        product_name={row.product_name}
                                        quantity={row.quantity}
                                        total={row.total}
                                        rowId={row.id ?? 0}
                                        status={row.status}
                                    />
                                }) :
                                <p>No Data</p>
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableComponent