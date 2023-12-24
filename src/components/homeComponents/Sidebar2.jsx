import { Link, NavLink } from "react-router-dom";
import { homeLinks } from "../../Data/link";
import { Tooltip } from "@mui/material";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { useGlobalContext } from "../../contexts/context";

function Sidebar2() {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useGlobalContext();

  const handleCloseSidebar = () =>
    activeMenu && screenSize <= 900 && setActiveMenu(false);
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
