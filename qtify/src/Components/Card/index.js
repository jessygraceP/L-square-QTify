import "./Card.css";
import {Tooltip} from '@mui/material';
const Card = ({
  imgSrc,
  followersCount,
  label,
  numOfSongs,
}) => {
  return (
    <Tooltip title = {numOfSongs?`${numOfSongs} songs`: ""} placement="top" arrow>
    <div className="card-wrapper">
        <div className="card">
<div className="card-img-frame">

<img className="card-img" src={imgSrc}/>
</div>

<div className="card-content">
    <span className="card-content-pill">

{followersCount}follows


    </span>


</div>
</div>


<p className="card-label">{label}</p>
    </div>
    </Tooltip>
  )
}
export default Card;