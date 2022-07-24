import './PlantStats.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import liquid from '../liquid.png';
import liquidActive from '../liquid.gif';

export const PlantStats: React.FC = () => {
  const { id } = useParams();
  const [ data, setData ] : [data: any, setData: any] = useState({});
  const [ water, setWater ] = useState(false);

  const mousedown = () => {
    setWater(true);
  };

  useEffect(() => {
    axios.get(`/plant/${id}`).then(response => {
      setData(response.data);
    });

    const mouseup = () => {
      setWater(false);
    };

    document.addEventListener('mouseup', mouseup);
    return () => {
      document.removeEventListener('mouseup', mouseup);
    }
  }, [id]);

  useEffect(() => {
    axios.post(`/water/${id}`, { on: water });
  }, [water, id]);

  let hours, apm;
  if(data.lastWatered) {
    hours = new Date(data.lastWatered).getHours();
    apm = hours >= 12 ? 'pm' : 'am';
  }

  return (
    <div>
      <div className="plant-stats">
        <div>   
          <img src={data.image} alt={data.name} />
        </div>
        <div className="stats">
          <div className="title">{data.name}</div>
          <div>
            <div>Water Level</div>
            <div className="value">{data.ml}ML</div>
          </div>
          <div>
            <div>Water Percent</div>
            <div className="value">{data.waterPercentage}%</div>
          </div>
          <div>
            <div>Last Watered</div>
            <div className="value">{hours}{apm}</div>
          </div>
        </div>
      </div>
      <div className="water-button">
        <h1>Hold down to water</h1>
        <input type="image" src={water ? liquidActive : liquid} alt="Hold down to water" draggable={false} onMouseDown={mousedown} />
      </div>
    </div>
  );
};

