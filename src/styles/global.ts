import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }


body {
    margin: 0;
    width: 100%;
    height: 100vh;
    font-family: "Exo", sans-serif;
    color: #fff;
    background: linear-gradient(90deg, #ffe4eb, #cbeaf4, #ffe4eb, #cbeaf4);
    background-size: 400% 400%;
    -webkit-animation: gradientBG 12s ease infinite forwards;
    animation: gradientBG 12s ease infinite forwards;
  }
  .container {
    width: 100%;
    position: absolute;
    top: 35%;
    text-align: center;
  }
  h1 {
    font-weight: 900;
  }
  a {
    text-decoration: none;
    color: #212121;
  }
  @-webkit-keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
}

`
