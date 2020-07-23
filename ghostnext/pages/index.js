
import React from "react";
import dynamic from 'next/dynamic';
import Carousel from '../components/new-gallery';

import Head from 'next/head';
import NavbarThird from '../components/Navbar-third';
import Workers from '../components/Workers';
import Footer from '../components/footer';

import Link from 'next/link';
import axios from 'axios';



const NoSSRToolbar = dynamic( () => 
import('../components/dismissible-banner'), { ssr: false } )


const IndexPage = (props) => (
 <body>
<Head>
<link rel="shortcut icon" href="ghostnext\public\favicon.ico" />
</Head>


  <div>

    <NavbarThird/>

    <section class="padding-box">
    <Carousel/>
    

    <h2 class="news-branch">Aktualności</h2>
    <ul class = "box">

        {props.posts.map(post => (
            

            <li key={post.id} class="post-li">

                <h1 class = "post-a">{post.title.rendered}</h1>
                <p>{post.excerpt.rendered}</p>           {/* do poprawienia */}
                <Link href={`/aktualnosci/[slug]`} as={`/aktualnosci/${post.slug}`}>
                <button class="view-more">Zobacz więcej</button> 
                </Link>
            </li>

          
        ))}
      </ul>
      
    <Workers/>
    </section>
    <Footer/>


  </div>

  <style >{`

  .padding-box{

    padding: 40px 80px 20px 80px;
  }


  body {
    background: #f5f0f0;

  }


   .news-branch{
    padding-left: 60px;
    padding-top: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
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



