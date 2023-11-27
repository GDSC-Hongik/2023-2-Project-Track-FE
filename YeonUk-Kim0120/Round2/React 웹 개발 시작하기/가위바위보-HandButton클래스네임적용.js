import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

// className prop을 추가하고, img 태그에 적용해주세요
function HandIcon({ value, className}) {
  const src = IMAGES[value];
  return <img className = {className} src={src} alt={value} />;
}

export default HandIcon;
//!!!!!!
import HandIcon from './HandIcon';
import './HandButton.css';

// CSS 파일로 스타일을 적용해 주세요
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return (
    <button className = "HandButton" onClick={handleClick}>
      <HandIcon className = "HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;
