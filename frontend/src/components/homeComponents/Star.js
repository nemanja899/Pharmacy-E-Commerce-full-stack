import React from "react";

const Star=({value})=>{
    return (
        <div>
             <i className={
                value >= 1
                ? "fas fa-star" :
                value >=-0.5 ?
                "fas fa-star-half-alt" :
                "far fa-star"
                +" star"
            }>
            </i>
        </div>
    );

};


export default Star;