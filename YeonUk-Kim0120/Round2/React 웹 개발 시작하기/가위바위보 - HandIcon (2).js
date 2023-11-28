import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';
let img;
function HandIcon(prop) {
  if (prop.value === "rock") img = rockImg;
  else if (prop.value === "scissor") img = scissorImg;
  else img = paperImg;
  return <img src={img} alt={prop.value} />;
}

export default HandIcon;
