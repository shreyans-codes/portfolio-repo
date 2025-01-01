import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../redux/navbarSlice";
import { navbarItemIds } from "../components/CommonNavbar";
import { socialLinks } from "../variables/socials.jsx";
import { Button, Link } from "@nextui-org/react";
import IconArrowRight from "../icons/IconArrowRight";

const ContactPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage(navbarItemIds.contact));
  }, [dispatch]);
  return (
    <section className="common-page-container">
      <section className="common-page-width">
        <article className="common-prose">
          <h2 className="my-2">Get in touch</h2>
          <p>{"Let's create magic together!"}</p>
        </article>
        <section className="m-auto w-full">
          {socialLinks.map((social) => {
            return (
              <Button
                key={social.name}
                as={Link}
                variant="light"
                className="flex w-full m-auto sm:w-2/3 justify-between items-center"
                href={social.href}
              >
                <div className="flex gap-2 items-center">
                  {social.icon}
                  {social.name}
                </div>
                <IconArrowRight />
              </Button>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default ContactPage;
