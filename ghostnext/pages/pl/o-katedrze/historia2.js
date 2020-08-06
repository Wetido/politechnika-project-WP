
import NavbarThird from '../../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Head from 'next/head';
import Spacer from '../../components/spacer';


  const Historia = (props) => (
    <div>
<Head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


</Head>

        <NavbarThird/>
        <main>


<div class="">
  <div class="container">
  <h2 class="news-header">Nasza Historia</h2>
                <Spacer></Spacer>

    <div class="row align-items-center how-it-works d-flex">
      <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">1</div>
      </div>
      <div class="col-6">
        <h5>Fully Responsive</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
  
    <div class="row timeline">
      <div class="col-2">
        <div class="corner top-right"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner left-bottom"></div>
      </div>
    </div>
  
    <div class="row align-items-center justify-content-end how-it-works d-flex">
      <div class="col-6 text-right">
        <h5>Using Bootstrap</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
      <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">2</div>
      </div>
    </div>

    <div class="row timeline">
      <div class="col-2">
        <div class="corner right-bottom"></div>
      </div>
      <div class="col-8">
        <hr/>
      </div>
      <div class="col-2">
        <div class="corner top-left"></div>
      </div>
    </div>

    <div class="row align-items-center how-it-works d-flex">
      <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
        <div class="circle font-weight-bold">3</div>
      </div>
      <div class="col-6">
        <h5>Now with Pug and Sass</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.</p>
      </div>
    </div>
  </div>
</div>

        </main>



        <style >{` 
.news-header{

    padding: 30px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
}


.circle {
    padding: 13px 20px;
    border-radius: 50%;
    background-color: black;
    color: #fff;
    max-height: 50px;
    z-index: 2;
  }
  
  .how-it-works.row .col-2 {
    align-self: stretch;
  }
  .how-it-works.row .col-2::after {
    content: "";
    position: absolute;
    border-left: 3px solid black;
    z-index: 1;
  }
  .how-it-works.row .col-2.bottom::after {
    height: 50%;
    left: 50%;
    top: 50%;
  }
  .how-it-works.row .col-2.full::after {
    height: 100%;
    left: calc(50% - 3px);
  }
  .how-it-works.row .col-2.top::after {
    height: 50%;
    left: 50%;
    top: 0;
  }
  
  
  .timeline div {
    padding: 0;
    height: 40px;
  }
  .timeline hr {
    border-top: 3px solid black;
    margin: 0;
    top: 17px;
    position: relative;
  }
  .timeline .col-2 {
    display: flex;
    overflow: hidden;
  }
  .timeline .corner {
    border: 3px solid black;
    width: 100%;
    position: relative;
    border-radius: 15px;
  }
  .timeline .top-right {
    left: 50%;
    top: -50%;
  }
  .timeline .left-bottom {
    left: -50%;
    top: calc(50% - 3px);
  }
  .timeline .top-left {
    left: -50%;
    top: -50%;
  }
  .timeline .right-bottom {
    left: 50%;
    top: calc(50% - 3px);
  }
  
`}</style>
    </div>
  );



Historia.getInitialProps = async () => {
  const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/pages?slug=historia`)
  return {
      posts: response.data[0]
  }
}

export default Historia;


