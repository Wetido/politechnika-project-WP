
import NavbarThird from'../../../components/pl/Navbar-third';
import axios from 'axios'
import Spacer from '../../../components/pl/Spacer';
import Head from 'next/head';
//TU ZNAJDUJE SIĘ POJEDYNCZY POST GALERII

const PostPage = (props) => {
  

  // Render post title and content in the page from props
    return (
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


        <NavbarThird/>
        <main>

          <h1 class = "news-header">{props.post.title.rendered}</h1>
          <Spacer></Spacer>
          <div class = "grid-container">

                <div dangerouslySetInnerHTML={{ __html:props.post.content.rendered}} />

          </div>
        </main>

      <style>{`


.news-header{
        
  padding: 30px 0 0 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  color:black;
}

      main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: sans-serif;
      }
      h1 {
        color: coral;
      }
      
      .grid-container {
        columns: 3;
        column-gap: 3rem;
        width: 85%;
        margin: 0 auto;
      }

      figure {
        width: 150px;
        margin: 0 1.5rem 1.5rem 0;
        display: inline-block;
        width: 100%;
        border: solid 2px black;
        padding: 5px;
        box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
        border-radius: 5px;
        transition: all .25s ease-in-out;
      }

      
      figure:hover img {
        filter: grayscale(0);
        padding: 10px;
      }

      figure:hover {
        border-color: coral;
      }
      
      img {
        width: 100%;
        filter: grayscale(100%);
        border-radius: 5px;
        transition: all .25s ease-in-out;
      }

      figcaption {
        margin: 5px 0;
        padding: 0;
        text-align: center;
        font-style: italic;
      }


      @media screen and (max-width: 1376px) {
        .grid-container {
          columns: 2;
          column-gap: 2rem;
          width: 90%;
        }
      }

      @media screen and (max-width: 768px) {
        .grid-container {
          columns: 1;
          column-gap: 2rem;
          width: 70%;
        }
      }

      
      
      ul{
      
        list-style: none;
      }



      `}</style>

      </body>

      )
  }


  PostPage.getInitialProps = async (params) => {
    const response = await axios.get( `http://localhost:8000/wp-json/wp/v2/galeria?slug=${ params.query.slug }` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  };
  


export default PostPage





