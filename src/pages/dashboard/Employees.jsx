import React, { useMemo, useState } from 'react'
import { useReactTable ,getCoreRowModel,flexRender, getPaginationRowModel, getSortedRowModel  } from "@tanstack/react-table"

import { employeesData } from '../../Data/employeeData'
import { useGlobalContext } from '../../contexts/context';

function Employees() {

  const { currentColor } = useGlobalContext();
  
  const column = [
    {
      header: " Profile ",
      accessorKey: "EmployeeImage",
      cell : info => <img className='w-10 h-10 rounded-full' src={info.getValue()} alt="" />
    },
    {
      header: " Name ",
      accessorKey: "Name",
    },
    {
      header: " Title ",
      accessorKey: "Title",
    },
    {
      header: " Superviser ",
      accessorKey: "ReportsTo",
    },
    {
      header: " Employed on ",
      accessorKey: "HireDate",
    },
    {
      header: " Country ",
      accessorKey: "Country",
    },
  ];

  const data = useMemo(() => employeesData, []); 
  const columns = useMemo(() => column, []); 

  const [sorting, setSorting] = useState([])
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel :getCoreRowModel(),
    getPaginationRowModel : getPaginationRowModel(),
    getSortedRowModel : getSortedRowModel(),
    state : {
      sorting
    },
    onSortingChange : setSorting,

  })

  return (
    <div className='m-2 md:m-10 mt-24 p-4 md:p-10 bg-white overflow-x-scroll rounded-3xl ' >
    <table id="customers">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={ headerGroup.id } >
            { headerGroup.headers.map(header => (
              <th key= {header.id} style={{backgroundColor : currentColor}} onClick={header.column.getToggleSortingHandler()} >
                { header.isPlaceholder ? null : 
                  <div>
                    { flexRender(header.column.columnDef.header, header.getContext())}
                    {
                     { asc: "🗽", desc: " 🎌" }[header.column.getIsSorted() ?? null]
                    }
                  </div>  }
               
              </th>
            )) }
          </tr>
        )) }
      </thead>
      <tbody>
        { table.getRowModel().rows.map(row => (
          <tr key={row.id} >
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} >
                { flexRender(cell.column.columnDef.cell, cell.getContext()) }
              </td>
            ))}
          </tr>
        )) }
      </tbody>
      </table>
    </div>
  )
}

export default Employees