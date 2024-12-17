import { useNavigate } from "react-router-dom";

const CommonHeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full grid grid-cols-2">
      {/* Column 1: Name Details */}
      <div className="common-prose flex flex-col items-center justify-evenly">
        <p className="my-2">Heyya 👋, I am</p>
        <h2 className="my-2">Shreyans Sethia</h2>
        <p className="my-2">Backend Developer</p>
      </div>
      {/* Column 2: Image */}
      <div className="flex justify-center items-center">
        An Image should come here
      </div>
    </div>
  );
};

export default CommonHeroSection;
