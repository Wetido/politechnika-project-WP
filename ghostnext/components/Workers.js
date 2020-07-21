import Link from 'next/link';
import Head from 'next/head';
import worker1 from '../images/banach_h.jpg';
import worker2 from '../images/jarzyna_w.jpg';
import worker3 from '../images/kolano_j.jpg';
import worker4 from '../images/machlarz_r.jpg';

const Workers = () => (
<div>
    <h2 class="worker-branch">Nasi Pracownicy</h2>
    <div class="container-worker">
        
        <div class="worker">
        <img class="worker-images" src={worker1} alt="First slide"/>
        <p>Slawny chlop</p> 
        </div>
        
        <div class="worker">
        <img class="worker-images" src={worker2} alt="First slide"/>
        <p>Madry chlop</p> 
        </div>
        
        <div class="worker">
        <img class="worker-images" src={worker3} alt="First slide"/>
        <p>Przystojny chlop</p> 
        </div>
        
        <div class="worker">
        <img class="worker-images" src={worker4} alt="First slide"/>
        <p>Młody chlop</p> 
        </div>
        <div class="view-more-box">

        <Link href={'/aktualnosci'}><a class="view-more-worker">zobacz więcej</a></Link>
        </div>

    </div>

    
   <style >{`


   .worker-branch{

        padding-left: 60px;
        padding-top: 1em;
        padding-bottom: 1em;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;

   }


   .container-worker{
        display:flex;
        flex-wrap: wrap;
        padding:5px;
        justify-content:center;
        margin: 0 auto;
        padding-left: 60px;
        text-align: center;
    }
    


    .worker{

        width: 23%;
        margin: 5px 5px 5px 5px;
    }
    


    .view-more:hover{
        color:#CCCCCC;
        text-decoration:none;
    }

    
    .worker-images{

        border-radius:30%;
        border:2px solid black;
        width: 75%;
        height: 75%;

    }


    .view-more-worker{

        border: 1px solid #3498db;
        background: none;
        padding: 10px 20px;
        font-size: 20px;
        font family: "montserrat";
        cusros: pointer;
        margin: 10px;
        color: #3498db;
        transition: 0.8s;
        position: relative:
        overflow: hidden;
      }
  
      .view-more-worker:hover {
          color: coral;
      }

      @media screen and (max-width: 1200px) {

        .worker-images > img{

            width: 70%;
            height: 80%;
        }

        .view-more-worker{

            
            width: 30%;
            height: 30%;
        }
      }


    @media screen and (max-width: 1000px) {

        .worker{

            width: 45%;
            
        }
      }

     
  
      @media screen and (max-width: 768px) {
        .worker{
          
            width: 60%;
            height: 60%;
        }

        .container-worker{

            align-items: center;
        }

        .view-more-box{
            width:100%;
            padding: 10px;
        }
      }

    `}</style> 

</div> 
);



export default Workers;