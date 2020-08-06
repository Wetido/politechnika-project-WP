
import NavbarThird from '../../components/pl/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Cookies from 'universal-cookie';

  const NewsPage = (props) => (

      <body>
        <NavbarThird></NavbarThird>
        <section>
        <ul class = "page">
        <h2 class="news-header">Najnowsze posty</h2>
        <br/>
          {
            props.posts.map( post => {
              return (
              <div>
                <Link href={`/aktualnosci/[slug]`} as={`/aktualnosci/${post.slug}`}>
                <li key={ post.id }  class="post-article">
                <div>

                  <h1 class="post-title">{ post.title.rendered }</h1> 
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

body {
 background: #f5f0f0;

}

.news-header{

  padding-left: 20px;
  font-size: 30px;
}

.post-title{

  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.8rem;
}


.page {
  padding: 2em;
  list-style: none;
}

.post-div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
  padding: 1px;
  word-wrap: break-word;
}

.post-article {
  padding: 2em;
  background: #fff;
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.3),
    -webkit-box-shadow: 9px 10px 76px -20px rgba(0,0,0,1);
    -moz-box-shadow: 9px 10px 76px -20px rgba(0,0,0,1);
    box-shadow: 9px 10px 76px -20px rgba(0,0,0,1);
    transition: 0.2s;

}

.post-article:hover{

  box-shadow:
    2px rgba(0, 0, 0, 0.8),
  padding: 3px;
  margin: 5px;
  cursor: pointer;
}

`}</style>

   </body>
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


