import { getPosts, getSinglePost, getAuthor } from './api/posts';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import NavbarThird from '../components/Navbar-third';
import Menu from '../components/about-menu';

const AboutPage = (props) => (
    <body>
  
  <NavbarThird/>
  
  <Menu/>
      

  
    </body>
    
  );
  
  
  export default AboutPage;
  
  
  
  