
import NavbarThird from '../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Cookies from 'universal-cookie';

import Spacer from '../components/Spacer';

function removeParagraphTags (excerpt) {
  return excerpt.substr(3, excerpt.length - 8)
}


  const NewsPage = (props) => (

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
                <Link href={`/aktualnosci/[slug]`} as={`/aktualnosci/${post.slug}`}>
                <li key={ post.id }  class="post-article">
                <div>

                  <h1 class="post-title">{ post.title.rendered }</h1> 
                  <p dangerouslySetInnerHTML={{ __html: removeParagraphTags(post.excerpt.rendered)}}/>           {/* do poprawienia */}
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


  const instance = axios.create({
    baseURL: 'http://localhost:8000/wp-json/wp/v2/posts',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMCIsImlhdCI6MTU5NTYwNzY1NCwibmJmIjoxNTk1NjA3NjU0LCJleHAiOjE1OTYyMTI0NTQsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.mtLXiyEyvGhFKdLKIYFEhil186ptJrPjfgzjJFg3C5M'}
  });

 function getData(){

    instance.get('/')
    .then(response => {
      console.log(response)
      return response.data;
    })
  }


NewsPage.getInitialProps = async () => {

  const cookies = new Cookies();
  const token = cookies.get('token');
  var response;

  if( token != null){

    const api = 'http://localhost:8000/wp-json/wp/v2/posts?&status=private'; 
    response = await axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}} );
  }

  else{

    const api = 'http://localhost:8000/wp-json/wp/v2/posts/'; 
    response = await axios.get(api);

  
  }
  
  return {
      posts: response.data
  }
}



export default NewsPage;


