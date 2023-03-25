import React, {useEffect} from 'react';
import {DeleteRequest, ReadRequest} from "../api/APIRequest";
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

const ProductList = () => {


    useEffect(()=>{
        (async ()=>{
              await ReadRequest();
         })()
    },[])

    let DataList=useSelector((state)=>(state.product.List));

    const DeleteItem=async (_id) => {
      let result= await DeleteRequest(_id);
      await ReadRequest();
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped">

                            <thead>
                                <tr>
                                    <th>ProductCode</th>
                                    <th>ProductName</th>
                                    <th>Qty</th>
                                    <th>TotalPrice</th>
                                    <th>UnitPrice</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                DataList.map((item,index)=>{
                                    return(
                                        <tr key={index.toString()}>
                                            <td>{item['ProductCode']}</td>
                                            <td>{item['ProductName']}</td>
                                            <td>{item['Qty']}</td>
                                            <td>{item['TotalPrice']}</td>
                                            <td>{item['UnitPrice']}</td>
                                            <td><NavLink to={"/create?id="+item['_id']} className="btn btn-primary btn-sm">Edit</NavLink></td>
                                            <td><button onClick={()=>{DeleteItem(item['_id'])}} className="btn btn-danger btn-sm">Delete</button></td>
                                        </tr>
                                    )
                                })

                            }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProductList;