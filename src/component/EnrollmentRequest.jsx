import React , {useState}from 'react';
import { DataGrid} from '@material-ui/data-grid';
import { productRows } from './enrollment';
import './enrollmentRequest.css'
export default function EnrollmentRequest() {
    const [data,setData] = useState(productRows)
    const [selectedData, setSelectedData] = useState("")
    const handleDelete =(id) => {
        setData(data.filter(item => item.id !== id))
    }
    const handleSelected =(selecteddata) => {
        setSelectedData(selecteddata)
    }
    const columns = [
        { field: 'id', headerName: 'Id', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img className="productListImg"src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
              return (
                  <>
                  {/* <link to={"/product/" + params.row.id}> */}
                    <button className="productListEdit" disableSelectionOnClick >Edit</button> 
                  {/* </link> */}
                  
                  <button className="productListDelete" onClick={()=> console.log(params.row.id)}>Approve</button>
                  </>
              )
          }
        },
        
      ];
  return (
      <>
    <div style={{ height:650, width: '90%' }}>
      <DataGrid rows={data} columns={columns} 
      pageSize={8}
      //checkboxSelection
      selectionModel={selectedData}
      //disableSelectionOnClick
    //   onSelectionModelChange={
    //       setSelectedData()
    //   }
      />
    </div>
   
    
     </>
  );
}