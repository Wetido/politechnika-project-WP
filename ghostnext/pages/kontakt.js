
import NavbarThird from '../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Footer from '../components/footer';
import Spacer from '../components/Spacer';
import Form from '../components/contact-form';
import map from '../images/Mapa.jpg';

  const Contact = () => (

      <div>
        <NavbarThird></NavbarThird>
        <h2 class="news-header">Odezwij się do nas...</h2>
        <Spacer/>

        <Form/>

        <h2 class="news-header">Jak dojadę?</h2>
        <Spacer></Spacer>
        <div class="mapa">
        <img class="mapa2" src={map}></img>
        </div>


        <Footer></Footer>
        <style >{` 

.news-header{

    padding: 30px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
  }
  img.mapa2{
    border: 2px solid black;
    border-radius: 50px 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
.mapa{
    
padding:0 0 30px 0;

}

`}</style>

   </div>
  );




export default Contact;


