function Footer() {
   return (
      <div className='container mx-auto'>
         <div className='p-5 bg-gray-200 rounded-lg py-12 m-5'>
            <div className='flex flex-col '>
               <h3 className='text-3xl leading-10 text-slate-700 w-full text-center font-bold'>
                  Contact Me
               </h3>
               <div className='text-base text-slate-800 w-full  md:w-2/4 self-center text-center lg:pt-4'>
                  Thanks for scrolling this far! Feel free to send me a message
                  if you have any questions or concerns. Business inquiries
                  would be wonderful.
               </div>
               <div className='text-base text-slate-800 w-full md:w-2/4 self-center text-center lg:pt-4'>
                  <form
                     className='flex flex-col items-start'
                     action='mailto:your-email@example.com'
                     method='post'
                     encType='text/plain'
                  >
                     <label className='text-slate-700 mt-1' htmlFor='name'>
                        Name:
                     </label>
                     <input
                        className='border-2 border-gray-300 rounded px-3 py-2 mt-1 mb-5 text-sm w-full'
                        type='text'
                        id='name'
                        name='name'
                        required
                     />

                     <label className='text-slate-700 mt-1' htmlFor='email'>
                        Email:
                     </label>
                     <input
                        className='border-2 border-gray-300 rounded px-3 py-2 mt-1 mb-5 text-sm w-full'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='example@example.com'
                        required
                     />

                     <label className='text-slate-700 mt-1' htmlFor='message'>
                        Message:
                     </label>
                     <textarea
                        className='border-2 border-gray-300 rounded px-3 py-2 mt-1 mb-5 text-sm w-full'
                        id='message'
                        name='message'
                        required
                     ></textarea>

                     <input
                        className='bg-gradient-to-tr from-slate-500 to-blue-500 hover:from-blue-500 hover:to-slate-500 text-white font-bold py-2 px-4 rounded self-center cursor-pointer'
                        type='submit'
                        value='Send'
                     />
                  </form>
               </div>
            </div>
            <div className='font-bold text-slate-700 content-center'>
               <ul className='flex flex-row space-x-6 justify-center pt-10'>
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

            <div className='flex flex-row justify-center text-xs text-slate-400 pt-10'>
               Copyright &copy; 2024 Ian B. Fleming
            </div>
            {/* <div className=''>
               <ul className='flex flex-row space-x-4 justify-center'>
                  <li>
                     <a href='#' target='_blank' rel='nofollow'></a>
                  </li>
                  <li>
                     <a href='#' target='_blank' rel='nofollow'></a>
                  </li>
                  <li>
                     <a href='#' target='_blank' rel='nofollow'></a>
                  </li>
                  <li>
                     <a href='#' target='_blank' rel='nofollow'></a>
                  </li>
               </ul>
            </div> */}
         </div>
      </div>
   );
}

export default Footer;
