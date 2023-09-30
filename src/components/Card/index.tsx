import * as react from 'react';
import './index.scss'

const Card = () => {
  return(
    <div className={"CardWrapper"}>
      <div>Card image here</div>
      <div>
        <title>Project name</title>
        <div>
          github repo icon + the link
        </div>
        <div>
          Hosted Website
        </div>
      </div>
    </div>
  )
}

export default Card;