import { useState } from "react";
import { navLinks } from "../constants";
import MenuSvg from "./design/MenuSvg";
import { HamburgerMenu } from "./design/HamburgerMenu";
import headerLogo from "../assets/images/header-logo.svg";

const Nav = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  console.log(openNavigation);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <div className="flex justify-between max-container">
        <a href="/">
          <img
            src={headerLogo}
            className="ring-purple-500"
            width={130}
            height={29}
            alt="Logo"
          />
        </a>
        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-20 left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <ul className="relative z-50 w-full flex flex-col gap-9 items-center justify-center lg:flex-row">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal hover:text-purple-500 text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <HamburgerMenu />
        </nav>

        <div
          role="button"
          onClick={toggleNavigation}
          className="ml-auto hidden max-lg:block border-2 border-purple-500 rounded p-2"
        >
          <MenuSvg openNavigation={openNavigation}/>
        </div>
      </div>
    </header>
  );
};

export default Nav;
