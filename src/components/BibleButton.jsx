import { useState } from 'react';
import { TbCross as CrossButton } from 'react-icons/tb';
import { FaXmark as CloseButton } from 'react-icons/fa6';
import { FaAngleRight as NextButton } from 'react-icons/fa6';
import verses from '../data/bibleverses.js';

function BibleButton() {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   const [verse, setVerse] = useState(
      verses[Math.floor(Math.random() * verses.length)]
   );

   const newVerse = () => {
      setVerse(verses[Math.floor(Math.random() * verses.length)]);
   };

   return (
      <div>
         <div className='' id='CrossWrapper'>
            <button
               onClick={handleClick}
               className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >
               <CrossButton size={40} className='text-slate-800' />
            </button>
         </div>
         {isOpen && (
            <div
               className='h-screen flex items-center justify-center bg-opacity-50 backdrop-filter backdrop-blur-md'
               id='Main'
            >
               <div className='grid grid-cols-2' id='WidgetWrapper'>
                  <div
                     className='relative flex justify-center'
                     id='BibleContainer'
                  >
                     <h1 className='text-lg'>
                        <span className='font-bold'>&quot;</span>
                        {verse.verse}
                        <span className='font-bold'>&quot;</span>
                     </h1>
                  </div>
                  <div
                     className='flex flex-col justify-center'
                     id='ButtonWrapper'
                  >
                     <button>
                        <CloseButton />
                     </button>
                     <button>
                        <NextButton />
                     </button>
                  </div>
               </div>

               {/* }
               <div className='relative bg-white rounded-lg shadow-xlg max-w-lg p-16 border-4 border-slate-800'>
                  <button
                     className='absolute top-[40%] right-[-65px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-500 ease-in-out hover:scale-110 text-red-400 border-2 border-slate-800'
                     onClick={() => setIsOpen(false)}
                  >
                     <CloseButton />
                  </button>
               </div>
         */}
            </div>
         )}
      </div>
   );
}

export default BibleButton;
