import styled from "styled-components"

//Container
export const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "header      header     header"
    "menu_aside   main     ad_aside"
    "footer      footer     footer";
`

//Header
export const L_header = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
    grid-area: header;
    /* width: 100%;
    height: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: +1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .l_header_menu_button {
        width: 15%;
        padding-left: 20px;
    }

    .l_header_title {
        margin: 0;
        padding: 0;
        width: 70%;

        a {
            display: flex;
            align-items: center;
        }
    }

    .l_header_adup_button {
        width: 15%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    h1 {
        color: #aaa;
    }

    a {
        color: #777;
        padding: 5px;
        padding-left: 0;
        text-decoration: none;
    }

    a:hover {
        background-color: #f5f5f5;
    }

    .teste {
        color: #777;
        font-weight: bold;
        margin-left: 10px;
    }

`

//Main
export const L_main = styled.div`
    grid-area: main;
    height: 100%;
    width: 100%;
`

//Main - Slide
export const Slide = styled.div`
    margin: 0 auto;
    /* padding-top: 10%; */
    width: 100%;
    /* height: 100%; */
    min-height: 100px;
    display: flex;
    justify-content: center;

    .carousel-container {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        background-color: #ccc;
        width: 100%;
    }

    .carousel-link {
        width: 80%;
        min-height: 100%;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }

    .carousel-link img {
        min-height: 200px;
        height: 50vh; 
        width: 70vw;
    }

    .carousel-link img:hover {
        opacity: 0.8;
    }
`

//Main - Grade
export const Grade = styled.div`
    *{
        margin: 0 auto;
        padding: 0;
    }
    height: 50%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }

    a {
        display: flex;
        align-items: center;
        width: 300px;
        height: 200px;
        text-decoration: none;
        display: block;
        margin-left: 0px;
        margin-bottom: 10px;
        background-color: #f5f5f5;
        border-radius: 5px;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: fill;
    }

    li {
        padding: 10px;
    }


    img:hover {
        opacity: 80%;
    }

    .anuncio1 {
        margin-left: 10px;
    }
`

//MenuAside
export const L_menuaside = styled.aside`
    grid-area: menu_aside;
    background-color: blue;
`

//AdAside
export const L_adaside = styled.aside`
    grid-area: ad_aside;
    background-color: yellow;
`

//Footer
export const L_footer = styled.div`
    grid-area: footer;
    align-items: end;
    background-color: green;
    height: 100%;
    width: 100%;
    /* position: fixed; */
    /* bottom: 0; */
`