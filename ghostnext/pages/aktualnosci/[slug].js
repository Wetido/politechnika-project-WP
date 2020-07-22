import { getSinglePost } from '../api/posts';
import Head from 'next/head';
import NavbarThird from '../../components/Navbar-third';
import axios from 'axios';

//GENEROWANIE JAKEIKOLWIEK POSTU GDY MAMY DOSTEP DO JEGO ENDPOINTU
//NP. USER MOZE WPISAC domena/zdjecia2020 i zostanie mu wyswietlona galeria zdj ze stylami 
//które są dostępne dla zwykłego postu. Ponieważ style galerii dostępne są pod adresem
//domena/galeria/2020 i tam znajduje się stylizowanie galerii. Trzeba coś z tym zrobić poprawiajac te endpointy.
//Tak samo możeny przejść pod adres domena/galeria/welcome i uzyskamy zwykł post w stylu galerii.

const PostPage = (props) => {
    return (
      <div>
          <NavbarThird></NavbarThird>

          <main class="single-post-box">
          

          <div class="wrapper">
            <div class ="title-box">
                        <h1 class = "title">{props.post.title.rendered}</h1>
            </div>

          </div>
          <div class = "grid-container">
            <div class="vl">

            <div class="text"dangerouslySetInnerHTML={{ __html: props.post.content.rendered }} />
           </div>

          </div>
        </main>

      <style>{`

      *{
        font-family: 'Open Sans';
        line-height: 170%;
        color: #444;
      }

      .grid-container{

        padding: 30px;
      }

      .title {  
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: bold;
        color: black;
      }

      img {
        width: 100%;
        heigth: 100%;
        border-radius: 5px;
      }

      .wrapper{

        background: url('https://img.agrofakt.pl/wp-content/uploads/2019/07/100x478_zetor-wyrozniajace.png') no-repeat center center fixed;
        background-size: cover;
        transition: all 0.4s ease;
        padding: 80px;
        margin: 0 0 30px 0;
        text-align: left;
        height: 40vh;
      }

      .text{
        text-align: left;
        margin: 0 0 15px 12%; 
        width: 75%;
        padding: 5px;
        padding-left: 30px;

        border-left: 1px solid #cccccc;
        transition: all 0.4s ease;
      }

      

      @media screen and (max-width: 769px) {
        .title{


          font-size: 30px;
          text-allign: center;
        }
      }

      `}</style>

      </div>

      )
  }

  PostPage.getInitialProps = async (params) => {

    // Make request for posts.
    const response = await axios.get( `http://localhost:8000/wp-json/wp/v2/posts?slug=${ params.query.slug }` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  };
  




export default PostPage





