import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import EditModal from './EditModal';
import UrgentModal from './UrgentModal';
import { useDispatch, useSelector } from 'react-redux';
import { Product, selectProducts, setProducts } from '@/redux/productSlice';


export type Status = 'Missing-urgent' | 'Approved' | 'Missing' | 'Price Updated' | 'Quality Updated' | 'none';


const TableRow = ({ rowId }: { rowId: number }) => {


    const [editOepn, seteditOepn] = useState<boolean>(false);
    const [urgentOpen, seturgentOpen] = useState<boolean>(false);
    const productStore = useSelector(selectProducts);

    const [currentRow, setCurrentRow] = useState<Product>({
        brand: '',
        price: '',
        product_name: '',
        quantity: '',
        total: '',
        id: 0,
        status: 'none'
    });
    const dispatch = useDispatch();

    const setStatus = (status: Status) => {
        const updatedProducts = productStore.map((product) =>
            product.id === rowId ? { ...product, status: status } : product
        );

        dispatch(setProducts(updatedProducts));
    }
    useEffect(() => {
        const filteredProduct = productStore.find((product) => product.id === rowId) ?? currentRow;
        setCurrentRow(filteredProduct);
    }, [productStore, rowId]);


    let bgColor: string;

    switch (currentRow?.status) {
        case 'Missing-urgent':
            bgColor = '#d32f2f';
            break;
        case 'Missing':
        case 'Price Updated':
        case 'Quality Updated':
            bgColor = '#f44336';
            break;
        default:
            bgColor = '#4caf50';
    }

    const StatusPill = () => {
        if (currentRow?.status === 'none') {
            return null;
        }

        return (
            <button
                style={{ backgroundColor: bgColor }}
                className={`h-7 rounded-full text-white px-6 min-w-max`}
            >
                {currentRow?.status}
            </button>
        );
    };

    return (
        <tr style={{ boxShadow: '0px 2px 0px 0px #d1d5db' }} className='text-gray-500 font-normal border-gray-300 min-h-[40px] space-x-4'>
            <td className='max-w-[300px] text-sm'>
                <Image alt={currentRow?.product_name} src={'/Avocado.jpg'}
                    className='w-[30px!important] min-w-[30px]' height={30} width={30} />
            </td>
            <td className='max-w-[300px] text-sm w-[300px]'>{currentRow?.product_name}</td>
            <td className='max-w-[300px] text-sm w-[150px]'>{currentRow?.brand}</td>
            <td className='max-w-[300px] whitespace-nowrap text-sm'>{`${currentRow?.price} / 6*1LB`}</td>
            <td className='max-w-[300px] text-sm whitespace-nowrap'>{`${currentRow?.quantity} x6*1LB`}</td>
            <td className='max-w-[300px] text-sm'>{currentRow?.total}</td>
            <td className='max-w-[300px] text-sm '>
                <StatusPill />
            </td>
            <td className='max-w-[300px]'>
                <div className='flex items-center gap-5'>
                    <Icon
                        className={`hover:text-green-500 cursor-pointer`}
                        onClick={() => setStatus('Approved')}
                        color={status !== 'none' ? bgColor : ''}
                        icon='teenyicons:tick-solid'
                        height={24}
                    />
                    <Icon
                        onClick={() => seturgentOpen(true)}
                        className='hover:text-red-500 cursor-pointer' icon='ph:x-light' height={24} />
                    <p className='cursor-pointer' onClick={() => seteditOepn(true)}>EDIT</p>
                </div>
            </td>
            <EditModal
                rowId={rowId ?? 0}
                open={editOepn} setOpen={seteditOepn} />
            <UrgentModal setStatus={setStatus} open={urgentOpen} setOpen={seturgentOpen} />
        </tr>
    );
};

export default TableRow;
