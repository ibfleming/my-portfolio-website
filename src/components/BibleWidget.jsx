import verses from '../data/bibleverses.js';

function BibleWidget() {
   const randomVerse = verses[Math.floor(Math.random() * verses.length)];

   return (
      <div className='text-center'>
         <h1 className='text-lg'>
            <span className='font-bold'>&quot;</span>
            {randomVerse.verse}
            <span className='font-bold'>&quot;</span>
         </h1>
         <h2 className='italic text-md p-1.5 inline-block mt-6 rounded-md bg-gray-50'>
            {randomVerse.src}
         </h2>
      </div>
   );
}

export default BibleWidget;
