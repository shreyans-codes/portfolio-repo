import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { useState } from "react";
import IconLightUp from "../icons/IconLightUp";
import IconWeatherNight from "../icons/IconWeatherNight";
import { useNavigate } from "react-router-dom";

export const navbarItemIds = {
  home: "home",
  project: "projects",
  contact: "contact",
  themeSwitch: "themeSwitch",
};
const CommonNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentPage = useSelector((state) => state.navbar.currentPage);

  const navigate = useNavigate();

  const menuItems = [
    {
      id: navbarItemIds.home,
      name: "Home",
      href: "/",
      type: "link",
    },
    {
      id: navbarItemIds.project,
      name: "Work",
      href: "/work",
      type: "link",
    },
    {
      id: navbarItemIds.contact,
      name: "Contact",
      href: "/contact",
      type: "link",
    },
    {
      id: navbarItemIds.themeSwitch,
      name: "Theme",
      click: () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      },
      type: "button",
    },
  ];

  console.log("Current Page: ", currentPage);

  return (
    <div>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent
          onClick={() => navigate("/")}
          className="hidden sm:flex pr-3 cursor-pointer"
          justify="start"
        >
          <NavbarBrand>
            <Image
              width={40}
              radius="none"
              className="object-contain dark:invert"
              src={
                "https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2"
              }
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Button
              variant={"light"}
              color={
                currentPage == navbarItemIds.home ? "primary" : "foreground"
              }
              isActive={currentPage == navbarItemIds.home}
              onPress={() =>
                navigate(
                  menuItems.find((item) => item.id === navbarItemIds.home)?.href
                )
              }
            >
              {menuItems.find((item) => item.id === navbarItemIds.home)?.name}
            </Button>
          </NavbarItem>
          <NavbarItem isActive>
            <Button
              variant={"light"}
              color={
                currentPage == navbarItemIds.project ? "primary" : "foreground"
              }
              isActive={currentPage == navbarItemIds.project}
              onPress={() =>
                navigate(
                  menuItems.find((item) => item.id === navbarItemIds.project)
                    ?.href
                )
              }
            >
              {
                menuItems.find((item) => item.id === navbarItemIds.project)
                  ?.name
              }
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              variant={"light"}
              color={
                currentPage == navbarItemIds.contact ? "primary" : "foreground"
              }
              isActive={currentPage == navbarItemIds.contact}
              onPress={() =>
                navigate(
                  menuItems.find((item) => item.id === navbarItemIds.contact)
                    ?.href
                )
              }
            >
              {
                menuItems.find((item) => item.id === navbarItemIds.contact)
                  ?.name
              }
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem> */}

          <Button
            variant="light"
            className="hidden sm:flex"
            onPress={
              menuItems.find((item) => item.id === navbarItemIds.themeSwitch)
                ?.click
            }
            startContent={
              theme === "dark" ? <IconLightUp /> : <IconWeatherNight />
            }
          >
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              isActive={currentPage == item.id}
              key={`${item}-${index}`}
            >
              <Link
                className="w-full"
                color="foreground"
                href={item.type === "link" ? item.href : null}
                onPress={item.type === "button" ? item.click : null}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default CommonNavbar;
