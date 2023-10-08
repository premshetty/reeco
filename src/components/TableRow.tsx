import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useState } from 'react';
import EditModal from './EditModal';
import UrgentModal from './UrgentModal';

export interface TableRowProps {
    product_name: string;
    brand: string;
    price: string;
    quantity: string;
    total: string;
    id?: number
    rowId?: number
}

export type Status = 'Missing-urgent' | 'Approved' | 'Missing' | 'Price Updated' | 'Quality Updated' | 'none';


const TableRow: React.FC<TableRowProps> = ({
    product_name,
    brand,
    price,
    quantity,
    total,
    rowId

}) => {


    const [status, setStatus] = useState<Status>('none');
    const [editOepn, seteditOepn] = useState<boolean>(false);
    const [urgentOpen, seturgentOpen] = useState<boolean>(false);



    let bgColor: string;

    switch (status) {
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
        if (status === 'none') {
            return null;
        }

        return (
            <button
                style={{ backgroundColor: bgColor }}
                className={`h-7 rounded-full text-white px-6 min-w-max`}
            >
                {status}
            </button>
        );
    };

    return (
        <tr style={{ boxShadow: '0px 2px 0px 0px #d1d5db' }} className='text-gray-500 font-normal border-gray-300 min-h-[40px] space-x-4'>
            <td className='max-w-[300px] text-sm'>
                <Image alt={product_name} src={'/Avocado.jpg'}
                    className='w-[30px!important] min-w-[30px]' height={30} width={30} />
            </td>
            <td className='max-w-[300px] text-sm w-[300px]'>{product_name}</td>
            <td className='max-w-[300px] text-sm'>{brand}</td>
            <td className='max-w-[300px] whitespace-nowrap text-sm'>{price}</td>
            <td className='max-w-[300px] text-sm'>{quantity}</td>
            <td className='max-w-[300px] text-sm'>{total}</td>
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
                brand={brand}
                price={price}
                product_name={product_name}
                quantity={quantity}
                total={total}
                setStatus={setStatus}
                status={status}

                rowId={rowId ?? 0}
                open={editOepn} setOpen={seteditOepn} />
            <UrgentModal setStatus={setStatus} open={urgentOpen} setOpen={seturgentOpen} />
        </tr>
    );
};

export default TableRow;
