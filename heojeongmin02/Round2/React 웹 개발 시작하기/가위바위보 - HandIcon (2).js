import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const HAND_IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon(props) {
  const src = HAND_IMAGES[props.value];
  const alt = `${props.value}`;
  return <img src={src} alt={alt} />;
}

export default HandIcon;
