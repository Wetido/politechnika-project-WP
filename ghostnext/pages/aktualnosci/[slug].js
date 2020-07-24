
import Head from 'next/head';
import NavbarThird from '../../components/Navbar-third';
import axios from 'axios';
import dynamic from 'next/dynamic';


//GENEROWANIE JAKEIKOLWIEK POSTU GDY MAMY DOSTEP DO JEGO ENDPOINTU
//NP. USER MOZE WPISAC domena/zdjecia2020 i zostanie mu wyswietlona galeria zdj ze stylami 
//które są dostępne dla zwykłego postu. Ponieważ style galerii dostępne są pod adresem
//domena/galeria/2020 i tam znajduje się stylizowanie galerii. Trzeba coś z tym zrobić poprawiajac te endpointy.
//Tak samo możeny przejść pod adres domena/galeria/welcome i uzyskamy zwykł post w stylu galerii.

const ImageWrapper = dynamic( () => 
import('../../components/image-wrapper'), { ssr: false } )

const PostPage = (props) => {
    return (
      <div>

          <NavbarThird></NavbarThird>

          <main class="single-post-box">
          <ImageWrapper greeting={props.post}/>

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
      .wp-block-file{
        background-color: #353a40;
        border: none;
        color: white;
        padding: 12px 30px;
        cursor: pointer;
        font-size: 20px;
        text-decoration:none;
      }
      .wp-block-file__button
      {
        color:white;
      visibility:hidden;
      }

      .grid-container{

        padding: 30px;
      }


      img {
        width: 100%;
        heigth: 100%;
        border-radius: 5px;
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





