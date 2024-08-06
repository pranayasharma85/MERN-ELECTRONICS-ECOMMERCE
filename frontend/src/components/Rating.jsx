import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

function Rating({ value, text }) {
  return (
    <div className="rating">
      <span>
        {/* If the value is greater than or equal to 1, display a solid star (FaStar)
      If the value is greater than or equal to 0.5 but less than 1, display a half-star (FaStarHalfAlt)
      Otherwise, display a regular star (FaRegStar) */}
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-text">{text} Reviews</span>
    </div>
  );
}

export default Rating;
    