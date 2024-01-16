import { useState } from 'react';
import BibleWidget from './BibleWidget';

function BibleButton() {
   const [isOpen, setIsOpen] = useState(false);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   const handleOverlayClick = () => {
      setIsOpen(false);
   };

   const handleWidgetClick = (e) => {
      e.stopPropagation();
   };

   return (
      <div className='absolute top-5 right-5'>
         <button onClick={handleClick}>
            <svg height='50' width='30'>
               <line
                  x1='15'
                  y1='0'
                  x2='15'
                  y2='48'
                  style={{ stroke: '#1E293B', strokeWidth: 5 }}
               />
               <line
                  x1='0'
                  y1='15'
                  x2='30'
                  y2='15'
                  style={{ stroke: '#1E293B', strokeWidth: 5 }}
               />
            </svg>
         </button>
         {isOpen && (
            <div
               onClick={handleOverlayClick}
               className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-65 flex items-center justify-center'
            >
               <div
                  onClick={handleWidgetClick}
                  className='bg-gray-200 rounded-lg border-2 border-slate-800 shadow-lg p-8'
               >
                  <BibleWidget />
               </div>
            </div>
         )}
      </div>
   );
}

export default BibleButton;
