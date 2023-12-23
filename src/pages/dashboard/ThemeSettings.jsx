import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { Tooltip } from '@mui/material';
import { useGlobalContext } from '../../contexts/context';

function ThemeSettings() {
  const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
  ];

  const { setColor, setMode, currentMode, currentColor, setThemeSettings, themeSettings } = useGlobalContext()


  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0' 
      onClick={() => themeSettings ?  setThemeSettings(false) : "" }
    >
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-300">
        <div className="flex justify-between item-center p-4 m-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            onClick={() => setThemeSettings(false)}
            style={{color: 'rgb(153, 171, 180', borderRadius: "50%"}}
            className='text-2xl  hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='dark:border-t-gray-400 flex-col border-t-1 border-color p-4 m-4' >
          <p className='font-semibold text-xl' > Theme Options</p>
          <div className="mt-4">
            <input 
              type="radio" 
              id='light'
              name='theme'
              value="Light"
              className='cursor-pointer'
              onChange={setMode}
              checked={ currentMode === "Light" }
            />
            <label htmlFor="light" className='ml-2 text-md cursor-pointer' >Light</label>
          </div>
          <div className="mt-2">
            <input 
              type="radio" 
              id='dark'
              name='theme'
              value="Dark"
              className='cursor-pointer'
              onChange={setMode}
              checked={ currentMode === "Dark" }
            />
            <label htmlFor="dark" className='ml-2 text-md cursor-pointer' >Dark</label>
          </div>
        </div>
        <div className=" dark:border-t-gray-400 p-4 border-t-1 border-color px-4 m-4">
          <p className="font-semibold text-xl">
            Theme Colors
          </p>
          <div className="flex gap-3">
            { themeColors.map((item, index) => (
              <Tooltip key={index} title={item.name} arrow placement='bottom' >
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center' >
                  <button className=' rounded-full p-4 cursor-pointer' 
                    style={{ backgroundColor: item.color}}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={` text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'} `} />
                  </button>
                </div>
              </Tooltip>
            )) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings