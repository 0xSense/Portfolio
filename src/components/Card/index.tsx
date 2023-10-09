import * as React from 'react';
import CardPhoto from '../../assets/pexels-karolina-grabowska-resized.png';
import './index.scss';

const Card = () => {
  return(
    <div className={"CardWrapper"}>
      <div className={"CardPhotoSection"}>
        <img src={CardPhoto} alt="Card Photo" />
      </div>
      <div className={"CardBottomSection"}>
        Summary Text
      </div>
    </div>
  );
};

export default Card;