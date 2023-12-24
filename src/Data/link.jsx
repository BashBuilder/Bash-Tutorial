import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import {
  FiShoppingBag,
  FiEdit,
  // FiPieChart,
  // FiBarChart,
  // FiCreditCard,
  // FiStar,
  // FiShoppingCart,
} from "react-icons/fi";
import {
  BsKanban,
  BsBarChart,
  // BsBoxSeam,
  // BsCurrencyDollar,
  // BsShield,
  // BsChatLeft,
} from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
// import { MdOutlineSupervisorAccount } from "react-icons/md";
// import { HiOutlineRefresh } from "react-icons/hi";
// import { TiTick } from "react-icons/ti";
import { GiLouvrePyramid } from "react-icons/gi";
// import { GrLocation } from "react-icons/gr";

export const data = ["Home", "About", "Project", "Blog"];
export const galleryData = [
  {
    key: "first",
    image: "web.png",
    text: "Web design",
  },
  {
    key: "second",
    image: "develpment.png",
    text: "Web design",
  },
  {
    key: "third",
    image: "branding.png",
    text: "Branding",
  },
  {
    key: "fourth",
    image: "together.jpg",
    text: "Cloud service",
  },
  {
    key: "fifth",
    image: "marketing.png",
    text: "Marketing",
  },
];

export const portfolioData = [
  {
    key: 1,
    image: "qa.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 2,
    image: "qb.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 3,
    image: "qc.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 4,
    image: "qd.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 5,
    image: "qa.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 6,
    image: "qb.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 7,
    image: "qc.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
  {
    key: 8,
    image: "qd.jpg",
    heading: "Golden portfolio",
    text: "Branding and Marketting",
  },
];

export const teamData = [
  {
    key: 1,
    image: "qa.jpg",
    name: "Nina Cooper",
    job: "Web Designer",
  },
  {
    key: 2,
    image: "qb.jpg",
    name: "Builder Bash",
    job: "Web Designer",
  },
  {
    key: 3,
    image: "qc.jpg",
    name: "Bash Builder",
    job: "Web Designer",
  },
];

export const priceInfo = [
  {
    title: "Graphics",
    category: "ALL DESIGN",
    price: "20",
    content: [
      "Creative Design Enable",
      "Vbrant Color Usage",
      "Extreme Typography",
      "Eye catching Design",
      "Exceptional Design",
    ],
  },
  {
    title: "Web",
    category: "ALL DESIGN",
    price: "20",
    content: [
      "Creative Design Enable",
      "Vbrant Color Usage",
      "Extreme Typography",
      "Eye catching Design",
      "Exceptional Design",
    ],
  },
  {
    title: "Mobile App",
    category: "ALL DESIGN",
    price: "30",
    content: [
      "Creative Design Enable",
      "Vbrant Color Usage",
      "Extreme Typography",
      "Eye catching Design",
      "Exceptional Design",
    ],
  },
];

export const homeLinks = [
  {
    title: "Dashboard",
    links: [{ name: "dashboard", icon: <FiShoppingBag /> }],
  },
  {
    title: "Pages",
    links: [
      { name: "orders", icon: <AiOutlineShoppingCart /> },
      { name: "employees", icon: <IoMdContacts /> },
      { name: "customers", icon: <RiContactsLine /> },
    ],
  },
  {
    title: "Apps",
    links: [
      { name: "calendar", icon: <AiOutlineCalendar /> },
      { name: "kanban", icon: <BsKanban /> },
      { name: "editor", icon: <FiEdit /> },
      { name: "color-picker", icon: <BiColorFill /> },
    ],
  },
  {
    title: "Charts",
    links: [
      { name: "line", icon: <AiOutlineStock /> },
      { name: "area", icon: <AiOutlineAreaChart /> },
      { name: "bar", icon: <AiOutlineBarChart /> },
      { name: "financial", icon: <RiStockLine /> },
      { name: "color-mapping", icon: <BsBarChart /> },
      { name: "pyramid", icon: <GiLouvrePyramid /> },
      { name: "stacked", icon: <AiOutlineBarChart /> },
    ],
  },
];
