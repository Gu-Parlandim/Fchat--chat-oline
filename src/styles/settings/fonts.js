import { createGlobalStyle } from "styled-components";
import RetroGaming from "../../assets/fonts/Retro-Gaming.ttf";

const Fonts = createGlobalStyle`
    @font-face {
        font-family: "Retro Gaming";
        src: local('Retro Gaming'),
        url(${RetroGaming});
        font-weight: 500;
        font-style: normal;
    }
`;

export default Fonts;
