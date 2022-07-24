import './Plant.css';
import { Link } from 'react-router-dom';

interface Props {
  code: string;
  name: string;
  image: string;
}

export const Plant: React.FC<Props> = ({ code, name, image }) => {
  return (
    <Link className="plant" to={code}>
      <figure>
        <img width="300" height="240" src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  );
};

