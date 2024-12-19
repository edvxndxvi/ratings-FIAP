import "./index.scss";
import fullStar from "../../assets/svg/fullstar.svg";

export interface Rating{
    rating: number
}

export function StarRating(props: Rating){
    const finalRate = Math.round(props.rating * 10) / 10 * 2;
    return (
        <div className="star-rating">
            <img src={fullStar} alt="Full Star Icon" />
            <p className="branco">{finalRate}<span className="cinza">/10</span></p>
        </div>
    )
}

export default StarRating;
