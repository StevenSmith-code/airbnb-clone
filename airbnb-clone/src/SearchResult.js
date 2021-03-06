import React from 'react'
import './searchresult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
function SearchResult({
    img,
    location,
    title,
    desc,
    star,
    price,
}) {
    return (
        <div className = "searchResult">
            <img src = {img} alt = "" />
            <FavoriteBorderIcon
            className="searchResult__heart" />

            <div className = "searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>______</p>
                    <p>{desc}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon
                        className="searchResult__star"/>
                        <p><strong>{star}</strong></p>
                        <div className="searchResult__price">
                            <h2>{price}</h2>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchResult
