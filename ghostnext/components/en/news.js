import Link from 'next/link';
import Head from 'next/head';



const News = () => (
<div>
    <h2 class="news-branch">News</h2>
    <br/>
    <div class="container-1">
        
        <div class="box box-1">
            <h1>*</h1>
            <h3>Box One</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div class="box box-2">
            <h1>*</h1>
            <h3>Box Two</h3>
            <p>Lorem ipsum doffffffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffff
                fffffffffffffffffffffffffffffffffffffflor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <div class="box box-3">
            <h1>*</h1>
            <h3>Box Three</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
    <Link href={'/../aktualnosci'}><a class="view-more">zobacz więcej</a></Link>
    
   <style >{`
   .news-branch{
    padding-left: 3%;
      
   }
   h2{
       font:30px;
   }
   .container-1{
    display:flex;
    padding:5px;
    justify-content:center;
    }
    

    .box{
        max-width:700px;
        padding:0px 100px 0px 100px;
    }
    
    .box-1{
        
     
            
              
    }
            
    .box-2{
        
    }
            
    .box-3{
             
        }
    .view-more{
        position:absolute;
        right:0;
        padding-right:10%;
        font-size:25px;
        color:black;
    }
    .view-more:hover{
        color:#CCCCCC;
        text-decoration:none;
    }


    `}</style> 

</div> 
);



export default News;