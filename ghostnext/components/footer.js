import Link from 'next/link';
import Head from 'next/head';



const Footer = () => (
<div>
    <footer>
        <div class="footer-content">Powered by Ghost.js</div>
    </footer>
    <style>{`
  footer {
    display:flex;
    background-color: #353a40;
    color:white;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 100%;
    border-top: 1px solid white;
    justify-content:center;
    align-items:center;
     
    
    }

    `}</style>
</div>
);



export default Footer;