
import NavbarThird from '../../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Cookies from 'universal-cookie';

import Spacer from '../../components/Spacer';

function removeParagraphTags (excerpt) {
    return excerpt.substr(3, excerpt.length - 8)
  }
  
  
  function getImg(excpert){
  
    const startPosition = 'src=';
    const endPosition = '.jpg';
  
    var start = ( excpert.indexOf(startPosition) );
    var end = ( excpert.indexOf(endPosition) );
  
    console.log(start);
    console.log(end);
  
    return excpert.slice(start +5 ,end + 4);
  }

  const Workers = (props) => (

    <div>
      <NavbarThird></NavbarThird>
      <h2 class="news-header">Nasi pracownicy</h2>
      <Spacer/>


      <section class="articles-wrapper"> 
      <ul class = "page">
        {
          props.posts.map( post => {
            return (
              <Link href={`/pracownicy/[slug]`} as={`/pracownicy/${post.slug}`}>
            <div class="single-post">

                <li key={ post.id }  class="post-article">
                <div>
                    <h1 class="post-title">{ post.title.rendered }</h1> 
                    
                    <div class="fotki">
                    <img class="thumbnail-post" src = {getImg(post.content.rendered)} ></img>
                    </div>
                </div>
                </li>      
                </div>
            </Link>
            )
          })}
        </ul>
      </section>


      <style >{` 

///////////////////////////////



.fotki {
    height: 100%;
    width: 100%;
  
  
  }
  .thumbnail-post {
    height: auto;
    float: center;
    max-width: 70%;
  }
  
  .articles-wrapper {
  
    margin: 20px;
  
  }
  
  .post-title{
  
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 2rem;
  }
  
  .news-header{
  
    padding: 30px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
  }
  
  
  .page {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 80px 10px 70px;
  }
  
  .single-post{
  
    padding: 20px;
    margin: 10px 10px 10px 10px;
    list-style: none;
    display: inline-block;
    width: 32%;
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
  .single-post:hover{
  
    box-shadow:
      2px rgba(0, 0, 0, 0.8),
    padding: 3px;
    margin: 5px;
    cursor: pointer;
  }
  
  li{
  
    list-style: none;
  }
  
  ul{
  
    list-style: none;
  }
  
  @media screen and (max-width: 1200px){
    
    .post-title{
      font-size: 1.5rem;
    }
  
    .single-post{
      width:100%;
    }
  
    .page {
      margin: 0 0 0 0;
    }
  
    ul.page{
      padding: 0;
    }
  }
  
  @media screen and (max-width: 768px){
    
    .post-title{
      font-size: 1rem;
    }
  
  } 



`}</style>

 </div>
);





Workers.getInitialProps = async () => {



  const api = 'http://localhost:8000/wp-json/wp/v2/pracownicy/'; 
  var response = await axios.get(api);

  
return {
    posts: response.data
}
}



export default Workers;


