import PropTypes from "prop-types";

const Child = () => {
  return <div></div>;
};

Child.propTypes = {
  sendDataToParent: PropTypes.func,
};

export default Child;
