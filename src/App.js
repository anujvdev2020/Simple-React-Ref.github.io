import React ,{Component}from "react";
import "./styles.css";
import RefsDemo from './RefsDemo'

export default class App extends React.Component{
  
  render(){
  return (
    <div className="App">
     
     <RefsDemo></RefsDemo>
    </div>
  );
}
}