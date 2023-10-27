import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItems';

function Portfolio() {
   return (
      <div>
         <div className='text-3xl text-white font-semibold mb-12 text-center'>
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
