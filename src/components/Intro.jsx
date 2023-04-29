/* eslint-disable react/no-unescaped-entities */
function Intro() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <h1 className='font-Ysabeau italic font-extralight text-6xl text-stone-300 pt-24 pb-6'>
            Ian Fleming
         </h1>
         <h2 className='font-Slabo text-xl text-stone-300 pb-6'>
            {`< Software Developer & Computer Scientist >`}
         </h2>
         <p className='w-[500px] text-left border-x-2 border-stone-300 rounded-lg text-sm text-stone-300 p-4'>
            I'm currently a senior at the University of Idaho seeking my
            bachelor's in Computer Science. I have come to invest in many
            software developing projects to general applications and web
            development. I'm in search of a job opportunity or internship that
            will allow me to learn more of the industry and to gain experience
            in order to increase my value as a developer.
         </p>
      </div>
   );
}

export default Intro;
