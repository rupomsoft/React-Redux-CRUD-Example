import React, {useEffect} from 'react';
import {ReadRequest} from "../api/APIRequest";
import {useSelector} from "react-redux";

const ProductList = () => {


    useEffect(()=>{
        (async ()=>{
              await ReadRequest();
         })()
    })


    let DataList=useSelector((state)=>(state.product.List));

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