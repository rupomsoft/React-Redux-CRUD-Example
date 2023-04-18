import axios from "axios";
import store from "../redux/store/store";
import {OnChangeProductInput, setProductList} from "../redux/state/product-state-slice";
import {HideLoader, ShowLoader} from "../redux/state/settings-slice";

const BaseURL="https://crud.teamrabbil.com/api/v1"
export async function CreateRequest(PostBody,ObjectID){
  store.dispatch(ShowLoader());

  let URL=BaseURL+"/CreateProduct";

  if(ObjectID!==0){
    URL=BaseURL+"/UpdateProduct/"+ObjectID;
  }


  let result= await axios.post(URL,PostBody);
  store.dispatch(HideLoader())
  if(result.status===200 && result.data['status']==="success"){
    return true;
  }
  else{
    return false;
  }
}

export async function UpdateRequest(id){
  let URL=BaseURL+"/UpdateProduct/"+id;
  let PostBody={}
  let result= await axios.post(URL,PostBody);
  if(result.status===200 && result.data['status']==="success"){
    return true;
  }
  else{
    return false;
  }
}

export async function ReadRequest(){
  store.dispatch(ShowLoader())
  let URL=BaseURL+"/ReadProduct";
  let result= await axios.get(URL);
  store.dispatch(HideLoader())
  if(result.status===200 && result.data['status']==="success"){
    store.dispatch(setProductList(result.data['data']))
  }
  else{
    store.dispatch(setProductList([]))
  }
}

export async function DeleteRequest(id){
  store.dispatch(ShowLoader())
  let URL=BaseURL+"/DeleteProduct/"+id;
  let result= await axios.get(URL);
  store.dispatch(HideLoader())
  if(result.status===200 && result.data['status']==="success"){
    return true;
  }
  else{
    return false;
  }
}


export async function DetailsRequest(id){
  store.dispatch(ShowLoader())
  let URL=BaseURL+"/ReadProductByID/"+id;
  let result= await axios.get(URL);
  store.dispatch(HideLoader())
  if(result.status===200 && result.data['status']==="success"){
    let details=result.data['data'];
    store.dispatch(OnChangeProductInput({Name:"Img",Value:details[0]['Img']}))
    store.dispatch(OnChangeProductInput({Name:"ProductCode",Value:details[0]['ProductCode']}))
    store.dispatch(OnChangeProductInput({Name:"ProductName",Value:details[0]['ProductName']}))
    store.dispatch(OnChangeProductInput({Name:"Qty",Value:details[0]['Qty']}))
    store.dispatch(OnChangeProductInput({Name:"TotalPrice",Value:details[0]['TotalPrice']}))
    store.dispatch(OnChangeProductInput({Name:"UnitPrice",Value:details[0]['UnitPrice']}))
    return true;
  }
  else{
    return false;
  }
}
