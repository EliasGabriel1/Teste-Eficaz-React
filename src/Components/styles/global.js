import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

*{
    margin:0;
    border:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --primary-color: hotpink;
    --second-color: #00cdf4;
    --button_menu-active: #009dde;
    --button_excluir-active: rgb(255,86,86);;
    --button_mudar-active: rgb(0, 176, 90);
    --backround-body:#e9eef0;
}

a{ text-decoration: none;}

ul{
    list-style: none;
    padding: 0;
}

.Content{ height: 100vh;}

body{background-color: var(--backround-body);}

input{
    padding-left: 5px;
    height: 30px;
}

:focus-visible {outline:none;}

:focus{outline:none;}

button{cursor: pointer;}

.d-none{display: none;}

.container-main{
    margin: 0 auto;
    max-width: 1100px;
}

.container-content{
    display: grid;
    grid-template-columns: 23% 77%;
}

nav>ul>li>a{
    color: #fff;
    width: 100%;
    height: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    white-space: nowrap;
    justify-content: start;
    gap: 8px;
    margin-left: 10px;
}

nav>ul>li:first-child{margin-bottom: 10px;}

nav>ul>li{
    padding-right: 10px;
    margin-right: 20px;
    height: 40px;
    background-color: var(--second-color);
}

nav>ul>li.active{background-color:var(--button_menu-active);}


button.bc-green{
    height: 23px;
    width: 56px;
    background-color: var(--button_mudar-active);
    color: #fff;
}

button.bc-red{
    height: 23px;
    width: 56px;
    background-color: var(--button_excluir-active);
    color: #fff;
}

table{width: 100%;}

.p-2{padding: 10px 0;}

.box-shadow{box-shadow: 0 0 0.6em #ccc;}



@media screen and (max-width: 900px){

    nav>ul>li,nav>ul>li.active{
        width: 70%;
        margin-left: 15px;
    }
    .container-content{
        display: grid;
        grid-template-columns: 1fr;
    }

    .container-content>nav>ul {
            display: flex;
            justify-content: end;
            flex-direction: column;
            align-items: end;
            margin-bottom: 12px;
    }
    .p-2{
        font-size:12px
    }
}
`;