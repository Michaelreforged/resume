import React from "react";

const Card = (props) => {
  return(
  <div style={{...styles.container, flex:props.flex}}>
    <h1>{props.header}</h1>
    {props.children}
  </div>)
}

const styles = {
  header: {
    color:"#444"
  },

  container:{
    margin:"12px",
    padding: "12px",
    borderRadius: "4px",
    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
}
}

export default Card