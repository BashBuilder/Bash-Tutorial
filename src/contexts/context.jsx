import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  notification: false,
  userProfile: false,
};

const AppProvider = ({ children }) => {
  // Dashboard states
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("blue");
  const [screenSize, setScreenSize] = useState(null);
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  // ----------------
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  // Functions --------------------------------------------------------
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  function setMode(e) {
    setCurrentMode(e.target.value);
    localStorage.setItem("bashTutorialColorTheme", e.target.value);
  }
  function setColor(color) {
    setCurrentColor(color);
    localStorage.setItem("bashTutorialColorMode", color);
  }
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  useEffect(() => {
    setIsLoading(false);
    // setCurrentMode(localStorage.getItem("schoolTheme"));
    // setCurrentColor(localStorage.getItem("colorMode"));
    setUser(JSON.parse(localStorage.getItem("user")));
    setIsLoading(true);
  }, []);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, [screenSize]);

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        user,
        setUser,
        error,
        setError,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        currentColor,
        setCurrentColor,
        screenSize,
        setScreenSize,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        handleLogout,
      }}
    >
      {isLoading && children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
