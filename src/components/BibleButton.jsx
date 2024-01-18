import { useState } from 'react';
import { TbCross } from 'react-icons/tb';
import { FaTimes } from 'react-icons/fa';
import BibleWidget from './BibleWidget';

function BibleButton() {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className='inline-block fixed top-10 right-10'>
         <button
            onClick={handleClick}
            className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
         >
            <TbCross size={40} className='text-slate-800' />
         </button>
         {isOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-65 flex items-center justify-center'>
               <div className='relative bg-white rounded-lg shadow-xlg max-w-lg p-16 border-4 border-slate-800'>
                  <button
                     className='absolute top-[40%] right-[-65px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-500 ease-in-out hover:scale-110 text-red-400 border-2 border-slate-800'
                     onClick={() => setIsOpen(false)}
                  >
                     <FaTimes />
                  </button>
                  <BibleWidget />
               </div>
            </div>
         )}
      </div>
   );
}

export default BibleButton;
