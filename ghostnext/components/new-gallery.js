import Link from 'next/link';
import Head from 'next/head';
import p1 from '../images/1.jpg';
import p2 from '../images/2.jpg';
import p3 from '../images/3.jpg';
import p4 from '../images/4.jpg';
import p5 from '../images/5.jpg';
import p6 from '../images/6.jpg';
import p7 from '../images/7.jpg';
//Link odpowiada za dynamiczne przekierowywanie z 
//folderu pages, na zasadzie np 
//pages/post/index.js


const Carousel = () => (

<div>
    <Head>
    <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </Head>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  
  <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src={p6} alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Witajcie w naszej bajce</h5>
              <p>Spójrzcie jak tu pięknie, dobrobyt aż chce się żyć</p>
            </div>
        </div>
       
        <div class="carousel-item">
            <img class="d-block w-100" src={p7} alt="Second slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Witajcie w naszej bajce</h5>
              <p>Spójrzcie jak tu pięknie, dobrobyt aż chce się żyć</p>
          </div>
        </div>
        
        <div class="carousel-item">
          <img class="d-block w-100" src={p3} alt="Third slide"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>Witajcie w naszej bajce</h5>
            <p>Spójrzcie jak tu pięknie, dobrobyt aż chce się żyć</p>
          </div>
        </div>

        <div class="carousel-item">
          <img class="d-block w-100" src={p3} alt="Third slide"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>Witajcie w naszej bajce</h5>
            <p>Spójrzcie jak tu pięknie, dobrobyt aż chce się żyć</p>
          </div>
        </div>
  </div>
 
 
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>

<style>{`
.carousel{
  justify-content:center;
}
.carousel-inner{
padding:18px;
width:100%;
max-height: 500px !important;

}
.carousel-inner img{
  display:inline-block  !important;
  }
img {

height:400px;
}
.item{
  text-align:center;
}
.tales{
  width:100%
}
.carousel-item:before {
  -webkit-box-shadow: inset 0 0 20rem rgba(0, 0, 0, 1);
  box-shadow: inset 0 0 20rem rgba(0, 0, 0, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
}

`}</style>
</div>

);


export default Carousel;