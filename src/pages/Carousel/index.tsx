import Card from '../../components/Card';
import { arrayOfProjectCards } from '../../constants';
import './index.scss';

const Carousel  = () => {
  return(
    <div className='CarouselWrapper'>
      {arrayOfProjectCards.map((data) => (
        <Card id={data.id} ProjectTitle={data.ProjectTitle} repoURL={data.repoURL} technologyUsedList={data.technologyUsedList} projectSummary={data.projectSummary} />
      ))}
    </div>
  );
};

export default Carousel;