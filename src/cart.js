import React,{Component} from 'react';
import './App.css';
import { Icon } from "antd";

const Cart =() => {
return (
    <div class="carte">
     <h1 class="phrase">CREDIT CARD</h1>
     <div class="pus1">
     <img src="https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg?fbclid=IwAR2DVqImIylDmxP0yLAJO1AtVSLTc8fencxIzUtycvgBfPU9ImIAZQFnVEY" width="70" height="50"></img></div>
<div class="part">
     <div class="chiffres">
     <h1 class="chiff1">7253 5236 7895 1245</h1>
     <h2 class="chiff">5422</h2>
     <h2 class="chiff">CARDHOLDER</h2>
     </div>
     <div class="part2">
     <div class="date">
     
     <h6>VALID<br/>THRU</h6>
     <div class="icone">
     <Icon type="caret-right" /></div>
     </div>
     <div class="month">
    
     <h6>MONTH/YEAR<br/><span>11/50</span></h6><br/>
     </div></div>
     <div class="pus">
    
     <img src="https://www.elektrischvaren-accu.nl/Files/6/88000/88645/FileBrowser/betalingslogo/credit-card-logo.jpg"width="90" height="100"></img>
     </div>
     

     </div>
   </div>
   
    
);

}
export default Cart;