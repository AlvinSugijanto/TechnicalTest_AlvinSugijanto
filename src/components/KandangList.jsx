import React, { useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { useData } from '../context/DataContext';

const KandangList = ({ data, handleOpenModal }) => {


    const [toogleTooltip, setToogleTooltip] = useState(false);
    const { handleDeleteData } = useData();


    const handleToogleTooltip = () => {
        setToogleTooltip((e) => !e);
    }

    return (
        <>
            <tr>
                <td className='flex items-center gap-1.5 py-4'>
                    <label className='mt-0.5'>
                        <input type="checkbox" className="w-3.5 h-3.5 rounded-none border-slate-400" />
                    </label>
                    <p className='text-sm'>{data.nama}</p>
                </td>
                <td>{data.luas}</td>
                <td>{data.jumlah_ternak}</td>
                <td width={'5%'}>
                    <div className='relative' >
                        <HiDotsVertical className='hover:cursor-pointer' onClick={handleToogleTooltip} />
                        {toogleTooltip &&
                            <div className='border p-1.5 absolute z-10 bg-white min-w-32 right-3 -top-1'>
                                <p className='font-semibold hover:cursor-pointer hover:bg-slate-100 p-1.5'
                                    onClick={() => {
                                        handleOpenModal(data)
                                        handleToogleTooltip()
                                    }}
                                >Edit</p>
                                <hr className='my-2' />
                                <p className='text-red-500 font-semibold hover:cursor-pointer hover:bg-slate-100 p-1.5'
                                    onClick={() => {
                                        handleDeleteData(data.nama)
                                    }}>Delete</p>
                            </div>
                        }
                    </div>
                </td>
            </tr>


        </>
    )
}

export default KandangList