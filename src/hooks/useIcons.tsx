import { IconContext } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import {
  FaPersonRunning,
  FaReact,
  FaSass,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa6";
import { FaHome, FaCode } from "react-icons/fa";
import { IoCodeWorking, IoLogoCss3 } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import {
  SiVite,
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiSwagger,
  SiExpo,
  SiFirebase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
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

  const Typescript = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiTypescript />
    </IconContext.Provider>
  );

  const React = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaReact />
    </IconContext.Provider>
  );

  const Redux = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiRedux />
    </IconContext.Provider>
  );

  const Javascript = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiJavascript />
    </IconContext.Provider>
  );

  const Sass = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaSass />
    </IconContext.Provider>
  );

  const HTML = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaHtml5 />
    </IconContext.Provider>
  );

  const CSS = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <IoLogoCss3 />
    </IconContext.Provider>
  );

  const NodeJs = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaNodeJs />
    </IconContext.Provider>
  );

  const Express = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiExpress />
    </IconContext.Provider>
  );

  const Mongodb = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiMongodb />
    </IconContext.Provider>
  );

  const Mongoose = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiMongoose />
    </IconContext.Provider>
  );

  const Swagger = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiSwagger />
    </IconContext.Provider>
  );

  const Database = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaDatabase />
    </IconContext.Provider>
  );

  const Expo = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiExpo />
    </IconContext.Provider>
  );

  const ReactNative = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <TbBrandReactNative />
    </IconContext.Provider>
  );

  const Firebase = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiFirebase />
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
    Typescript,
    React,
    Redux,
    Javascript,
    Sass,
    HTML,
    CSS,
    NodeJs,
    Express,
    Mongodb,
    Mongoose,
    Swagger,
    Database,
    Expo,
    ReactNative,
    Firebase,
  };
};

export default useIcons;
