import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
   return (
      <div className='flex flex-col justify-center items-center'>
         <div className=''>
            {timeline.map((item, index) => (
               <TimelineItem key={index} date={item.date} title={item.title} />
            ))}
         </div>
      </div>
   );
}

export default Timeline;
