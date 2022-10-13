import s from './Star.module.css';
import { GrStar } from 'react-icons/gr';
import { useState } from 'react';

function Star() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className={s.wrapper}>
      <div className={s.stars__container}>
        {[...Array(5)].map((index, i) => {
          const rantingValue = i + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={rantingValue}
                onClick={() => setRating(rantingValue)}
              />
              <GrStar
                className={s.star}
                size={9}
                color={
                  rantingValue <= (hover || rating) ? '#6299FF' : '#E7EDFA'
                }
                onMouseEnter={() => setHover(rantingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <p className={s.reviews}>| {rating} Reviews</p>
    </div>
  );
}

export default Star;
