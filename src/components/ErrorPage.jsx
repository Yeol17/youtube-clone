import { useEffect, useState } from "react";


const ErrorPage = ({
  navWidth,
  vWidth
}) => {
  
  const p = {
    "width": "100%",
    "fontSize": "4rem",
  }
  const div = {
    "width": `${vWidth - navWidth}px`,
    "display": "flex",
    "flexDirection": "column",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "90vh",
    "position": "absolute",
    "top": "56px",
    "left": `${navWidth}px`
  }
  

  return (
    <div style={div}>
      <p style={p}>404</p>
      <p>Page not found</p>
    </div>
  )
}

export default ErrorPage