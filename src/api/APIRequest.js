import axios from "axios";
import store from "../redux/store/store";
import {setProductList} from "../redux/state/product-state-slice";

const BaseURL="https://crud.teamrabbil.com/api/v1"
export async function CreateRequest(PostBody){
  let URL=BaseURL+"/CreateProduct";
  let result= await axios.post(URL,PostBody);
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
  let URL=BaseURL+"/ReadProduct";
  let result= await axios.get(URL);
  if(result.status===200 && result.data['status']==="success"){
    store.dispatch(setProductList(result.data['data']))
  }
  else{
    store.dispatch(setProductList([]))
  }
}



export async function DeleteRequest(id){
  let URL=BaseURL+"/DeleteProduct"+id;
  let result= await axios.get(URL);
  if(result.status===200 && result.data['status']==="success"){
    return true;
  }
  else{
    return false;
  }
}
