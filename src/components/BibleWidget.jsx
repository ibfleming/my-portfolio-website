import { useState } from 'react';
import { TbCross as CrossButton } from 'react-icons/tb';
import { FaXmark as CloseButton } from 'react-icons/fa6';
import { FaAngleRight as NextButton } from 'react-icons/fa6';
import verses from '../data/bibleverses.js';

function BibleWidget() {
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
         <div className='absolute top-5 right-5' id='CrossWrapper'>
            <button
               onClick={handleClick}
               className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >
               <CrossButton size={40} className='text-slate-800' />
            </button>
         </div>
         {isOpen && (
            <>
               <div
                  className='fixed inset-0 w-screen h-screen bg-opacity-50 backdrop-filter backdrop-blur-md'
                  id='Backdrop'
               ></div>
               <div
                  className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  id='Main'
               >
                  <div
                     className='relative flex items-center'
                     id='WidgetWrapper'
                  >
                     <div
                        className='relative flex flex-col items-center bg-white rounded-lg shadow-xlg border-4 border-slate-800 justify-center p-10'
                        id='BibleContainer'
                     >
                        <h1 className='text-lg text-center'>
                           <span className='font-bold'>&quot;</span>
                           {verse.verse}
                           <span className='font-bold'>&quot;</span>
                        </h1>
                        <div className='mt-8'>
                           <h2 className='italic text-md p-1.5 rounded-md border-2 bg-gray-100 text-center'>
                              {verse.src}
                           </h2>
                        </div>
                     </div>
                     <div
                        className='flex flex-col justify-center items-start ml-4'
                        id='ButtonWrapper'
                     >
                        <button
                           className=' bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-500 ease-in-out hover:scale-110 text-red-400 border-2 border-slate-800'
                           onClick={() => setIsOpen(false)}
                        >
                           <CloseButton />
                        </button>
                        <button
                           className='bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-500 ease-in-out hover:scale-110 text-green-400 border-2 border-slate-800 mt-4'
                           onClick={newVerse}
                        >
                           <NextButton />
                        </button>
                     </div>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}

export default BibleWidget;
