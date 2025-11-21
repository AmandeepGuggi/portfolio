import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Icon */}
      <div
        className="sm:hidden max-w-fit cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src="/assets/icons/menu.svg"
          alt="menu"
          className="w-10 h-10"
        />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-20"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-30 transform 
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="p-4 flex justify-end">
          <img
            src="/assets/icons/x.svg"
            className="w-8 h-8 bg-black rounded-full cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col gap-4 px-6 mt-4 text-lg">
          <a onClick={() => setOpen(false)} href="#home"><li className="cursor-pointer">Home</li></a>
          <a onClick={() => setOpen(false)} href="#about"><li className="cursor-pointer">About</li></a>
          <a onClick={() => setOpen(false)} href="#projects"><li className="cursor-pointer">Projects</li></a>
          <a onClick={() => setOpen(false)} href="#contact"><li className="cursor-pointer">Contact</li></a>
          
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
