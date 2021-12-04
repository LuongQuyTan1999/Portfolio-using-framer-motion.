import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  Reset
  *,*::before,*::after{
    box-sizing:border-box
  }
  
  html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,
  pre,form,fieldset,input,textarea,p,blockquote,th,td,
  header,footer,aside,nav,article,figure,figcaption{
    margin:0;
    padding:0;
  }
  fieldset,img{
    border:0;
  }
  address,caption,cite,code,dfn,em,strong,th,var{
    font-style:normal;
    font-weight:400;
  }
  ol,ul{
    list-style:none;
  }
  caption,th{
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:100%; 
    font-weight:400;
  }
  q:before,q:after{
    content:'';
  }
  abbr,acronym{
    border:0;
  }
  a{
    text-decoration:none;
  }
  a:active,a:focus{
    outline:none;
  } 
  /* Variables */
  :root{
    
    /* Reset 1rem = 10px */
      font-size: 7px;
    /* Basic colors */
      --white:#ffffff;
      --black:#000000;
    /* ... */
    
    /* Project colors */
    --yellow:hsl(57,88%,58%);
    --blue:hsl(220,88%,58%);
    
    /* Layout variables */
    --content-width:90rem;
    --content-padding:1rem;
    
    --header-height:10rem;
    --keyvisual-height:60rem;
  }
  /* Globals */ 
  body{
    font-family:sans-serif;
    font-size:2rem;
    font-weight:400;
    line-height: 2.5rem;
  }
  /* Media Queries */
  /* Tablet portrait */
  @media(min-width: 768px){
    :root{
      font-size:9px;
    }
  }
  
  /* Tablet landscape */
  @media(min-width:1024px){
    :root{
      font-size:10px;
      --content-width:100%;
      --content-padding:2rem;
    }
  }
  /* Old desktop or large scaled UI */
  @media(min-width:1280px){
    :root{
      font-size:10px;
    }
  }
  /* Standard desktop  */
  @media(min-width:1920px){
    :root{
      font-size: 10px;
      --content-padding:4rem;
    }
  }
`;

// Define what props.theme will look like
export const theme = {};
