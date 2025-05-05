import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

const Stars = ({stars, starsCount} : {stars: number, starsCount: number}) => {
    const fullStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
            ))}
            <span className="text-sm text-gray-500 ml-1">({starsCount})</span>
        </div>
    );
};

export default Stars;