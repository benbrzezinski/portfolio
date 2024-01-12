import { nanoid } from "nanoid";

const projects = [
  {
    id: nanoid(),
    subtitle: "Jewellery Shop",
    name: "Darling Delights",
    description:
      "Discover timeless elegance at our jewelry shop, where every piece tells a unique story. From dazzling diamonds to exquisite gemstones, we offer a curated collection that captures the essence of sophistication and style. Find the perfect adornment for every occasion, meticulously crafted with passion and precision",
    screenshot: "/assets/images/darling-delights.jpg",
    website: "https://darling-delights.netlify.app",
    code: "https://github.com/benbrzezinski/darling-delights",
  },
  {
    id: nanoid(),
    subtitle: "Finance Management App",
    name: "Wallet",
    description:
      "Navigate your financial journey effortlessly with our user-friendly finance management app. From budgeting to investing, discover a curated suite of tools designed for modern financial style. Simplify your fiscal life with precision and passion, ensuring every financial decision is a step towards your goals",
    screenshot: "/assets/images/wallet.jpg",
    website: "https://mateuszcharysz.github.io/Goit-Wallet/",
    code: "https://github.com/MateuszCharysz/Goit-Wallet",
  },
  {
    id: nanoid(),
    subtitle: "Ice Cream Shop",
    name: "Ice Cream",
    description:
      "Step into the world of joy with our ice cream shop! We've crafted a delightful space where every visit is a journey into happiness. Explore a variety of flavors, from timeless classics to exciting creations that spark delight. Our carefully selected range captures the essence of pleasure",
    screenshot: "/assets/images/ice-cream.jpg",
    website:
      "https://barteknr1.github.io/Ice-Cream-made-with-Passion/#about-us",
    code: "https://github.com/barteknr1/Ice-Cream-made-with-Passion",
  },
];

export default projects;
