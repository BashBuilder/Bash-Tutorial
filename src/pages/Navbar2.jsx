import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { useGlobalContext } from "../contexts/context";
import Tooltip from "@mui/material/Tooltip";
import { BiLogOut } from "react-icons/bi";

// import avatar from '../data/avatar.jpg';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <button
        type="button"
        style={{ color }}
        onClick={customFunc}
        className=" text-xl rounded-full p-3 hover:bg-light-gray items-center "
      >
        <span style={{ background: dotColor }} className="rounded-full ">
          {icon}
        </span>
      </button>
    </Tooltip>
  );
};

function Navbar2() {
  const {
    // activeMenu,
    setActiveMenu,
    // isClicked,
    // setIsClicked,
    // handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    // user,
  } = useGlobalContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    setActiveMenu(!(screenSize <= 900));
  }, [screenSize]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className=" flex justify-between p-2 md:mx-6 relative items-center ">
      <div className=" items-center justify-center hover:shadow-xl ">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevState) => !prevState)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      </div>
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => console.log("clicked")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="chat"
          customFunc={() => console.log("clicked")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          customFunc={() => console.log("clicked")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <NavButton
          title="Logout"
          customFunc={handleLogout}
          color={currentColor}
          icon={<BiLogOut />}
        />
        <Tooltip title="Profile" placement="bottom" arrow>
          <div
            className="flex items-center gap-2 cursot-pointer p-1 hover:bg-lighe-gray rounded-lg "
            onClick={() => console.log("clicked")}
          >
            <img
              src="assets/images/cloud.png"
              alt="user"
              className="bg-gray-200 rounded-full w-8 h-8"
            />
            {/* <p className="text-gray-600 dark:text-gray-100 text-14">
              Hi <span className=" font-bold ml-1">{user.email}</span>
            </p> */}
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default Navbar2;
