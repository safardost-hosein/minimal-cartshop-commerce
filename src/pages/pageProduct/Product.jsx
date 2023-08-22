import React, { useContext } from "react";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useParams } from "react-router-dom";
import {dataA} from '../../assets/data/dataVarious';
import Cards from "../../components/cards/Cards";
import Button from "../../components/button/Button";
import toman from '../../assets/images/toman.svg';
import Cartcontext from '../../components/context/cartItemContext'

function Product(){
  const {setCartItem}=useContext(Cartcontext)

    const params = useParams();
    const selectdCategory=params.category;
    const selectdItem=params.productId;
    const categoryData = {
        'furniture': dataA[0],
        'laptop': dataA[1],
        'book': dataA[2],
        'mobile': dataA[3],
        'stationery': dataA[4],
        'clothe': dataA[5]
      };
      const dataB =categoryData[selectdCategory][parseInt(selectdItem) - 1];
      const addToCart = (e,item) => {
        setCartItem(previousCartItems => [...previousCartItems, item]);
        };
    
        return (
            <>
                <Navbar />       
            <div className="product-wrapper">
           
              {
                <Cards  cardsStyle="cards--offer" 
                  childern={
                    <>
                    <div className="cart-wrapper">
                    <div className="img-container" style={{ backgroundImage:`url(${dataB.url})`}}></div>
                      <div className="description">
                            <h3>{dataB.description}</h3>
                      </div>
                      </div>
                      <div className="detail-info">
                      <h3> <span>: قیمت </span><br/><small> <img src={toman}alt="toman" style={{display:"inline-block"}}/>{(dataB.price).toLocaleString()}</small></h3>
                      <h3> <span>: مدل </span><br/>{dataB.brand}</h3>
                      <h3> <span>:نام محصول </span><br/>{dataB.title}</h3>
                      
                      </div>
                      <div className="btns">
                        <Button onClick={()=>addToCart(dataB)}><i className="fa-solid fa-cart-shopping" ></i>  افزودن به سبد خرید</Button>
                      </div>
                      
                    </>
                  }/> 
              }
        
             
       
            </div>
            <Footer />
            </>

          )

     
      

   
}

export default Product;