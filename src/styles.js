import styled from "styled-components"

export const MenuTopo = styled.div`
    *{
        margin: 0 auto;
        padding: 0;
    }
    width: 100%;
    height: 12%;
    max-height: 60px;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    position: fixed;
    z-index: +1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    .titulo {
        display: flex;
    }

    h1 {
        color: #aaa;
    }

    a {
        color: #777;
        padding: 5px;
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

    button {
        padding-right: 30px;
    }
`

export const Slide = styled.div`
    margin: 0 auto;
    padding-top: 10%;
    width: 80%;
    height: 100%;
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