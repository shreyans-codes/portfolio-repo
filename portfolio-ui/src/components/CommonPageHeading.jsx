import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CommonPageHeading = ({ pageTitle, hasBack = false, backDetails }) => {
  const navigate = useNavigate();
  return (
    <article className="common-prose w-full flex justify-between">
      <div>
        {"You're on:"}
        <h2 className="my-2"> {pageTitle}</h2>
        {hasBack ? (
          <div className="flex gap-2 items-center">
            {"Go back to:"}
            <h6
              className="my-2 cursor-pointer text-primary"
              onClick={() => navigate(backDetails?.url)}
            >
              {" "}
              {backDetails?.name}
            </h6>
          </div>
        ) : null}
      </div>
    </article>
  );
};

CommonPageHeading.propTypes = {
  pageTitle: PropTypes.string,
  hasBack: PropTypes.bool,
  backDetails: PropTypes.exact({
    url: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default CommonPageHeading;
