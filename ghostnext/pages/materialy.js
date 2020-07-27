
import NavbarThird from '../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Cookies from 'universal-cookie';

import Spacer from '../components/Spacer';

function removeParagraphTags (excerpt) {
  return excerpt.substr(3, excerpt.length - 8)
}


  const Materials = (props) => (

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
                <Link href={`/materialy/[slug]`} as={`/materialy/${post.slug}`}>
                <li key={ post.id }  class="post-article">
                <div>

                  <h1 class="post-title">{ post.title.rendered }</h1> 
                  {/* <p dangerouslySetInnerHTML={{ __html: removeParagraphTags(post.excerpt.rendered)}}/>           */}
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



.articles-wrapper {

  margin: 20px;

}

.post-title{

  padding: 20px 0 0 0;
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

  padding: 30px;
  margin: 10px 0px 10px 10px;
  list-style: none;
  display: inline-block;
  width: 49%;
  height: 300px;
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




`}</style>

   </div>
  );




 Materials.getInitialProps = async () => {

  const cookies = new Cookies();
  const token = cookies.get('token');
  var response;

  const api = 'http://localhost:8000/wp-json/wp/v2/materialy?&status=private'; 
  response = await axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}} );



  return {
      posts: response.data
  }
}



export default Materials;

