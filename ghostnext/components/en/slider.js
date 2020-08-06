
import Head from 'next/head';
import axios from 'axios'

import useState from 'react';

//Link odpowiada za dynamiczne przekierowywanie z 
//folderu pages, na zasadzie np 
//pages/post/index.js




export default class Test extends React.Component {




  constructor(props) {
    super(props);
    
      this.state = {
        posts: [],
        startArr: [],
        endArr: [],
        isLoading : true,
        images : 0
      }

    axios.get( `http://localhost:8000/wp-json/wp/v2/pages?slug=slider`)
    .then((response) => {

      this.setState({ posts: response.data[0] });


      var images = this.getImg(this.state.posts.content.rendered);
      this.setState({ images: images});


      this.setState({ isLoading: false });
    })

   }


  getImg = (excpert) => {

    const startPosition = 'src=';
    const endPosition = '.jpg';
  
    var startArr = [];
    var endArr = [];
  
    var idS = excpert.indexOf(startPosition);
    var idE = excpert.indexOf(endPosition);
  
    while (idS != -1) {
      startArr.push(idS);
      endArr.push(idE);
  
      idS = excpert.indexOf(startPosition, idS + 1);
      idE = excpert.indexOf(endPosition, idS + 1);
    }
    
  
    this.setState({startArr: startArr});
    this.setState({endArr : endArr});
    
    //return excpert.slice(startArr[1] +5 ,endArr[1] + 4)
    return startArr.length
  }




  render() {

    const { isLoading } = this.state;

    if (isLoading) {
      return <div className="App">Loading...</div>;
    } 
    

    return (


<div>
    <Head>
    <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/cosmo/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

            <script dangerouslySetInnerHTML={{ __html: 
            `

            $(document).ready(function() {

              $('#1').addClass('active');
              $('#indicatior1').addClass('active');

          });

            ` 
          }} />

    
    </Head>

    

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">

      {this.state.startArr.map((post, index) => (

        <li data-target="#carouselExampleIndicators" data-slide-to="0" id={'indicatior'+index}></li>

      ))}
  </ol>
  
  <div class="carousel-inner">


        {this.state.startArr.map((post, index) => (
            <div class="carousel-item" id={index}>
            <img class="d-block w-100" src={this.state.posts.content.rendered.slice(post +5 ,this.state.endArr[index] + 4)} alt="First slide"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Witajcie w naszej bajce</h5>
              <p>Spójrzcie jak tu pięknie, dobrobyt aż chce się żyć</p>
            </div>
            </div>

        ))}
  
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

    )}
}
