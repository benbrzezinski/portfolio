import { IconContext } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import { FaPersonRunning, FaReact } from "react-icons/fa6";
import { FaHome, FaCode } from "react-icons/fa";
import { IoCodeWorking } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { SiVite, SiTypescript } from "react-icons/si";
import { IconClass } from "../types";

const useIcons = () => {
  const Home = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaHome />
    </IconContext.Provider>
  );

  const Works = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <IoCodeWorking />
    </IconContext.Provider>
  );

  const Person = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaPersonRunning />
    </IconContext.Provider>
  );

  const Phone = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdPhone />
    </IconContext.Provider>
  );

  const GreaterThan = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <IoIosArrowForward />
    </IconContext.Provider>
  );

  const Website = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <CgWebsite />
    </IconContext.Provider>
  );

  const Code = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaCode />
    </IconContext.Provider>
  );

  const Vite = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiVite />
    </IconContext.Provider>
  );

  const React = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaReact />
    </IconContext.Provider>
  );

  const Typescript = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiTypescript />
    </IconContext.Provider>
  );

  return {
    Home,
    Works,
    Person,
    Phone,
    GreaterThan,
    Website,
    Code,
    Vite,
    React,
    Typescript,
  };
};

export default useIcons;
