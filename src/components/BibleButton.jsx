import { useState } from 'react';
import { TbCross } from 'react-icons/tb';
import { VscClose } from 'react-icons/vsc';
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
                     className='absolute top-0 right-0'
                     onClick={() => setIsOpen(false)}
                  >
                     <VscClose size={20} className=' text-gray-400 m-3' />
                  </button>
                  <BibleWidget />
               </div>
            </div>
         )}
      </div>
   );
}

export default BibleButton;
