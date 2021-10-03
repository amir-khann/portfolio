import React from 'react'

const Button = ({btnText, btnType,padding}) => {

    let btnTypeClass = "";

  switch (btnType) {
    case "primary":
      btnTypeClass = "primary";
      break;
    case "outline":
      btnTypeClass = "outline";
      break;
      
    default:
      btnTypeClass = ""; 
  }
    return (
        <button className={`btn ${btnTypeClass}`} style={{padding:padding}}>
            {btnText}
        </button>
    )
}

export default Button
