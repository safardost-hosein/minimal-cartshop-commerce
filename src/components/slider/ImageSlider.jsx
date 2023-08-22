import React,{ useState, useEffect }  from "react";

const ImageSlider = ({ dataSlides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
   setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % dataSlides.length);}, 10000);
  }, []);
  return (
    
    <div className="slide-show-container">
      <div className="img-container" style={{backgroundImage: `url(${dataSlides[currentIndex].url})`}} ></div>
      <div className="dots-Container">
        {dataSlides.map((slide,slideIndex) => (
          <div className="dots" key={slideIndex} onClick={() => goToSlide(slideIndex)}>●</div>
       
        ))}
      </div>
  
      </div>
     
  );
};

export default ImageSlider;
