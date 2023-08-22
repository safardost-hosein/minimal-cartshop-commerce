import React, {  useEffect,useState } from "react";
import Button from "../button/Button";
import { Link} from "react-router-dom";
import toman from '../../assets/images/toman.svg';
import showmore from '../../assets/images/show-more.svg';
import Cards from "../cards/Cards";
import Cartcontext from '../context/cartItemContext';
import { useContext } from "react";



function Offers({ showMoreButton ,discountSection, data,NumberOfCards}){
    const[visible,setVisible]=useState(NumberOfCards);
    const [showButton, setShowButton] = useState(showMoreButton);
    const {setCartItem}=useContext(Cartcontext)
    const[screenWidth,SetScreenwith]=useState(window.innerWidth)
    const handleVisibleCards= ()=>{
      if(visible==12){
        setShowButton(false)
      }
      else if (screenWidth <600){

        setVisible(visible + 2);
      } else{

        setVisible(visible + 3);
      }
    }
    useEffect(()=>{ handleVisibleCards()},[screenWidth])

    const calculate=(price,discount)=>{
      return (price*((100-discount))/100).toLocaleString()
  }

  const addToCart = (e,item) => {
    e.preventDefault()
    setCartItem(previousCartItems => [...previousCartItems, item]);
    };
   
  return (
    <div className="offers-container">
      {data.slice(0,visible).map((item,index) => (
    <Link to={`/product${item.path}${item.id}`} ><Cards key={index} cardsStyle="cards--offer" 
          childern={
            <>
              <div className="img" style={{ backgroundImage: `url(${item.url})` }}></div>
              <div className="info" >
                <h3>{item.title}</h3>
                <span>{discountSection ? <s>{item.price.toLocaleString()}</s>:<>{item.price.toLocaleString()}</>}
                   <img src={toman}alt="toman" style={{display:"inline-block"}}/></span>
              </div>
                {discountSection && <div className="offer">
                <span>{calculate(item.price,item.discount)} <img src={toman}alt="toman" style={{display:"inline-block"}}/></span>
                <span className="discount">قیمت جدید با<small >{item.discount}%</small>تخفیف</span>
                </div>}
                <h3>{item.brand}</h3>
              <div className="btn">
              <Button buttonStyle="btn--primary"  onClick={(e) => addToCart(e, item)} ><i className="fa-solid fa-cart-shopping"></i>افزودن به سبد خرید</ Button>
              </div>
            </>
          }/></Link> 
      ))}

      {
        showButton && <div className="btn-container" >
        <Button buttonStyle="btn-cards" onClick={handleVisibleCards} ><img src={showmore} alt="" />نمایش بیشتر</ Button>
        </div>
      }
      
    </div>
  )
}
export default Offers;





