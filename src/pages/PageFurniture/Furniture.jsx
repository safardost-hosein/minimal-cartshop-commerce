import React from "react";
import Offers from '../../components/offers/Offers';
import { furniture } from "../../assets/data/dataVarious";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function Laptop(){

    return(
        <>
        <Navbar />
        <p className="titles">لوازم خانگی</p>
     <Offers showMoreButton={false} discountSection={false} data={furniture} NumberOfCards={12}/>
        <Footer />
        </>
    )
}
export default Laptop;