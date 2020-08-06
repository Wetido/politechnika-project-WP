
import Head from 'next/head';
import axios from 'axios';

import obrazek from '../../images/1.jpg';
import obrazek2 from '../../images/2.jpg';
import obrazek3 from '../../images/3.jpg';
import obrazek4 from '../../images/4.jpg';
import obrazek5 from '../../images/article.png';

const ImageWrapper = (props) => (
<div>
<Head>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <script dangerouslySetInnerHTML={{ __html: 
            `
            var image = document.querySelector('.wrapper');

            var id = ${props.greeting.id};
              

            console.log(id);
            console.log(id%3);

            if( (id % 11) == 0){

              image.style.backgroundImage = "url('${obrazek}')";
            } else if( (id % 13) == 0){

              image.style.backgroundImage = "url('${obrazek2}')";
            } else if( (id % 3) == 0){

              image.style.backgroundImage = "url('${obrazek3}')";
            } else if( (id % 2) == 0) {

              image.style.backgroundImage = "url('${obrazek4}')";
            } else {

              image.style.backgroundImage = "url('${obrazek5}')";
            }
            ` }} />


          </Head>

          
          <div class="wrapper">
           
            <h1 class = "title">{props.greeting.title.rendered}</h1>


          </div>
    
   <style >{`

.wrapper{

    background: url('${obrazek2}') no-repeat center center fixed;
    background-size: cover;
    transition: all 0.4s ease;
    padding: 80px;
    margin: 0 0 30px 0;
    text-align: left;
    height: 40vh;
  }

  .title {  
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bold;
    color: black;
    background:rgba(255,255,255, 0.3);
    padding:10px;
    background-size: auto;
    font-family:Poppins;
  }

  
  @media screen and (max-width: 769px) {
    .title{


      font-size: 30px;
      text-allign: center;
    }
    `}</style> 

</div> 
);

export default ImageWrapper;