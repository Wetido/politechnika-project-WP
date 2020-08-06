import Link from 'next/link';
import Head from 'next/head';

function Toolbar({ Component, pageProps }) {
    return ( 
    
    <body>

      <Head>
     
        <script dangerouslySetInnerHTML={{ __html: 
        `
          var navSlide = () =>{
          
          var burger = document.querySelector('.burger');
          var nav = document.querySelector('.nav-bar');
          var navLinks = document.querySelectorAll('.nav-bar li');

          burger.addEventListener('click', ()=> {

            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
          })

          navLinks.forEach((link) =>{
            if( link.style.animation){
              link.style.animation = '';
            } else {

              link.style.animation = 'navLinkFade 0.5s ease forwards 0.8s';
            }

            
          });
        }

        navSlide();


        ` }} />

<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&display=swap" rel="stylesheet"/>

      </Head>
    <section>
      <nav>
         <div class = "logo">
           

           <Link href={'/'}><h4>KNME</h4></Link>
          </div>

          <ul class="nav-bar">

            <li class = "navbar-li"><Link href={'/o-katedrze'}><a class = "navbar-a">O katedrze
              </a></Link></li>

            <li class = "navbar-li"><Link href={'/aktualnosci'}><a class = "navbar-a">Aktualnosci
              </a></Link></li>
  
             <li class = "navbar-li"><Link href={`/gallery`}  ><a class = "navbar-a">Galeria
              </a></Link></li>
  
            <li class = "navbar-li"><a class = "navbar-a">Kontakt
               </a> </li>
                  
          </ul>

          <div class="burger">
            <div class="line1"> </div>  
            <div class="line2"> </div>  
            <div class="line3"> </div>  
          </div> 
        </nav>
      </section>

  
      <style >{`

      *{
        margin: 0px;
        padding 0px;
        box-sizing: border-box;

      }

      nav{

        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 8vh;
        background-color: rgb(136,136,136);
        font-family: 'Poppins', sans-serif;
      }

      .logo{
        color: white;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 22px;
      }

      .nav-bar{

        display:flex;
        justify-content: space-around;
        width: 35%;
      }

      .nav-bar a{

        color: white;
        text-decoration: none;
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 14px;
      }

      .nav-bar li{

        list-style: none;
      }

      .burger{

        display: none;
      }

      .burger div{
        width: 25px;
        height: 3px;
        background-color: white;
        margin: 5px;
        transition: all 0.3s ease;
      }

      @media screen and (max-width: 1200px) {
        .nav-bar{
          width: 50%;
        }
      }

      @media screen and (max-width: 850px) {

        body{
          overflow-x: hidden;
        }
        .nav-bar{
          position: absolute;
          right: 0px;
          height: 92vh;
          top: 8vh;
          background-color: rgb(136,136,136);
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 25%;
          transform: translateX(100%);
          transition: transform 0.5s ease-in;
          z-index: 10;
        }

        .nav-bar li{

          opacity: 0;
        }

        .burger{
          display:block;
        }
      }

      .nav-active{

        transform: translateX(0%);
      }

      @keyframes navLinkFade{

        from{
          opacity: 0;
          transform: translateX(50px);
        }
        to{
          opacity: 1;
          transform: translateX(0px);
        }
      }

      .toggle .line1{

        transform: rotate(-48deg) translate(-5.5px,6px);
      }

      .toggle .line2{

        opacity: 0;
      }

      .toggle .line3{

        transform: rotate(48deg) translate(-5.5px, -6px);
      }

`}</style>

  
    </body>
    )
  }
  
export default Toolbar;

