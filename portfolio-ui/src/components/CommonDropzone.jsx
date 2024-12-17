import { Button, Image } from "@nextui-org/react";
import PropTypes from "prop-types";

import toast from "react-hot-toast";

const CommonDropzone = ({
  setImageList,
  isStep,
  stepIndex,
  steps,
  setFieldValue,
}) => {
  const reader = new FileReader();
  const pasteImg = async () => {
    try {
      const clipboardItems = await navigator.clipboard.read();
      const blobOutput = [];
      for (let index = 0; index < clipboardItems.length; index++) {
        const item = clipboardItems[index];

        // Check if the item has an image type available
        if (item.types.includes("image/png")) {
          const imageBlob = await item.getType("image/png");
          blobOutput.push(imageBlob);
        }
      }
      // If there are images, create object URLs and update the steps imagePath
      if (blobOutput.length > 0) {
        // Convert the first image blob to Base64
        reader.onloadend = () => {
          const base64Image = reader.result; // This is a Base64 encoded string
          if (isStep) {
            const updatedSteps = [...steps];
            updatedSteps[stepIndex].imagePaths.push({
              file_id: null,
              encoding: base64Image,
            }); // Add the Base64 string to the correct step
            setFieldValue(
              `steps[${stepIndex}].imagePaths`,
              updatedSteps[stepIndex].imagePaths
            );
          } else setImageList((prev) => [...prev, base64Image]); // Append Base64 string to the list
        };

        reader.readAsDataURL(blobOutput[0]); // Start the conversion
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div
          className="w-[250px] sm:w-[400px] lg:w-[500px] relative border-2 border-gray-300 border-dashed rounded-lg p-6"
          id="dropzone"
        >
          <input
            onChange={(e) => {
              const fileData = e.target.files[0];
              if (fileData) {
                // Convert the file to a Base64 string
                if (fileData.size > 1.5e6) toast.error("File size exceeded");
                reader.onloadend = () => {
                  const base64String = reader.result; // This is the Base64 string
                  if (isStep) {
                    const updatedSteps = [...steps];
                    updatedSteps[stepIndex].imagePaths.push({
                      file_id: null,
                      encoding: base64String,
                    }); // Add the Base64 string to the correct step
                    setFieldValue(
                      `steps[${stepIndex}].imagePaths`,
                      updatedSteps[stepIndex].imagePaths
                    );
                  } else setImageList((prev) => [...prev, base64String]);
                };

                // Read the file as a Data URL (Base64 encoded)
                reader.readAsDataURL(fileData);
              }
            }}
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 z-50"
          />
          <article className="common-prose text-center w-full">
            <Image
              className="w-12 m-auto"
              src="https://www.svgrepo.com/show/357902/image-upload.svg"
              alt=""
            />

            <h3 className="mt-2 text-sm font-medium">
              <label htmlFor="file-upload" className="relative cursor-pointer">
                <span>Drag and drop</span>
                <span className="text-indigo-600"> or browse</span>
                <span> to upload</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
            </h3>
            <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 1.5MB</p>
          </article>
        </div>
        <article className="common-prose relative flex items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <em className="flex-shrink mx-4 text-gray-400">or</em>
          <div className="flex-grow border-t border-gray-400"></div>
        </article>
        <Button variant="flat" onPress={pasteImg}>
          Paste from clipboard
        </Button>
      </div>
    </div>
  );
};

CommonDropzone.propTypes = {
  setImageList: PropTypes.func,
  isStep: PropTypes.bool,
  stepIndex: PropTypes.any,
  steps: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default CommonDropzone;
