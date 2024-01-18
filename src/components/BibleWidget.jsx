import { useState } from 'react';
import verses from '../data/bibleverses.js';
import { FaArrowRight } from 'react-icons/fa';

function BibleWidget() {
   const [verse, setVerse] = useState(
      verses[Math.floor(Math.random() * verses.length)]
   );

   const newVerse = () => {
      setVerse(verses[Math.floor(Math.random() * verses.length)]);
   };

   return (
      <div className='text-center'>
         <button
            onClick={newVerse}
            className='absolute top-[60%] right-[-65px] transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-500 ease-in-out hover:scale-110 text-green-400 border-2 border-slate-800'
         >
            <FaArrowRight />
         </button>
         <h1 className='text-lg'>
            <span className='font-bold'>&quot;</span>
            {verse.verse}
            <span className='font-bold'>&quot;</span>
         </h1>
         <h2 className='italic text-md p-1.5 inline-block mt-6 rounded-md border-2 bg-gray-100'>
            {verse.src}
         </h2>
      </div>
   );
}

export default BibleWidget;
