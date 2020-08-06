import Link from 'next/link';
import Head from 'next/head';
import logo from '../../images/KNME_white.png';
import Cookies from 'universal-cookie';
//Link odpowiada za dynamiczne przekierowywanie z 
//folderu pages, na zasadzie np 
//pages/post/index.js

function logout() {
     
  const cookies = new Cookies();
  cookies.remove('token');
  window.location.reload(false);
  window.location.replace("http://localhost:3000/en/home");
 } 


class NavbarThird extends React.Component{

  constructor() {
    super();

    const cookies = new Cookies();
    this.token = cookies.get('token');
  }

  render(){

    if( this.token != null){

      return(
        <div>
        <Head>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
        </Head>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand " href="#" ><Link href={'/'}><img class="logo" src={logo}  alt=""/></Link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
        
          <Link href={'/en/home'}><a class="nav-item nav-link" > home<span class="sr-only">(current)</span></a></Link>
          <Link href={'/en/o-katedrze'}><a class="nav-item nav-link" > about department </a></Link>
          <Link href={'/en/aktualnosci'}><a class="nav-item nav-link " > news</a></Link>
          <Link href={'/en/galeria'}><a class="nav-item nav-link " >gallery</a></Link>
          <Link href={'/en/kontakt'}><a class="nav-item nav-link ">contact</a></Link>
          <Link href={'/en/wspolpraca'}><a class="nav-item nav-link ">our partners</a></Link>
          <a onClick={logout} class="nav-item nav-link ">log out</a>
          <Link href={'/en/materialy'}><a class="nav-item nav-link ">materials</a></Link>
          <Link href={'/'}><a class="nav-item nav-link ">polish version</a></Link>
          
            
          </div>
        </div>
        </nav>
        <style>{`
        .logo{
            width:150px;
            height:50px;
            border:none;
        }
        
        .nav-item {
        
          text-transform: uppercase;
          letter-spacing: 3px;
          color:white;
          font-size:1em;
          font-family:Roboto;
        }
        
        
        
        `}</style>
        </div>
        )
    }
  
    else{
  
        return(
          <div>
          <Head>
          
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
              <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
              <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
          </Head>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand " href="#" ><Link href={'/'}><img class="logo" src={logo}  alt=""/></Link></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
          
            <Link href={'/en/home'}><a class="nav-item nav-link" > home<span class="sr-only">(current)</span></a></Link>
            <Link href={'/en/o-katedrze'}><a class="nav-item nav-link" > about department </a></Link>
            <Link href={'/en/aktualnosci'}><a class="nav-item nav-link " > news</a></Link>
            <Link href={'/en/galeria'}><a class="nav-item nav-link " > gallery</a></Link>
            <Link href={'/en/kontakt'}><a class="nav-item nav-link "> contact</a></Link>
            <Link href={'/en/wspolpraca'}><a class="nav-item nav-link ">our partners</a></Link>
            <Link href={'/en/login-page'}><a class="nav-item nav-link ">login</a></Link>
            <Link href={'/'}><a class="nav-item nav-link ">polish version</a></Link>
            
              
            </div>
          </div>
          </nav>
          <style>{`
          .logo{
              width:150px;
              height:50px;
              border:none;
          }
          
          .nav-item {
          
            text-transform: uppercase;
            letter-spacing: 3px;
            color:white;
            font-size:1em;
            font-family:Roboto;
          }
          
          
          
          `}</style>
          </div>
          )
  
    
    }


    
    }
  }



export default NavbarThird;