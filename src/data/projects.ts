import { nanoid } from "nanoid";

const projects = [
  {
    id: nanoid(),
    subtitle: "Jewellery Shop",
    name: "Darling Delights",
    description:
      "Discover timeless elegance at our jewelry shop, where every piece tells a unique story. From dazzling diamonds to exquisite gemstones, we offer a curated collection that captures the essence of sophistication and style. Find the perfect adornment for every occasion, meticulously crafted with passion and precision",
    screenshots: ["/assets/images/darling-delights.jpg"],
    website: "https://darling-delights.netlify.app",
    code: "https://github.com/benbrzezinski/darling-delights",
  },
  {
    id: nanoid(),
    subtitle: "Finance Management App",
    name: "Wallet",
    description:
      "Navigate your financial journey effortlessly with our user-friendly finance management app. From budgeting to investing, discover a curated suite of tools designed for modern financial style. Simplify your fiscal life with precision and passion, ensuring every financial decision is a step towards your goals",
    screenshots: ["/assets/images/wallet.jpg"],
    website: "https://mateuszcharysz.github.io/Goit-Wallet/",
    code: "https://github.com/MateuszCharysz/Goit-Wallet",
  },
  {
    id: nanoid(),
    subtitle: "Ice Cream Shop",
    name: "Ice Cream",
    description:
      "Step into the world of joy with our ice cream shop! We've crafted a delightful space where every visit is a journey into happiness. Explore a variety of flavors, from timeless classics to exciting creations that spark delight. Our carefully selected range captures the essence of pleasure",
    screenshots: ["/assets/images/ice-cream.jpg"],
    website:
      "https://barteknr1.github.io/Ice-Cream-made-with-Passion/#about-us",
    code: "https://github.com/barteknr1/Ice-Cream-made-with-Passion",
  },
  {
    id: nanoid(),
    subtitle: "Posts Mobile App",
    name: "Posts",
    description:
      "Introducing your pocket-sized creativity hub! Capture moments effortlessly by creating posts with photos, captions, and locations. Share your world, let others like, and leave comments. A simple way to connect and cherish your experiences, all in one app",
    screenshots: [
      "/assets/images/posts-1.jpg",
      "/assets/images/posts-2.jpg",
      "/assets/images/posts-3.jpg",
      "/assets/images/posts-4.jpg",
      "/assets/images/posts-5.jpg",
      "/assets/images/posts-6.jpg",
      "/assets/images/posts-7.jpg",
      "/assets/images/posts-8.jpg",
      "/assets/images/posts-9.jpg",
      "/assets/images/posts-10.jpg",
      "/assets/images/posts-11.jpg",
    ],
    website: "",
    code: "https://github.com/benbrzezinski/goit-react-native",
  },
  {
    id: nanoid(),
    subtitle: "Movie Viewing App",
    name: "Filmoteka",
    description:
      "Immerse yourself in the world of cinema with our movie viewing app. Discover a vast collection of films, from classics to the latest releases. Enjoy seamless streaming, personalized recommendations, and an immersive viewing experience. Your cinematic journey starts here",
    screenshots: ["/assets/images/filmoteka.jpg"],
    website: "https://damtchorzewski.github.io/Filmoteka-HiFiveTeam/index.html",
    code: "https://github.com/DamTchorzewski/Filmoteka-HiFiveTeam",
  },
  {
    id: nanoid(),
    subtitle: "Company's Website",
    name: "WebStudio",
    description:
      "Explore WebStudio, your go-to business ally! Our website is more than just a page, it's a powerhouse of practical tools and knowledge, dedicated to supporting companies. From valuable resources to innovative solutions, WebStudio is here to empower your business journey",
    screenshots: ["/assets/images/web-studio.jpg"],
    website: "https://benbrzezinski.github.io/goit-markup-hw-08/index.html",
    code: "https://github.com/benbrzezinski/goit-markup-hw-08",
  },
];

export default projects;
