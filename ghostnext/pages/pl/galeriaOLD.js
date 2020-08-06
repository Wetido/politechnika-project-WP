
import Link from 'next/link';
import NavbarThird from '../../components/pl/Navbar-third';
import Spacer from '../../components/pl/spacer';
import axios from 'axios';
//STRONA GŁÓWNA GALERII

function getImg(excpert){

  const startPosition = 'src=';
  const endPosition = '.jpg';

  var start = ( excpert.indexOf(startPosition) );
  var end = ( excpert.indexOf(endPosition) );

  console.log(start);
  console.log(end);

  return excpert.slice(start +5 ,end + 4);
}


const GalleryPage = (props) => {
    return (

        <body>
            
            <NavbarThird/>
            <section>
                <ul class = "page">
                <h2 class="news-header">Najnowsze galerie zdjęć</h2>
                <Spacer></Spacer>
                <br/>
                        {props.posts.map(posts => (

                        <div class="post-div">
                        <Link href={`galeria/[slug]`} as={`galeria/${posts.slug}`}>
            
                            <li key={posts.id} class="post-article">

                            <div>  
                                <a class = "post-title">{posts.title.rendered}</a>
                            </div>

                            <img src = {getImg(posts.content.rendered)}/>


                            </li>

                        </Link>
                        </div>

                        ))}
                 </ul>
            </section>

         <style >{`


          body {
            background: #f5f0f0;
        
            }
        
            .news-header{
        
              padding: 30px 0 0 0;
              text-transform: uppercase;
              letter-spacing: 2px;
              font-weight: bold;
              font-size: 1.8rem;
              text-align: center;
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

    )
  }


  
  GalleryPage.getInitialProps = async () => {
    const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/galeria`)
    return {
        posts: response.data
    }
  }
  
  export default GalleryPage;