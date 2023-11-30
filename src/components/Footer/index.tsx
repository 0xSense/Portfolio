import './index.scss';
import Github from '../../assets/icons8-github.svg';
import Linkedin from '../../assets/icons8-linkedin.svg';
import Twitter from '../../assets/icons8-twitter.svg';

const Footer = () => {
  return(
    <div className={"FooterWrapper"}>
      <img src={Github} />
      <img src={Linkedin} />
      <img src={Twitter} />
    </div>
  );
};

export default Footer;