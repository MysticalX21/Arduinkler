import './Plants.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Plant } from './Plant';

interface PlantData {
  id: string;
  name: string;
  image: string;
}

export const Plants: React.FC = () => {
  const [ data, setData ] : [data: any, setData: any] = useState([]);

  useEffect(() => {
    axios.get('/plants').then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="plants">
      {data.map(( { id, name, image } : PlantData ) =>
        <Plant key={id} code={id} name={name} image={image} />
      )}
    </div>
  );
};

