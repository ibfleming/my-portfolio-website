function Footer() {
   return (
      <div className='container mx-auto mb-8'>
         <div className=' bg-gray-200 rounded-lg p-8'>
            <div className='flex flex-col'>
               <h3 className='text-3xl leading-10 text-slate-800 w-full text-center font-bold pb-4'>
                  Contact Me!
               </h3>
               <div className='text-base text-slate-700 w-1/2 self-center text-center pb-4'>
                  Thanks for scrolling this far! Feel free to send me a message
                  if you have any questions or concerns. Business inquiries
                  would be wonderful.
               </div>
               <div className='text-base text-slate-800 w-full md:w-2/4 self-center text-center'>
                  <form
                     className='flex flex-col items-start'
                     action='mailto:your-email@example.com'
                     method='post'
                     encType='text/plain'
                  >
                     <label className='text-slate-800' htmlFor='name'>
                        Name:
                     </label>
                     <input
                        className='border-2 border-gray-300 rounded px-3 py-2 text-sm w-full mb-4'
                        type='text'
                        id='name'
                        name='name'
                        required
                     />

                     <label className='text-slate-800 mt-1' htmlFor='email'>
                        Email:
                     </label>
                     <input
                        className='border-2 border-gray-300 rounded px-3 py-2 text-sm w-full mb-4'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='example@example.com'
                        required
                     />

                     <label className='text-slate-800' htmlFor='message'>
                        Message:
                     </label>
                     <textarea
                        className='border-2 border-gray-300 rounded px-3 py-2 text-sm w-full'
                        id='message'
                        name='message'
                        required
                     ></textarea>

                     <input
                        className='bg-gradient-to-tr from-slate-500 to-blue-500 hover:from-blue-500 hover:to-slate-500 text-white font-bold py-2 px-4 rounded self-center cursor-pointer my-8'
                        type='submit'
                        value='Send'
                     />
                  </form>
               </div>
            </div>
            <div className='font-bold text-slate-700 content-center mb-4'>
               <ul className='flex flex-row space-x-6 justify-center'>
                  <li>
                     <a href='#' className='hover:underline cursor-pointer'>
                        Home
                     </a>
                  </li>
                  <li>
                     <a href='#' className='hover:underline cursor-pointer'>
                        About
                     </a>
                  </li>
                  <li>
                     <a href='#' className='hover:underline cursor-pointer'>
                        Portfolio
                     </a>
                  </li>
                  <li>
                     <a href='#' className='hover:underline cursor-pointer'>
                        Contact
                     </a>
                  </li>
               </ul>
            </div>

            <div className='flex flex-row justify-center text-xs text-slate-400'>
               Copyright &copy; 2024 Ian B. Fleming | Created with React
            </div>
         </div>
      </div>
   );
}

export default Footer;
