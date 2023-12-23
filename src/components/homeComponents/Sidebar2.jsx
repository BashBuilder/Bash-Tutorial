import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
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
// import { MdOutlineSupervisorAccount } from 'react-icons/md';
// import { HiOutlineRefresh } from 'react-icons/hi';
// import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from "react-icons/gi";
// import { GrLocation } from 'react-icons/gr';
import { useGlobalContext } from "../../contexts/context";

function Sidebar2() {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useGlobalContext();

  const handleCloseSidebar = () =>
    activeMenu && screenSize <= 900 && setActiveMenu(false);

  const homeLinks = [
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
  const activeLink =
    " flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 ";
  const normalLink =
    " flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-400 dark:hover:text-black hover:bg-light-gray m-2 ";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between item-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight ark:text-white text-slate-900 "
            >
              <SiShopware className=" dark:text-gray-100 text-3xl" />
              <span className="dark:text-gray-100">Bash Tutorial</span>
            </Link>
            <Tooltip title="Close" placement="bottom">
              <button
                onClick={() => setActiveMenu((prevSate) => !prevSate)}
                className=" m-1 dark:text-gray-300 text-2xl rounded-full p-3 hover:bg-light-gray dark:hover:text-gray-700 mt-4 block md-hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10 pl-2">
            {homeLinks.map((item) => (
              <div key={item.title}>
                <p className="text-gray-500 dark:text-gray-300 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    to={`/${link.name === "dashboard" ? "" : link.name}`}
                    key={link.name}
                    onClick={() => handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar2;
