
import React from "react";
import dynamic from 'next/dynamic';
import Carousel from '../components/pl/slider';

import Head from 'next/head';
import NavbarThird from '../components/pl/Navbar-third';
import Workers from '../components/pl/Workers';
import Footer from '../components/pl/footer';
import Spacer from '../components/pl/Spacer';

import Link from 'next/link';
import axios from 'axios';

import logo from '../images/logo.jpg';
import logo_napedy from '../images/logo-napedy.jpg';

const NoSSRWorkers = dynamic( () => 
import('../components/pl/workers'), { ssr: false } )


function removeParagraphTags (excerpt) {
  return excerpt.substr(3, excerpt.length - 8)
}



const IndexPage = (props) => (
 <body>
<Head>
<link rel="shortcut icon" href="ghostnext\public\favicon.ico" />

<script>
  
  </script>
</Head>


  <div class ="scroll-contatiner">


    <NavbarThird class = "navbar"></NavbarThird>
    <div class="padding-navbar"></div>




    <section class="carousel-wrapper">


      <Carousel class="carousel"/>
      <div class="logos">
        <img src={logo} class="logo-type"></img> 
        <img src={logo_napedy} class="logo-type"></img> 
      </div>
    </section>



    <section class="news-wrapper">
    <h2 class="news-branch">Aktualności</h2>
    <Spacer/>
    <ul class = "box">

        {props.posts.map(post => (
            

            <li key={post.id} class="post-li">

                <h1 class = "post-a">{post.title.rendered}</h1>

                <p dangerouslySetInnerHTML={{ __html: removeParagraphTags(post.excerpt.rendered)}}/>        

                <Link href={`/pl/aktualnosci/[slug]`} as={`/pl/aktualnosci/${post.slug}`}>
                <button class="view-more">Zobacz więcej</button> 
                </Link>
            </li>

          
        ))}
      </ul>  
    </section>
      
    <section class="workers-wrapper"> 


      <Workers/>

    </section>
    <Footer/>

    </div>




  <style >{`

  body {
    background: #f5f0f0;

  }

  .scroll-contatiner{
    
    overflow-y: scroll;
    height: 100vh;
    scroll-snap-type: mandatory;
    scroll-snap-points-y: repeat(100vh);
    scroll-snap-type: y mandatory;

  }


  section{

    scroll-snap-align: start;
    height: 100vh;

  }

  .logos{

    display: flex;
    padding: 15px 0 0 0;
  }

  .logo-type{

    margin: 5px auto 40px;
    width: 16%;
    height: 35%;
    

  }

  .carousel{

    background: #121111;
    padding: 3px;
  }


  .carousel-wrapper{

    background: #e3e3e3;
    padding: 120px;
  }

  .news-wrapper{

    background: #ebe8e8;

    padding: 100px 30px;
  }

  .workers-wrapper{

    background: #e3e3e3;
    padding: 120px;
  }

  .navbar{

    position: fixed;
    z-index: 20;
    width:100%;
  }

   .news-branch{
    padding-top: 0.7em;
    font-size: 2.4em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    text-align:center;
   }



   .box{
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0 auto;
    }
    
    .post-li{
      padding: 25px 40px 25px 40px;
      width: 31%;
      background-color: #cecece;
      border: 1px solid #3498db;
      border-radius: 25px;
      margin: 10px 10px 10px 10px;
      align-items: center;
      justify-content: space-around;
    }

    
    .view-more{

      border: 1px solid #3498db;
      background: none;
      padding: 10px 20px;
      font-size: 20px;
      font family: "montserrat";
      cusros: pointer;
      margin: 10px;
      color: #3498db;
      transition: 0.8s;
      position: relative:
      overflow:hidden;
      border-radius: 5px;
    }

    .post-li{

      padding: 30px;
      margin: 10px 0px 10px 10px;
      list-style: none;
      display: inline-block;
      width: 31%;
      height: auto;
      text-align: center;
    
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #3498db;
      position: relative;
      overflow: hidden;
      box-shadow:
        0 5px 10px rgba(0, 0, 0, 0.3),
        -webkit-box-shadow: 9px 10px 76px -20px rgba(0,0,0,1);
        -moz-box-shadow: 9px 10px 76px -20px rgba(0,0,0,1);
        box-shadow: 9px 10px 76px -20px rgba(0,0,0,1);
        transition: 0.2s;
    
    }
    .post-li:hover{
    
      box-shadow:
        2px rgba(0, 0, 0, 0.8),
      padding: 3px;
      margin: 5px;
      cursor: pointer;
    }


    .view-more:hover {
        color: coral;
    }

    @media screen and (max-width: 1200px) {
      .post-li{
        width: 45%;
      }

      .padding-box{

        padding: 40px 60px 10px 60px;
      }
    }

    @media screen and (max-width: 768px) {
      .post-li{
        width: 90%;
      }

      .padding-box{

        padding: 10px 20px 10px 20px;
      }
    }

    `}</style> 

  </body>
);

IndexPage.getInitialProps = async () => {
  const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/posts?per_page=3`);
  return {
      posts: response.data
  }
}


export default IndexPage;



