import React from "react";
import Cards from "../cards/Cards";
import { Link } from "react-router-dom";
function Category({ dataCategory }) {
  
  return (
    
        
        <div className="category-container">
     {dataCategory.map((item,index)=>(
       <Link to={`${item.path}`}> <Cards key={index} cardsStyle='cards--category' style={{ backgroundImage: `url(${item.url})`}} childern={<span>{item.title}</span>}
        ></Cards></Link>
      ))

      }
     </div>
     
    
  );
}
export default Category;




