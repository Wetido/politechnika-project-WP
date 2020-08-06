
import NavbarThird from '../../../components/en/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Spacer from '../../../components/en/spacer'
import Footer from '../../../components/en/footer';


  const Nagrody = (props) => (

      <body>
        <NavbarThird/>
        <main>
          <h1 class = "news-header">{props.posts.title.rendered}</h1>
          <Spacer></Spacer>
          <div class = "grid-container">
                   <div dangerouslySetInnerHTML={{ __html:props.posts.content.rendered}} /> 

          </div>

        </main>



        <style >{` 
h2{
    padding: 30px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
}

.news-header{

    padding: 30px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 1.8rem;
    text-align: center;
  }
body {
 background: #f5f0f0;

}
.element{
  padding:1000px;
}
.wp-block-image{
max-width:80% 
border: 2px solid black;
display: flex;
margin-left: auto;
margin-right: auto;
width: 30%;
}
.wp-block-embed__wrapper{
    background-color: #353a40;
    box-shadow: 0 5px 0 #736f72;
    color: white;
    padding: 1em 1.5em;
    position: block;
    text-decoration: none;
    text-transform: uppercase;
    width:30%;
    margin-left: auto;
    margin-right: auto;

}
.wp-block-embed__wrapper:hover
{
    background-color: #3d363c;
    cursor: pointer;
}
.wp-block-embed__wrapper:active {
    box-shadow: none;
    top: 5px;
  }
`}</style>

   </body>
   
  );



Nagrody.getInitialProps = async () => {
  const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/pages?slug=nagrody`)
  return {
      posts: response.data[0]
  }
}

export default Nagrody;


