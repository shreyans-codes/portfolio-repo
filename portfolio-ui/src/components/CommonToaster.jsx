import toast from "react-hot-toast";

export const callFetchToast = async (callFunction, name) => {
  const fetchDetails = callFunction();
  toast.promise(fetchDetails, {
    loading: "Fetching " + name,
    success: name + " Fetched",
    error: "Error when Fetching " + name,
  });
  return fetchDetails;
};

export const callSaveToast = (callFunction, name, params) => {
  let saveDetails;
  if (typeof params !== "undefined") saveDetails = callFunction(params);
  else saveDetails = callFunction();
  toast.promise(saveDetails, {
    loading: "Saving " + name,
    success: name + " Saved",
    error: "Error when Saving " + name,
  });
  return saveDetails;
};
