import ProfilePhotoSmall from '../img/portfolio-profile-picture-small.jpg';

/* eslint-disable react/no-unescaped-entities */
function Intro() {
   return (
      <div className='container mx-auto my-8 mt-16'>
         <div className='flex flex-row space-x-12 items-center justify-center'>
            <img
               src={ProfilePhotoSmall}
               alt='Portfolio Photo'
               className='rounded-full h-48 w-48 border-4 border-slate-800'
            />
            <h1 className='font-Ysabeau italic font-semibold text-7xl text-slate-800'>
               Ian Byron Fleming
            </h1>
         </div>
         <div className='flex flex-row items-center justify-center my-8'>
            <h2 className='bg-gray-200 rounded-md p-4 text-2xl font-Ysabeau border-2 border-slate-800 text-slate-800 '>
               Software Engineer / Computer Science
            </h2>
         </div>
         <div className='bg-gray-200 rounded-lg text-center p-8 border-2 border-slate-800'>
            <div className='flex flex-col items-center justify-center'>
               <h1 className='text-3xl text-center font-bold italic pb-4 text-slate-800'>
                  Welcome to my portfolio!
               </h1>
               <div className='text-md w-1/2 self-center text-left text-slate-700 text-lg'>
                  I am a senior at the University of Idaho pursuing a bachelor's
                  degree in Computer Science. With a diverse portfolio
                  encompassing software development, general applications, and
                  web development, I am eager to leverage my skills in a
                  professional setting. I am actively seeking job opportunities
                  or internships to further immerse myself in the industry and
                  enhance my value as a developer and creator.
               </div>
            </div>
         </div>
      </div>
   );
}

export default Intro;
