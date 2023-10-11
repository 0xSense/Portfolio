import './index.scss';

const Card = () => {
  return(
    <div className={"CardWrapper"}>
      <div className={"CardPhotoSection"}>
        <img alt="Project Photo" />
      </div>
      <div className={"CardBottomSection"}>
        <div>Project Title</div>
        <div>Technologies</div> 
      </div>
    </div>
  );
};

export default Card;