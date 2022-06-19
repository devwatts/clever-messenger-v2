import DashBoard from "../components/dashboard.js";
import Error404 from "../components/error.js";

export default function returnComponent(value){
    if(value == 'Dashboard'){
      return (<DashBoard></DashBoard>);
    }else{
      return(<Error404></Error404>);
    }
  }
  