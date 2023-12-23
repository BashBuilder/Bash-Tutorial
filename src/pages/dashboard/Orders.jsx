import React, { useMemo, useState } from 'react'
import { useReactTable, getCoreRowModel,flexRender, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
import mdata from "../demo.json"
import "./table.css"
import { useGlobalContext } from '../../contexts/context';




function Orders() {
  const { currentColor } = useGlobalContext();


  const data =  useMemo(() => mdata, [])
  
  const columns = [
    { 
      header: "ID", 
      accessorKey :'id',
      footer : "ID"
    },

    // {
    //   header: "Name",
    //   columns: [
    //     { 
    //       header: "First", 
    //       accessorKey :'first_name',
    //       footer : "First"
    //     },
    //     { 
    //       header: "Last ", 
    //       accessorKey :'last_name',
    //       footer : "Last"
    //     },
    //   ]
    // },
    // {
    //   header: "Name",
    //   accessorFn: row => `${row.first_name} ${row.last_name}`
    // },


    { 
      header: "First Name", 
      accessorKey :'first_name',
      footer : "First Name"
    },
    { 
      header: "Last Name", 
      accessorKey :'last_name',
      footer : "Last Name"
    },
    { 
      header: "Gender", 
      accessorKey :'gender',
      footer : "Gender"
    },
    { 
      header: "Country", 
      accessorKey :'country',
      footer : "Country",
      // cell: info =>  <button onClick={() => console.log(info.getValue())} >{`${info.getValue()}`}</button> 
    },
  ]

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
        {/* <tfoot>
          {table.getFooterGroups().map(footerGroup => (
              <tr key={ footerGroup.id } >
                { footerGroup.headers.map(header => (
                  <th key= {header.id} >
                    { flexRender(header.column.columnDef.header, header.getContext()) }
                  </th>
                )) }
              </tr>
            )) }
        </tfoot> */}
      </table>
      <div className='flex gap-10 p-2 ' >
        <button onClick={() => table.setPageIndex(0) }> First Page </button>
        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage() }> Previous Page </button>
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage() }> Next Page </button>
        <button onClick={() => table.setPageIndex(table.getPageCount()-1) }> Last Page </button>
      </div>

    </div>
  )
}

export default Orders