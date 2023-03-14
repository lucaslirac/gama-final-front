import styled from "styled-components";

export const Container = styled.div`
.card{
        
       
        margin: 3px;
        width: 350px;
        margin-bottom: 40px;
        border: 1px solid #ccc;
        & img{
            width: 90%;
            margin: auto;
            border-radius: 8px;
        }
        & h5 {
            text-align: center;
            color: #00796B;
            font-weight: 600;
        }
    }
    ul li{
        
        margin: auto;
        text-align: center;
        border: none;
    }
    .container{
        
        display: grid;
        grid-template-columns: 45% 45% 45% 45%;
        
        border: none;
        margin: 100px auto; 
    }
    .links{
        text-align: center;
        & a {
            text-decoration: none;
            font-size: 13px;
            color: #000;
            padding: 3px;
            border: 1px solid #ccc;
            border-radius: 6px;
        }
        button{
            text-decoration: none;
            font-size: 13px;
            color: #000;
            padding: 3px;
            border: 1px solid #ccc;
            border-radius: 6px;
        }
 
    }
`;