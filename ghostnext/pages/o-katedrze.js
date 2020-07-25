
import Link from 'next/link';
import dynamic from 'next/dynamic';

import NavbarThird from '../components/Navbar-third';
import Menu from '../components/about-menu';
import Spacer from '../components/Spacer';
const AboutPage = (props) => (
  <div>
    <body>
  
  <NavbarThird/>
  <h2 class="news-header">O naszej katedrze</h2>
  <Spacer></Spacer>
  <Menu/>
      

  
    </body>
    <style>{`
    .news-header{

      padding: 30px 0 0 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 1.8rem;
      text-align: center;
    }
    `}</style>
  </div>
  );
  
  
  export default AboutPage;
  
  
  
  