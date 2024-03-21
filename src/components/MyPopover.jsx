import { Popover } from '@headlessui/react';
import hamburger from "../assets/icons/hamburger.svg";

function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>
        <img src={hamburger} width={25} height={25} alt="Burger menu" />
      </Popover.Button>

      <Popover.Panel className="absolute z-40 right-1 min-w-72 px-4 py-4 ring-2 ring-purple-500 ring-offset-4 rounded">
        <div className="grid gap-2">
          <a href="#Home">Home</a>
          <a href="#about-us">About Us</a>
          <a href="#products">Products</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default MyPopover;