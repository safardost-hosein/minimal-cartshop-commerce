import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Offers from "../../components/offers/Offers";
import dtaBestSelling from '../../assets/data/dtaBestSelling';


function PageBestSelling(){

  

    return(
        <>
        <Navbar />
        <p className="titles"> پرفروش ترین ها</p>
        <Offers showMoreButton={false} discountSection={false} data={dtaBestSelling} NumberOfCards={12}/>
        <Footer />
        </>
    )

}
export default PageBestSelling;