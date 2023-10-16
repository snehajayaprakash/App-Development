import React from 'react';
import Navbar from '../components/navbar/NavBar';
import { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux';
import Footers from '../components/navbar/Footer';
import './dashboard.css';
import "./home.css"
import {Link, useNavigate} from 'react-router-dom'
import food11 from "../assets/food11.jpg"
import food from "../assets/food2.jpeg"
import volun from "../assets/volun.JPG"
import foodfinals from "../assets/foodfinals.jpg"

import home9 from "../assets/home9.jpg"
import hv1 from "../assets/hv1.mp4"
import h2 from "../assets/h2.mp4"
const Dashboard = () => {
  const user = useSelector((state) => state.user.value);
  const navigate=useNavigate();
  //let arr=[home6,home5,home8];
  let arr=[food11,volun];

  const [index,setIndex]=useState(0);

  useEffect(() => {
    setTimeout(()=>{
      if(index<arr.length-1){
        setIndex(index+1);
      }else{
        setIndex(0);
      }
    },2000)
  }, [index])


  return (
    <div>
      <Navbar />
      <div className='dash-welcome'>Welcome back {user.username}!!</div>

     
      <div className='wrap'>
     
     <h2 className='mainhead'>
     JOIN THE World against food waste !!
     </h2>
     <div className='body'>
         <div>
         <Link to='/purchase'> <img src={arr[index]} id="slider"/> </Link>
         </div>

     </div>
     
     <div className='hom1'>
     <div className='homepic'>
     {/* <h2 className='head1'>
     Toys and Games for Babies & Kids.
     </h2> */}
     <img src="https://img.freepik.com/free-vector/tiny-people-standing-near-box-donation-food-delivery-volunteers-giving-healthy-grocery-goods-charity-flat-vector-illustration-social-support-humanitarian-help-community-sharing-concept_74855-21023.jpg?size=626&ext=jpg&ga=GA1.1.1394372621.1669354876&semt=ais"/>
     <div>
    
     
     <h2 id='titlehome'>
      Donate some food.
     </h2>

     <p id='title1'>
     "At Share Your Bite, our mission is to create a sustainable and connected food-sharing community that empowers individuals, businesses, and organizations to make a meaningful impact.We are dedicated to reducing food waste by facilitating the sharing of surplus and excess food, ensuring that no edible food goes to waste.
     </p>

     <button id='btnbaby' type='submit'><Link to={'/donate'}>Donate</Link></button>
     </div>
     </div>
     < div className='hom2'>
   
     
     <h2 id='nexttitle'>
     The Secret Ingredient is You...
       </h2>
       <p id='title1'>
       With Volunteer for Food, we believe that by volunteering time and effort, we can make a significant and lasting impact on the lives of individuals and communities facing food insecurity, building a more compassionate and interconnected world."
     </p>
     <button id='btnfood' type='submit'><Link to={'/volunteer'}>Become a volunteer today</Link> </button>
   
   </div>


     <h2 className='head1'>
     Make Your Extra Food Extraordinary
     </h2>

     </div>
     <video width="1500" height="600" autoPlay loop style={{marginLeft:"0%"}}>
     <source src={h2} type="video/mp4"/>
     </video>
     <p></p>
     <p></p>
     {/* <img src="https://www.funcorp.in/cdn/shop/files/MobiKwik_4-1_1270x.jpg?v=1671519550" style={{width:'1800px'}}/> */}
   
  
     {/* <img src={home9} style={{width:"1800px"}}/> */}
     {/* <img src={home6} style={{width:"1800px"}}/> */}
     
     {/* <Link to='shop'><img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_feeding_&_kids_food_090523_01.jpg"/></Link> */}

   
  
     
     
   </div>

      

      <Footers />
    </div>
  );
};

export default Dashboard;
