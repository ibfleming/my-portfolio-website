import ProfilePhotoSmall from '../img/portfolio-profile-picture-small.jpg';

/* eslint-disable react/no-unescaped-entities */
function Intro() {
   return (
      <div className='flex flex-col items-center justify-center mb-16'>
         <div className='flex items-center justify-center'>
            <img
               src={ProfilePhotoSmall}
               alt='Portfolio Photo'
               className='rounded-full h-48 w-48 mt-10 mr-8 border-4 border-slate-600'
            />
            <h1 className='font-Ysabeau italic font-semibold text-7xl text-slate-600 pt-16 pb-6'>
               Ian Byron Fleming
            </h1>
         </div>
         <div className='container mx-auto text-slate-700 text-center'>
            <h2 className='text-3xl font-Ysabeau font-normal tracking-wide text-center text-slate-800 my-10'>
               Software Engineer/Computer Science
            </h2>
            <div className='p-8 bg-gray-200 rounded-lg m-5'>
               <h2 className='text-3xl font-bold tracking-wider'>Welcome</h2>
               <div className='mx-36 pt-4'>
                  Senior at the University of Idaho pursuing a bachelor's degree
                  in Computer Science. With a diverse portfolio encompassing
                  software development, general applications, and web
                  development, I am eager to leverage my skills in a
                  professional setting. I am actively seeking job opportunities
                  or internships to further immerse myself in the industry and
                  enhance my value as a developer.
               </div>
            </div>
         </div>
      </div>
   );
}

export default Intro;
