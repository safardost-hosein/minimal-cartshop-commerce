import React from "react";
import Offers from '../../components/offers/Offers';
import { stationery } from "../../assets/data/dataVarious";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function Stationery(){

    return(
        <>
        <Navbar />
        <p className="titles">لوازم التحریر</p>
     <Offers showMoreButton={false} discountSection={false} data={stationery} NumberOfCards={12}/>
        <Footer />
        </>
    )
}
export default Stationery;