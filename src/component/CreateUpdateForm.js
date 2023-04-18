import React, {useEffect, useState} from 'react';
import {OnChangeProductInput, ResetProductFormValue} from "../redux/state/product-state-slice";
import store from "../redux/store/store";
import {useSelector} from "react-redux";
import {CreateRequest, DetailsRequest, ReadRequest} from "../api/APIRequest";
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const CreateUpdateForm = () => {

    let [ObjectID,SetObjectID]=useState(0);

    let navigate=useNavigate();
    let FormValue=useSelector((state)=>(state.product.FormValue));

    useEffect(()=>{
        let QueryStrings= new URLSearchParams(window.location.search);
        let id=QueryStrings.get('id');
        if(id!==null){
            SetObjectID(id);
            (async ()=>{
                await DetailsRequest(id);
            })()
        }
        else {
            store.dispatch(ResetProductFormValue())
        }
    },[])




    const SaveData=async () => {

        if(FormValue['Img'].length===0){
            toast.error("Image Required!");
        }
        else if(FormValue['ProductCode'].length===0){
            toast.error("Product Code Required!");
        }
        else if(FormValue['ProductName'].length===0){
            toast.error("Product Name Required!");
        }
        else if(FormValue['Qty'].length===0){
            toast.error("Product Qty Required!")
        }
        else if(FormValue['TotalPrice'].length===0){
            toast.error("Total Price Required!")
        }
        else if(FormValue['UnitPrice'].length===0){
            toast.error("Unit Price Required!")
        }
        else {
            await CreateRequest(FormValue,ObjectID);
            navigate("/");
        }


    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 p-2">
                    <label>Image </label>
                    <input value={FormValue['Img']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Img",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Product Code </label>
                    <input value={FormValue['ProductCode']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"ProductCode",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Product name </label>
                    <input value={FormValue['ProductName']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"ProductName",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2 ">
                    <label>Qty </label>
                    <input value={FormValue['Qty']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"Qty",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Unit Price </label>
                    <input value={FormValue['TotalPrice']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"UnitPrice",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <label>Total Price  </label>
                    <input value={FormValue['UnitPrice']} onChange={(e)=>{store.dispatch(OnChangeProductInput({Name:"TotalPrice",Value:e.target.value}))}} className="form-control form-control-sm"/>
                </div>
                <div className="col-md-3 p-2">
                    <button onClick={SaveData} className="mt-3 btn btn-primary">Save Change</button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default CreateUpdateForm;