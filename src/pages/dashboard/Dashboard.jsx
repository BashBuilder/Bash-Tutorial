import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoBell} from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';

// import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useGlobalContext } from '../../contexts/context';
import Button from '../../components/homeComponents/Button';

// ------------------------------------------
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { FiBarChart } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
// import Tooltip from '@mui/material/Tooltip';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  BarChart, Bar, Cell  } from 'recharts';




function Dashboard() {


  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: '39,354',
      percentage: '-4%',
      title: 'Customers',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: '4,396',
      percentage: '+23%',
      title: 'Products',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: '423,39',
      percentage: '+38%',
      title: 'Sales',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
  
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: '39,354',
      percentage: '-12%',
      title: 'Refunds',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
      pcColor: 'red-600',
    },
  ];


  const { currentColor } = useGlobalContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="dark:text-gray-200 dark:bg-secondary-dark-bg  bg-white h-44 rounded-xl w-full lg:w-80 p-8 m-3  bg-no-repeat bg-cover bg-center ">
          <div className="flex justify-between items-center">
            <p className="font-bold text-gray-400" >Earnings</p>
            <p className="text-2xl" >$45,909.64</p>
          </div>
          <div className="mt-6 inline-block">
            <Button 
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {
            earningData.map(item => (
              <div
                key={item.title}
                className='dark:text-gray-200 dark:bg-secondary-dark-bg bg-white md:w-56 p-4 pt-9 rounded-2xl '
              >
                <button
                  style={{color: item.iconColor, backgroundColor : item.iconBg}}
                  className='text-2xl opaacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                >
                  {item.icon}
                </button>
                <p className=' mt-3 ' >
                  <span className=' text-lg font-semibold ' >
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`} >
                    { item.percentage}
                  </span>
                </p>
                <p className=' text-sm text-gray-400 mt-1' >
                  { item.title }
                </p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex gap10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">
              Revenue Updates
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoBell /> </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span><GoBell /> </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className='text-3xl font-semibold'>
                    $50,234.67
                  </span>
                  <span className='p-1.5 hover-drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3' >
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1' >Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className='text-3xl font-semibold'>
                    $3,111.67
                  </span>
                </p>
                <p className="text-gray-500 mt-1">
                  Expense
                </p>
              </div>
              <div className="mt-5">
                  <LineChart 
                    width={300} 
                    height={100} 
                    data={data} 
                    padding={{
                      top: 50,
                      right: 30,
                      left: 20,
                      bottom: 50
                    }}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    <Tooltip />
                  </LineChart>
              </div>
              <div className="mt-10 inline-block">
                <Button
                  color="White"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                /> 
              </div>
            </div>
            <div >
              <BarChart width={300} height={300} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Dashboard