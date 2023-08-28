
const Unimplemented = () => {

  const div = {
    "backgroundColor": "#f1f1f1",
    "display": "flex",
    "alignItems": "center",
    "width": "1100px",
    // "maxWidth": "1100px",
    "height": "500px",
    "position": "absolute",
    "top": "100px",
    "right": "50px"
  }
  const p = {
    "width": "100%",
    "fontSize": "4rem",
    "textAlign": "center",
  }
  return (
    <div style={div}>
      <p style={p}>Unimplemented</p>
    </div>
  )
}

export default Unimplemented