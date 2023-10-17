"use client"
import { useRef, useState } from "react";

const ReadMore = ({ children }) => { 
  const text = children; 
  const [isReadMore, setIsReadMore] = useState(true); 
  const divRef = useRef(null);

  const toggleReadMore = () => { 
    setIsReadMore(!isReadMore);
    if (!isReadMore && divRef.current) {
      window.scrollTo({ top: divRef.current.offsetTop -100, behavior: 'smooth' });
    }
  }; 
 
  return ( 
    <p className="text" ref={divRef}> 
      {isReadMore ? text.slice(0, 150) : text} 
      <span onClick={toggleReadMore} className="read-or-hide cursor-pointer"> 
        {isReadMore ? "...Read more" : " Show less"} 
      </span> 
    </p> 
  ); 
}; 
export default ReadMore 