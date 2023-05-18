/* eslint-disable react/prop-types */
function TimelineItem({ date, title }) {
   return (
      <div className='flex items-center m-4 text-white'>
         <div className='flex justify-center items-center w-14 h-14 rounded-3xl bg-white'>
            <span className='text-black font-bold'>{date}</span>
         </div>
         <div className='z-0 relative border-l-2 border-white h-14 right-7 top-10'></div>
         <div className='ml-4'>
            <span>{title}</span>
         </div>
      </div>
   );
}

export default TimelineItem;
