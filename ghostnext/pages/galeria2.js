
import NavbarThird from '../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Cookies from 'universal-cookie';

import Spacer from '../components/Spacer';

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


  const GalleryPage2 = (props) => (

      <div>
        <NavbarThird></NavbarThird>
        <h2 class="news-header">Najnowsze posty</h2>
        <Spacer/>


        <section class="articles-wrapper"> 
        <ul class = "page">
          {
            props.posts.map( post => {
              return (
              <div class="single-post">
                <Link href={`/galeria/[slug]`} as={`/galeria/${post.slug}`}>
                <li key={ post.id }  class="post-article">
                <div>

                  <h1 class="post-title">{ post.title.rendered }</h1> 
                  <div class="image-wrapper">
                  <img src = {getImg(post.content.rendered)} class="image"></img>
                  </div>
                </div>
                </li>       
                </Link>
              </div>
              )
            })}
          </ul>
        </section>


        <style >{` 

///////////////////////////////

.image-wrapper{

}

.image{
  width: 100%;
  max-height: 10%;
}

.articles-wrapper {

  margin: 20px;

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

  padding: 30px;
  margin: 10px 0px 10px 10px;
  list-style: none;
  display: inline-block;
  width: 49%;
  height: 300px;
  text-align: center;
  background: black;
  border-radius: 25px;
  background-color: #cecece;
  border: 1px solid #3498db;
  position: relative;
  overflow: hidden;

}





`}</style>

   </div>
  );


  GalleryPage2.getInitialProps = async () => {
    const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/galeria`)
    return {
        posts: response.data
    }
  }

export default GalleryPage2;


