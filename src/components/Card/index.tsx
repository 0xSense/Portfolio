import CardPhoto from '../../assets/pexels-karolina-grabowska-resized.png';
import './index.scss';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Card = ({ title, url }) => {
  return (
    <div className={"CardWrapper"}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={"CardPhotoSection"}>
        <img src={CardPhoto} alt="Card Photo" />
      </div>
      <div className={"CardTextSection"}>
        {title}
      </div>
      <button className={"CardButton"}>Learn More</button>
      </a>
    </div>
  );
};

// Add prop type validation
Card.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a string and required
  url: PropTypes.string.isRequired
};

export default Card;