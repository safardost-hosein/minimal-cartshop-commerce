import React from "react";
import Offers from '../../components/offers/Offers';
import { clothe } from "../../assets/data/dataVarious";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Clothe(){
    return(
        <>
        <Navbar />
        <p className="titles">لباس</p>
     <Offers showMoreButton={false} discountSection={false}  data={clothe} NumberOfCards={12}/>
        <Footer />
        </>
    )
}
export default Clothe;
