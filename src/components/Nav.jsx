import { useState } from "react";
import { navLinks } from "../constants";
import MenuSvg from "./design/MenuSvg";
import { HamburgerMenu } from "./design/HamburgerMenu";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import headerLogo from "../assets/images/header-logo.svg";
import ToggleButton from "./DarkThemeToggler";

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="padding-x fixed top-0 z-40 w-full bg-white py-5 shadow-sm dark:bg-slate-950 md:absolute md:bg-transparent md:shadow-none">
      <div className="flex justify-between max-container xl:pr-12">
        <a href="/" className="flex items-center justify-center">
          <img
            src={headerLogo}
            className="ring-purple-500"
            width={130}
            height={29}
            alt="Logo"
          />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed z-50 top-[86px] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <ul className="w-full flex flex-col gap-9 items-center justify-center lg:flex-row">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  onClick={handleClick}
                  href={item.href}
                  className={`${
                    openNavigation ? "font-bold uppercase text-black" : ""
                  } font-montserrat leading-normal hover:text-purple-500 text-lg text-slate-gray`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <HamburgerMenu />
        </nav>

        <div role="link" className="flex items-center justify-center gap-2 text-lg leading-normal font-medium font-montserrat hover:text-purple-500 text-slate-gray max-lg:hidden lg:mr-6 wide:mr-24">
          <span>/</span>
          <a href="/">Sign in</a>
        </div>

        <div className="flex items-center gap-1 sm:gap-4">
          <div role="button" className="flex items-center justify-center p-1 border-purple-500 rounded-full border-2">
            <ToggleButton />
          </div>

          <div
            role="button"
            onClick={toggleNavigation}
            className="hidden max-lg:block max-h-8 border-2 border-purple-500 rounded p-2"
          >
            <MenuSvg openNavigation={openNavigation} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
