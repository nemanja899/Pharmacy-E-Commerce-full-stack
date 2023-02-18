import React from "react";
import Star from "./Star";
import { nanoid } from "nanoid";
const Rating = ({value,text})=>{

    const nums = new Array(5).fill(undefined).map((_, e) => e + 1);

    return (
        <div className="rating d-flex">
           {nums.map((num)=>{
           return(<Star key={nanoid()} value={value>=num? 1: value-num}/>)
           })}
        <span>{text && text}</span>
        </div>
    );
};

export default Rating;