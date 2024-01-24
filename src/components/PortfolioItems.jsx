/* eslint-disable react/prop-types */
function PortfolioItem({ title, stack, link }) {
   return (
      <div className='border-2 border-slate-800 rounded-md overflow-hidden bg-white shadow-md'>
         <a href={link}>
            <div className='w-full p-4'>
               <h3 className='text-lg md:text-xl mb-3 md:mb-4 font-semibold text-slate-800'>
                  {title}
               </h3>
               <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-md md:text-sm'>
                  {stack.map((item, index) => (
                     <span
                        key={index}
                        className='inline-block px-2 py-1 font-semibold border-2 border-slate-700 rounded-md text-slate-700 '
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
