import React from 'react'
import { useTable, useFilters, useSortBy} from 'react-table'
import Flag from './Flag.jsx';

function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({columns, data},
    useFilters, // This plugin filters table
    useSortBy // This plugin Hook will help to sort our table columns
  )
  
    return (
      <table {...getTableProps()} className="table-auto border-collapse border-2 border-solid w-screen m-4">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className={
                    column.isSorted
                    ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                    : ""
                }
                >
                {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} >
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }


//   const [filterInput, setFilterInput] = useState("");
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    // setFilterInput(value);
  };





  const TableLayout = ({data}) => {
    const columns = React.useMemo(
        () => [
              {Header: data.headers.region.EN, accessor: 'region'},
              {Header: data.headers.area.EN, accessor: 'area'},
              {Header: data.headers.population.EN, accessor: 'population'},
              {Header: 'Density', accessor: 'density'},
              {Header: data.headers.districts.EN, accessor: 'districts'},
              {Header: data.headers.capital.EN, accessor: 'capital'},
        ],
        []
      )
      let data2 = data.regions.map(region => ({region : [<Flag region={region.id} style={{width:30+'px', display:'inline-block', marginRight: 5+'px'}}/>,region.fullName.EN], area: region.area, population: region.population, density: Math.round(region.population/region.area*10)/10, districts: region.numberOfDistricts, capital: region.capital}))
    

    return (
        <>
                    {/* <input // value={filterInput}
                        onChange={handleFilterChange}
                        placeholder={"Search name"}
                    /> */}
         <Table columns={columns} data={data2} />
        </>
    ) 
}
export default TableLayout;