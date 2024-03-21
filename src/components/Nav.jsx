import { useState } from "react";
import { navLinks } from "../constants";
import MenuSvg from "./design/MenuSvg";
import headerLogo from "../assets/images/header-logo.svg";
// import { hamburger } from "../assets/icons";

const Nav = () => {
  const [open, setOpen] = useState(false);

  console.log(open);

  const handleToggleMenu = () => {
    setOpen((open) => !open);
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src={headerLogo} 
            className="ring-purple-500"
            width={130} 
            height={29} 
            alt="Logo" 
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
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

        <div role="button" onClick={handleToggleMenu} className="hidden max-lg:block">
          <MenuSvg/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
