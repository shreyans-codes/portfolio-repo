import PropTypes from "prop-types";

const CommonDetailsBox = ({ children, extraClasses }) => {
  return (
    <div className={`common-dashed-border ${extraClasses}`}>{children}</div>
  );
};

CommonDetailsBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element,
  ]),
  extraClasses: PropTypes.string,
};

export default CommonDetailsBox;
