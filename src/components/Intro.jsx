/* eslint-disable react/no-unescaped-entities */
function Intro() {
   return (
      <div className='flex flex-col items-center justify-center mb-16'>
         <div className='flex items-center justify-center'>
            <img
               src='https://picsum.photos/200/200'
               alt='Portfolio Photo'
               className='rounded-full h-32 w-32 mt-10 mr-8 border-4 border-stone-300'
            />
            <h1 className='font-Ysabeau italic font-extralight text-7xl text-stone-300 pt-16 pb-6'>
               Ian B. Fleming
            </h1>
         </div>
         <h2 className='font-Slabo text-2xl text-stone-300 pb-6 tracking-wider'>
            Software Engineer
         </h2>
         <p className='font-Montserrat w-[600px] text-center border-x-4 border-stone-300 rounded-lg text-md text-stone-300 p-4'>
            I am a senior at the University of Idaho pursuing a bachelor's
            degree in Computer Science. With a diverse portfolio encompassing
            software development, general applications, and web development, I
            am eager to leverage my skills in a professional setting. I am
            actively seeking job opportunities or internships to further immerse
            myself in the industry and enhance my value as a developer.
         </p>
      </div>
   );
}

export default Intro;
