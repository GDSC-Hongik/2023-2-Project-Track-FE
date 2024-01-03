import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMG = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg
}

function HandIcon({value}) {
  let img = IMG[value]
  
  return <img src={img} alt={value} />;
}

export default HandIcon;
