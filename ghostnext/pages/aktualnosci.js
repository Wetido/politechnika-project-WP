
import NavbarThird from '../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Link from 'next/link';


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



NewsPage.getInitialProps = async () => {
  const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/posts?tags=2`)
  return {
      posts: response.data
  }
}

export default NewsPage;


