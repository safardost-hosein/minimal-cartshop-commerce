import React from "react";
function Cards({ key,cardsStyle ,style,childern}) {

  const STYLES = ['cards--category', 'cards--offer'];
    const checkCardsStyle = STYLES.includes(cardsStyle) ? cardsStyle : STYLES[0];
  return (
    <>
        <div key={key} className={`${checkCardsStyle}`} style={style} >{childern}</div>
      
    </>
  );
}
export default Cards;