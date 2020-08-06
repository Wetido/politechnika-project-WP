import Head from 'next/head';
import NavbarThird from '../../components/en/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Spacer from '../../components/en/spacer';


const Wspolpraca = (props) => (

  <body>

  <Head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

          <script dangerouslySetInnerHTML={{ __html: 
            `

            $('figure').on('click','img', function(){
              window.open($(this).attr('src'));
            })

            ` 
          }} />

  </Head>

    <div>

      <NavbarThird/>
    
      <h1 class = "news-header">{props.posts.title.rendered}</h1>
      <Spacer></Spacer>
      <div class = "grid-container">
               <div dangerouslySetInnerHTML={{ __html:props.posts.content.rendered}} /> 

      </div>

    </div>



    <style >{` 

h2{
padding: 30px 0 0 0;
text-transform: uppercase;
letter-spacing: 2px;
font-weight: bold;
font-size: 1.2rem;
text-align: center;
}

p{
  padding: 30px 0 0 0;
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
width: 50%;
}
.wp-block-image img{
  width: 100%;
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

.wp-block-embed__wrapper:active {
box-shadow: none;
top: 5px;
}

ul{
    margin-left: 5%;
    margin-right: 5%;
}
`}</style>

</body>

);



Wspolpraca.getInitialProps = async () => {
const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/pages?slug=wspolpraca`)
return {
  posts: response.data[0]
}
}

export default Wspolpraca;


