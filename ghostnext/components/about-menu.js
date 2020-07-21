import Link from 'next/link';
import Head from 'next/head';



const Menu = () => (
<div>
<div class="links">
  <ul class="links__list" >
    <li class="links__item1 links__item" >
      <a class="links__link1 links__link" href="#">
<svg class="links__icon" viewBox="0 0 20 20">
							<path d="M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"></path>
						</svg>
        <span class="links__text">Pracownicy</span>
      </a>
    </li>
    

    
    <li class="links__item2 links__item">
      <a class="links__link2 links__link" href="#">
        <svg class="links__icon" viewBox="0 0 20 20">
							<path d="M15.94,10.179l-2.437-0.325l1.62-7.379c0.047-0.235-0.132-0.458-0.372-0.458H5.25c-0.241,0-0.42,0.223-0.373,0.458l1.634,7.376L4.06,10.179c-0.312,0.041-0.446,0.425-0.214,0.649l2.864,2.759l-0.724,3.947c-0.058,0.315,0.277,0.554,0.559,0.401l3.457-1.916l3.456,1.916c-0.419-0.238,0.56,0.439,0.56-0.401l-0.725-3.947l2.863-2.759C16.388,10.604,16.254,10.22,15.94,10.179M10.381,2.778h3.902l-1.536,6.977L12.036,9.66l-1.655-3.546V2.778z M5.717,2.778h3.903v3.335L7.965,9.66L7.268,9.753L5.717,2.778zM12.618,13.182c-0.092,0.088-0.134,0.217-0.11,0.343l0.615,3.356l-2.938-1.629c-0.057-0.03-0.122-0.048-0.184-0.048c-0.063,0-0.128,0.018-0.185,0.048l-2.938,1.629l0.616-3.356c0.022-0.126-0.019-0.255-0.11-0.343l-2.441-2.354l3.329-0.441c0.128-0.017,0.24-0.099,0.295-0.215l1.435-3.073l1.435,3.073c0.055,0.116,0.167,0.198,0.294,0.215l3.329,0.441L12.618,13.182z"></path>
						</svg>
        <span class="links__text">Nagrody</span></a>
    </li>
    
    

    
    
    <li class="links__item3 links__item" >
      <a class="links__link3 links__link" href="#">
        <svg class="links__icon" viewBox="0 0 20 20">
							<path d="M8.627,7.885C8.499,8.388,7.873,8.101,8.13,8.177L4.12,7.143c-0.218-0.057-0.351-0.28-0.293-0.498c0.057-0.218,0.279-0.351,0.497-0.294l4.011,1.037C8.552,7.444,8.685,7.667,8.627,7.885 M8.334,10.123L4.323,9.086C4.105,9.031,3.883,9.162,3.826,9.38C3.769,9.598,3.901,9.82,4.12,9.877l4.01,1.037c-0.262-0.062,0.373,0.192,0.497-0.294C8.685,10.401,8.552,10.18,8.334,10.123 M7.131,12.507L4.323,11.78c-0.218-0.057-0.44,0.076-0.497,0.295c-0.057,0.218,0.075,0.439,0.293,0.495l2.809,0.726c-0.265-0.062,0.37,0.193,0.495-0.293C7.48,12.784,7.35,12.562,7.131,12.507M18.159,3.677v10.701c0,0.186-0.126,0.348-0.306,0.393l-7.755,1.948c-0.07,0.016-0.134,0.016-0.204,0l-7.748-1.948c-0.179-0.045-0.306-0.207-0.306-0.393V3.677c0-0.267,0.249-0.461,0.509-0.396l7.646,1.921l7.654-1.921C17.91,3.216,18.159,3.41,18.159,3.677 M9.589,5.939L2.656,4.203v9.857l6.933,1.737V5.939z M17.344,4.203l-6.939,1.736v9.859l6.939-1.737V4.203z M16.168,6.645c-0.058-0.218-0.279-0.351-0.498-0.294l-4.011,1.037c-0.218,0.057-0.351,0.28-0.293,0.498c0.128,0.503,0.755,0.216,0.498,0.292l4.009-1.034C16.092,7.085,16.225,6.863,16.168,6.645 M16.168,9.38c-0.058-0.218-0.279-0.349-0.498-0.294l-4.011,1.036c-0.218,0.057-0.351,0.279-0.293,0.498c0.124,0.486,0.759,0.232,0.498,0.294l4.009-1.037C16.092,9.82,16.225,9.598,16.168,9.38 M14.963,12.385c-0.055-0.219-0.276-0.35-0.495-0.294l-2.809,0.726c-0.218,0.056-0.351,0.279-0.293,0.496c0.127,0.506,0.755,0.218,0.498,0.293l2.807-0.723C14.89,12.825,15.021,12.603,14.963,12.385"></path>
						</svg>
        <span class="links__text">Historia</span></a>
    </li>
    

    
    
    <li class="links__item4 links__item">
      <a class="links__link4 links__link" href="#">
        <svg class="links__icon" viewBox="0 0 20 20">
							<path d="M15.684,16.959L10.879,8.52c0.886-0.343,1.517-1.193,1.517-2.186c0-1.296-1.076-2.323-2.396-2.323S7.604,5.037,7.604,6.333c0,0.993,0.63,1.843,1.517,2.186l-4.818,8.439c-0.189,0.311,0.038,0.708,0.412,0.708h10.558C15.645,17.667,15.871,17.27,15.684,16.959 M8.562,6.333c0-0.778,0.645-1.382,1.438-1.382s1.438,0.604,1.438,1.382c0,0.779-0.645,1.412-1.438,1.412S8.562,7.113,8.562,6.333 M5.55,16.726L10,8.91l4.435,7.815H5.55z M15.285,9.62c1.26-2.046,1.26-4.525,0-6.572c-0.138-0.223-0.064-0.512,0.162-0.646c0.227-0.134,0.521-0.063,0.658,0.16c1.443,2.346,1.443,5.2,0,7.546c-0.236,0.382-0.641,0.17-0.658,0.159C15.221,10.131,15.147,9.842,15.285,9.62 M13.395,8.008c0.475-1.063,0.475-2.286,0-3.349c-0.106-0.238,0.004-0.515,0.246-0.62c0.242-0.104,0.525,0.004,0.632,0.242c0.583,1.305,0.583,2.801,0,4.106c-0.214,0.479-0.747,0.192-0.632,0.242C13.398,8.523,13.288,8.247,13.395,8.008 M3.895,10.107c-1.444-2.346-1.444-5.2,0-7.546c0.137-0.223,0.431-0.294,0.658-0.16c0.226,0.135,0.299,0.424,0.162,0.646c-1.26,2.047-1.26,4.525,0,6.572c0.137,0.223,0.064,0.512-0.162,0.646C4.535,10.277,4.131,10.489,3.895,10.107 M5.728,8.387c-0.583-1.305-0.583-2.801,0-4.106c0.106-0.238,0.39-0.346,0.631-0.242c0.242,0.105,0.353,0.382,0.247,0.62c-0.475,1.063-0.475,2.286,0,3.349c0.106,0.238-0.004,0.515-0.247,0.62c-0.062,0.027-0.128,0.04-0.192,0.04C5.982,8.668,5.807,8.563,5.728,8.387"></path>
						</svg>
        <span class="links__text">Media o nas</span></a>
    </li>
    
    
    
    <li class="links__item5 links__item" >
      <a class="links__link5 links__link" href="mailto:hello@danielbenmore.co.uk?subject=Hello">
        <svg class="links__icon" viewBox="0 0 22 32">
          <path d="M15.403 21h4.58c1.053 0 1.909-0.856 2.017-1.909v-17.182c-0.108-1.053-0.964-1.909-2.017-1.909h-17.966c-1.053 0-1.909 0.856-2.017 1.909v17.182c0.108 1.053 0.964 1.909 2.017 1.909h4.962c0.348 0 2.083 0.074 2.083 1.542 0 2.622-0.553 3.842-0.762 4.302l-0.049 0.109 0.403 0.174v0.013l-0.447-0.090c-0.017 0.033-0.030 0.068-0.038 0.104-0.154 0.411-0.232 0.833-0.232 1.257 0.001 2.147 1.231 3.589 3.063 3.589 1.851 0 3.094-1.442 3.094-3.589 0-0.391-0.066-0.78-0.198-1.161-0.005-0.114-0.049-0.22-0.119-0.302-0.026-0.060-0.060-0.125-0.101-0.202-0.219-0.415-0.676-1.277-0.676-4.204 0-0.62 0.64-1.542 2.403-1.542zM1 12.059h20v3.941h-20v-3.941zM2.017 1h17.966c0.501 0 0.909 0.408 1.017 0.909v9.149h-20v-9.149c0.108-0.501 0.516-0.909 1.017-0.909zM12.792 27.214c0.028 0.053 0.052 0.097 0.093 0.189 0 0.001 0.003 0.007 0.007 0.016 0.004 0.013 0.008 0.025 0.013 0.038 0.125 0.313 0.188 0.635 0.188 0.954 0.001 1.252-0.549 2.589-2.093 2.589-1.521 0-2.062-1.337-2.062-2.589 0-0.319 0.063-0.641 0.188-0.954 0.004-0.012 0.009-0.023 0.012-0.035 0.014-0.030 0.031-0.068 0.033-0.072l0.042-0.093c0.232-0.514 0.851-1.876 0.851-4.715-0.002-2.007-1.939-2.542-3.114-2.542 0 0 0 0-0.001 0h-4.932c-0.501 0-0.909-0.408-1.017-0.909v-2.091h20v2.091c-0.108 0.501-0.516 0.909-1.017 0.909h-4.58c-2.497 0-3.403 1.521-3.403 2.542 0 3.175 0.535 4.187 0.792 4.672z"></path>
        </svg>
        <span class="links__text">Działalność</span></a>
    </li>
  </ul>
</div>
    <style >{`


:root {
    --base-grid: 8px;
    --colour-white: #8793ab;
    --colour-black: #1a1a1a;
    --item-total:5;
    --angle: calc(360deg/var(--item-total));
  }
  
  *, :after, :before {
      box-sizing: border-box;
  }
  
  html {
    margin: 0;
    padding: 0;
    background-position: 100%;
  }
  
  body {
  

    font-family: Josefin Sans, sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f0f0;
    overflow: hidden;
  }
  
  .links {
    --link-size: calc(var(--base-grid)*20);
    color: var(--colour-black);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
  }
  
  .links__list {
    position: relative;
    list-style: none;
  }
  
  .links__item {
    width: var(--link-size);
    height: var(--link-size);
    position: absolute;
    top: -30px;
    left: 0;
    margin-top: calc(var(--link-size)/-2);
    margin-left: calc(var(--link-size)/-2);

    transform: rotate(var(--rotation)) translate(calc(var(--link-size) + var(--base-grid)*2)) rotate(calc(var(--rotation)*-1));
  }

  .links__item1{

    --rotation: calc(126deg + var(--angle)*1);
  }

  .links__item2{

    --rotation: calc(126deg + var(--angle)*2);
  }

  .links__item3{

    --rotation: calc(126deg + var(--angle)*3);
  }

  .links__item4{

    --rotation: calc(126deg + (var(--angle)*4));
  }

  .links__item5{

    --rotation: calc(126deg + var(--angle)*5);
  }
  
  .links__link {
    opacity: 0;
    animation: on-load .3s ease-in-out forwards;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    background-color: var(--colour-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .links__link1{

    animation-delay: calc(1*150ms);
  }

  .links__link2{

    animation-delay: calc(2*150ms);
  }

  .links__link3{

    animation-delay: calc(3*150ms);
  }

  .links__link4{

    animation-delay: calc(4*150ms);
  }

  .links__link5{

    animation-delay: calc(5*150ms);
  }
  
   .links__icon {
    width: calc(var(--base-grid)*8);
    height: calc(var(--base-grid)*8);
    transition: all .3s ease-in-out;
    fill: var(--colour-white);
  }
  
  .links__text {
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    height: calc(var(--base-grid)*2);
    font-size: calc(var(--base-grid)*2);
    display: none;
    bottom: calc(var(--base-grid)*8.5);
    animation: text .3s ease-in-out forwards;
    color:white;
  }
   .svg-icon {
    width: calc(var(--base-grid)*8);
    height: calc(var(--base-grid)*8);
    transition: all .3s ease-in-out;
    fill: var(--colour-white);
  }
  
  .links__link:after {
    content: "";
    background-color: transparent;
    width: var(--link-size);
    height: var(--link-size);
    border: 2px dashed var(--colour-white);
    display: block;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .3s cubic-bezier(.53,-.67,.73,.74);
    transform: none;
    opacity: 0;
  }
  
  .links__link:hover .links__icon {
    transition: all .3s ease-in-out;
    transform: translateY(calc(var(--base-grid)*-1));
  }
  
  .links__link:hover .links__text {
    display: block;
  }
  
  .links__link:hover:after {
    transition: all .3s cubic-bezier(.37,.74,.15,1.65);
    transform: scale(1.1);
    opacity: 1;
  }
  
  @keyframes on-load {
    0% {
      opacity: 0;
      transform: scale(.3);
    }
    70% {
      opacity: .7;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes text {
    0% {
      opacity: 0;
      transform: scale(0.3) translateY(0);
    }
    100% {
      opacity: 1;
      transform: scale(1) translateY(calc(var(--base-grid)*5));
    }
  }
  

    `}</style>
</div>
);



export default Menu;