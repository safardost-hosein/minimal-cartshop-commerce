import React from "react";
import Offers from '../../components/offers/Offers';
import { laptop } from "../../assets/data/dataVarious";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function Laptop(){

    return(
        <>
        <Navbar />
        <p className="titles">لپ تاپ</p>
     <Offers showMoreButton={false} discountSection={false} data={laptop} NumberOfCards={12}/>
        <Footer />
        </>
    )
}
export default Laptop;