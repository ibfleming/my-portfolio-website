import resume from '../static/Resume-IanFleming-2023.pdf';

function Resume() {
   return (
      <div className='text-center mb-12'>
         <a
            href={resume}
            className='text-3xl text-white underline'
            target='_blank'
            rel='noopener noreferrer'
         >
            Resume
         </a>
      </div>
   );
}

export default Resume;
