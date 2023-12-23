import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./style/App.css";
import "./style/homeStyles/HomeStyle.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar2 from "./pages/Navbar2";
import { useGlobalContext } from "./contexts/context";
import { FiSettings } from "react-icons/fi";
import Sidebar2 from "./components/homeComponents/Sidebar2";
import {
  Dashboard,
  Orders,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Financial,
  ColorPicker,
  ColorMapping,
  Calender,
  Editor,
} from "./pages/dashboard";

import Tooltip from "@mui/material/Tooltip";
import ThemeSettings from "./pages/dashboard/ThemeSettings";

function App() {
  const {
    user,
    activeMenu,
    currentMode,
    themeSettings,
    setThemeSettings,
    currentColor,
  } = useGlobalContext();

  // console.log(currentColor);
  // console.log(currentMode);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        {!user ? (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          //
          <div className=" flex relative dark:bg-main-dark-bg  ">
            {/* ------ floating settings icon ------  */}
            <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
              <Tooltip title="Settings" placement="top" arrow>
                <button
                  type="button"
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full "
                  style={{ background: currentColor }}
                  onClick={() => setThemeSettings(true)}
                >
                  <FiSettings />
                </button>
              </Tooltip>
            </div>
            {/*---------- sidebar section ----------  */}
            {activeMenu ? (
              <div
                className="w-72 fixed sidebar2 dark:bg-secondary-dark-bg 
                   bg-white"
              >
                <Sidebar2 />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-bg overflow-hidden shadow-none ">
                <Sidebar2 />
              </div>
            )}
            {/* ---- dashboard content section ---- */}
            <div
              className={` dark:bg-main-dark-bg bg-slate-200  min-h-screen w-full flex-2 ${
                activeMenu ? "md:ml-72" : "flex-2"
              } `}
            >
              <div className="fixed md:static dark:bg-main-dark-bg  bg-main-bg  navbar w-full ">
                <Navbar2 />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  {/* pages  */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />
                  {/* apps  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calender />} />
                  <Route path="/color-picker" element={<ColorPicker />} />
                  {/* charts  */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
