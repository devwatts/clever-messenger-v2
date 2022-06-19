import DashBoard from "../components/dashboard.js";

export default function returnComponent(value){
    if(value == 'Dashboard'){
      return (<DashBoard></DashBoard>);
    }
  }
  