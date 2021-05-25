import styled from "styled-components"

export const MenuTopo = styled.div`
    *{
        margin: 0 auto;
        padding: 0;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;

    .titulo {
        display: flex;
    }

    h1 {
        color: #aaa;
    }

    a {
        color: #777;
        padding: 10px;
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
    width: 60%;
    height: 40%;
    margin: 0 auto;
`

export const Grade = styled.div`
    *{
        margin: 0 auto;
        padding: 0;
    }
    
    height: 50%;
    /* color: red; */
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
        text-decoration: none;
        display: block;
        margin-left: 0px;
        margin-bottom: 10px;
        padding: 100px;
        background-color: #f5f5f5;
        border-radius: 5px;
    }

    li {
        padding: 10px;
    }

    a:hover {
        background-color: #fafafa;
        border: 1px solid #bbb;
    }

    .anuncio1 {
        margin-left: 10px;
    }
`