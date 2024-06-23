import { IconContext } from "react-icons";
import { CgWebsite } from "react-icons/cg";
import {
  FaReact,
  FaSass,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaSquareFacebook,
  FaArrowLeft,
  FaCopy,
} from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCode, FaLinkedin } from "react-icons/fa";
import { IoLogoCss3, IoClose } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
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
  SiNextdotjs,
  SiVitest,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandReactNative, TbLoader2 } from "react-icons/tb";
import { MdNotificationImportant } from "react-icons/md";
import { IconClass } from "../types";

const useIcons = () => {
  const Hamburger = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <RxHamburgerMenu />
    </IconContext.Provider>
  );

  const Close = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <IoClose />
    </IconContext.Provider>
  );

  const ArrowRight = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <IoIosArrowForward />
    </IconContext.Provider>
  );

  const ArrowLeft = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaArrowLeft />
    </IconContext.Provider>
  );

  const Loader = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <TbLoader2 />
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

  const GitHub = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaGithub />
    </IconContext.Provider>
  );

  const LinkedIn = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaLinkedin />
    </IconContext.Provider>
  );

  const Facebook = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaSquareFacebook />
    </IconContext.Provider>
  );

  const NotificationImportant = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <MdNotificationImportant />
    </IconContext.Provider>
  );

  const Copy = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <FaCopy />
    </IconContext.Provider>
  );

  const NextJs = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiNextdotjs />
    </IconContext.Provider>
  );

  const Vitest = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiVitest />
    </IconContext.Provider>
  );

  const TailwindCSS = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiTailwindcss />
    </IconContext.Provider>
  );

  const Shadcnui = ({ className }: IconClass) => (
    <IconContext.Provider value={{ className }}>
      <SiShadcnui />
    </IconContext.Provider>
  );

  return {
    Hamburger,
    Close,
    ArrowRight,
    ArrowLeft,
    Loader,
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
    GitHub,
    LinkedIn,
    Facebook,
    NotificationImportant,
    Copy,
    NextJs,
    Vitest,
    TailwindCSS,
    Shadcnui,
  };
};

export default useIcons;
