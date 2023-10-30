import './index.scss';

import { CardInfo } from '../../types';

const Card = (props: CardInfo) => {
  return(
    <div className={"CardWrapper"}>
        <div>
          <div className={"CardPhotoSection"}>
            <img alt="Project Photo" src={props.repoURL} />
          </div>
          <div className={"CardBottomSection"}>
            <div>{props.ProjectTitle}</div>
            <div>{props.technologyUsedList}</div>
          </div>
        </div>
    </div>
  );
};

export default Card;