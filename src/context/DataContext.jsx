import React, { createContext, useContext, useRef, useState } from 'react';
import kandangData from '../resources/dataKandang';


const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(kandangData);

    let dataLength = useRef(data.length);

    const handleAddData = (newData) => {
        const temp = {
            ...newData,
            id: dataLength.current + 1
        }
        dataLength.current += 1;
        setData([...data, temp]);
    }

    const handleEditData = (updatedData) => {
        const index = data.findIndex((obj) => obj.id === updatedData.id);
        if (index !== -1) {
            const newData = [...data];

            newData[index] = updatedData;

            setData(newData);
        }

    };

    const handleDeleteData = (nama) => {
        const index = data.findIndex((obj) => obj.nama === nama);

        if (index !== -1) {
            const newData = [...data];
            newData.splice(index, 1);
            setData(newData);
        }

    }




    return (
        <DataContext.Provider value={{ data, handleAddData, handleEditData, handleDeleteData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    return useContext(DataContext);
};
