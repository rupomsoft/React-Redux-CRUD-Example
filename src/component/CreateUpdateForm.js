import React from 'react';
import {OnChangeProductInput} from "../redux/state/product-state-slice";
import store from "../redux/store/store";
import {useSelector} from "react-redux";
import {CreateRequest} from "../api/APIRequest";

const CreateUpdateForm = () => {

    let FormValue=useSelector((state)=>(state.product.FormValue));
    const SaveData=async () => {
        await CreateRequest(FormValue);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <label>Image </label>
                    <input onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3">
                    <label>Product Code </label>
                    <input onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"ProductCode",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3">
                    <label>Product name </label>
                    <input onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"ProductName",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3">
                    <label>Qty </label>
                    <input onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Qty",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3">
                    <label>Unit Price </label>
                    <input onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"UnitPrice",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3">
                    <label>Total Price  </label>
                    <input onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"TotalPrice",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3">
                    <button onClick={SaveData} className="mt-3 btn btn-primary">Save Change</button>
                </div>
            </div>
        </div>
    );
};

export default CreateUpdateForm;