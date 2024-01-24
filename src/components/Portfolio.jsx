import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItems';

function Portfolio() {
   return (
      <div
         className='container mx-auto w-11/12
      bg-gray-100 border-2 border-slate-800 rounded-lg p-8 shadow-xl'
      >
         <div className='text-3xl leading-10 text-slate-800 w-full text-center font-bold pb-6'>
            Portfolio
         </div>
         <div className='flex flex-col md:flex-row items-center justify-center mb-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
               {portfolio.map((project, index) => (
                  <PortfolioItem
                     key={index}
                     title={project.title}
                     stack={project.stack}
                     link={project.link}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default Portfolio;
