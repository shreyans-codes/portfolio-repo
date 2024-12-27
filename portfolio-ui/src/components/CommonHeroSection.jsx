import { Button, Image } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/navbarSlice";

const CommonHeroSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("home"));
  }, [dispatch]);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2">
      {/* Column 1: Name Details */}
      <div className="common-prose sm:text-center flex flex-col p-4 sm:items-center justify-center">
        <p className="my-2">Heyya 👋, I am</p>
        <h2 className="my-2">Shreyans Sethia</h2>
        <p className="my-2">Full Stack Developer</p>
        <p>
          A developer who believes in being <strong> responsible.</strong>
          <br />I have experience in{" "}
          <span className="text-green-700 dark:text-green-500">
            Spring Boot, MySQL, Nginx, React.js
          </span>{" "}
          and much more
          <br />
        </p>
        <Button
          color="primary"
          variant="flat"
          onPress={(e) => {
            window.location.href = "mailto:shreyanssethia21@gmail.com";
            e.preventDefault();
          }}
        >
          Get in contact
        </Button>
      </div>
      {/* Column 2: Image */}
      <div className="flex justify-center items-center p-4">
        <Image
          src="/Shreyans.jpg"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default CommonHeroSection;
