import React, {  useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import user from "../../assets/images/user.svg";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import cartImg from '../../assets/images/cart.png';
import Cartcontext from '../../components/context/cartItemContext';


function UserAccount() {
  const {cartItem, setCartItem} = useContext(Cartcontext);

  const removeFromSession = (index) => {
    const updatedCartItems = [...cartItem];
    updatedCartItems.splice(index, 1);
    setCartItem(updatedCartItems);
   

  };
  const totalAmount =cartItem.reduce((total, item) => total + item.price, 0);
  return (
    <>
     
      <Navbar />
     
      <div className="user-wrapper">
        <div className="orders">
          <h3>سفارشات</h3>
          {
          cartItem.length > 0 
          ?
          (
            <table>
            <thead>
              <tr>
                <th>قیمت</th>
                <th>برند</th>
                <th>نام محصول</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map((item, index) => (
                <tr key={index}>
                  <td >{item.price} </td>
                  <td>{item.brand}</td>
                  <td>{item.title}</td>
                  <td><Button buttonStyle="btn-cards"onClick={() => removeFromSession(index)}><i className="fa-solid fa-x"></i></Button></td>
                </tr>
              ))}
            </tbody>
          </table>
          ) 
          :
          (
           <div className="empty-cart">
            <img src={cartImg} alt='سبد خرید خالی' />
            <p>به نظر میاد چیزی سفارش ندادی</p>
            <Link to='/'><Button>برگشت به خانه</Button></Link>

           </div>
          )}
          {
             cartItem.length > 0 &&
             <div className="check-out">
             <span>{totalAmount} : مجموع کل</span>
             <div className="btn">
                 <Button>درگاه بانکی</Button>
                 <Link to='/'><Button>برگشت به خانه</Button></Link>
                 
                 </div> 
           </div>
          }
         

         
          
        </div>

        <div className="user-info">
          <img src={user} alt="user" />
          <p>
            <span>test</span> :نام کاربری
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default UserAccount;
