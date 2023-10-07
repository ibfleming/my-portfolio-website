/* eslint-disable react/prop-types */
function PortfolioItem({ title, stack, link }) {
   return (
      <div className='border-2 border-stone-300 bg-stone-800 bg-opacity-20 rounded-md overflow-hidden'>
         <a href={link}>
            <div className='w-full p-4'>
               <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold text-stone-300'>
                  {title}
               </h3>
               <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-md md:text-sm'>
                  {stack.map((item, index) => (
                     <span
                        key={index}
                        className='inline-block px-2 py-1 font-semibold border-2 border-stone-300 rounded-md text-stone-300'
                     >
                        {item}
                     </span>
                  ))}
               </p>
            </div>
         </a>
      </div>
   );
}

export default PortfolioItem;
