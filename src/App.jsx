import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Kandang from './components/Kandang'


function App() {
  useEffect(() => {
    const checkOverflow = () => {
      document.querySelectorAll('*').forEach((el) => {
        if (el.offsetWidth > document.documentElement.offsetWidth) {
          console.log('Found the worst element ever: ', el);
        }
      });
    };
    checkOverflow();

  }, []);
  return (
    <div className='flex min-h-screen bg-slate-100/80'>

        <Sidebar />
        <div className='overflow-x-hidden w-full'>
          <Topbar />
          <Kandang />
        </div>
    </div>
  )
}

export default App
