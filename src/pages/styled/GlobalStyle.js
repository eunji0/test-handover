import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Roboto from "../../fonts/Roboto.woff";

export default createGlobalStyle`
  ${reset}
    * {
      box-sizing : border-box;
    }
    body {
      margin: 0 auto;
      width: 1000px;
      font-family: "Roboto";
      src: url(${Roboto}) format("woff");
    }
    @media only screen and (max-width: 1100px) {
      * {
        width: 100%;
        margin: auto;
    }
    }
`;
