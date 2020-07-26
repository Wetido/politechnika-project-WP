
import NavbarThird from '../../components/Navbar-third';
import React, { Component, Fragment } from 'react'
import axios from 'axios'



  const Historia = (props) => (

      <body>
        <NavbarThird/>
        <main>
          <h1 class = "title">{props.posts.title.rendered}</h1>
          <div class = "grid-container">
                   <div dangerouslySetInnerHTML={{ __html:props.posts.content.rendered}} /> 
            <div class="element"><div dangerouslySetInnerHTML={{ __html:props.posts.excerpt.rendered}} /> </div>
          </div>

        </main>



        <style >{` 

///////////////////////////////

body {
 background: #f5f0f0;

}
.element{
  padding:1000px;
}

`}</style>

   </body>
  );



Historia.getInitialProps = async () => {
  const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/pages?slug=historia`)
  return {
      posts: response.data[0]
  }
}

export default Historia;


