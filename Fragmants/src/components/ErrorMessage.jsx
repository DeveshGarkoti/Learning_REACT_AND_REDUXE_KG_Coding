const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h5>Please enter Healthy Food Items</h5>}</>;
};

export default ErrorMessage;
