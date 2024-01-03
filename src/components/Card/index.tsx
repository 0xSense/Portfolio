import CardPhoto from '../../assets/pexels-karolina-grabowska-resized.png';
import './index.scss';
import React from 'react';

const Card = () => {
  
  return(
    <div className={"CardWrapper"}>
      <div className={"CardPhotoSection"}>
        <img src={CardPhoto} alt="Card Photo" />
      </div>
      <div className={"CardTextSection"}>
        Repo Name
      </div>
      <button className={"CardButton"}>Learn More</button>
    </div>
  );
};

export default Card;