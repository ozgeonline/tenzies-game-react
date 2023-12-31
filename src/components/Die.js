function Die(props){
  const styles = {
    backgroundColor: (props.isHeld === true) ? "#00CBA4" : "#fff",
    color: (props.isHeld === true) ? "#fff" : "#333"
  }
  
  return(
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  )
}
export default Die;