import React, { Fragment, useRef, useState } from 'react'
import AddEditModal from './AddEditModal';
import KandangList from './KandangList';
import { useData } from '../context/DataContext';
// add done

const Kandang = () => {

    const { data } = useData();

    const [selectedKandang, setSelectedKandang] = useState(null);
    const modalRef = useRef(null);

    const handleOpenModal = (data = null) => {

        if (data) {
            setSelectedKandang(data);
        }
        modalRef.current?.showModal();

    }

    return (
        <>

            <div className="container mx-auto p-4">
                <div className='border rounded-md bg-white p-4'>
                    <div className="flex items-center justify-between">
                        <h5 className='font-bold text-lg'>Data Kandang</h5>
                        <button className='bg-green-600 text-white px-2 py-1.5 rounded font-semibold'
                            onClick={() => handleOpenModal()}
                        >+ <span className='sm:inline-block hidden'>Tambah Data</span></button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className='table table-zebra w-full'>
                            <thead>
                                <tr>
                                    <th className='flex items-center gap-1.5 py-4'>
                                        <label className='mt-0.5'>
                                            <input type="checkbox" className="w-3.5 h-3.5 border-slate-400" />
                                        </label>
                                        <p className='text-sm'>Kandang</p>
                                    </th>
                                    <th className='text-sm'>Luas</th>
                                    <th className='text-sm'>Jumlah Ternak</th>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((kandang) => (
                                    <KandangList data={kandang} key={kandang.nama} handleOpenModal={handleOpenModal} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <AddEditModal modalRef={modalRef} kandang={selectedKandang} setKandang={setSelectedKandang}/>

        </>
    )
}

export default Kandang