"use client"
import { useState } from "react";

const ReadMore = ({ children }) => { 
  const text = children; 
  const [isReadMore, setIsReadMore] = useState(true); 

  const toggleReadMore = () => { 
    setIsReadMore(!isReadMore); 

  }; 
  return ( 
    <p className="text"> 
      {isReadMore ? text.slice(0, 150) : text} 
      <span onClick={toggleReadMore} className="read-or-hide cursor-pointer"> 
        {isReadMore ? "...Read more" : " Show less"} 
      </span> 
    </p> 
  ); 
}; 
export default ReadMore 