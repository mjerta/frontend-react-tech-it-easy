import PropTypes from "prop-types";


function TestComponent({object : { name: firstLayerName, nextLayer : { name : secondLayerName}}}) {
  // Below would be a way if the object will just be in parameter without destructing it
  // const {name: firstLayerName, nextLayer : { name: secondLayerName}} = object
  console.log(firstLayerName);
  return (
    <p>{secondLayerName}</p>
  )
}
export default TestComponent;

TestComponent.propTypes = {
  object: PropTypes.object.isRequired
}