import { shade } from 'polished'
import styled, { css } from 'styled-components'


interface FormsProps {
    hasError: boolean;
}

export const Title = styled.h1`
@media (max-width:600px){
    font-size:30px;
    line-height:35px;
}

font-size:48px;
color: #3a3a3a;
margin-top:40px;
max-width:450px;
line-height:56px;
`

export const Form = styled.form<FormsProps>`
  @media (max-width:600px){
    margin-top:20px;
}
margin-top:40px;
max-width:900px;
display:flex;

@media (max-width:600px){
    display:block;
}


input{
    @media (max-width:600px){
    border-radius: 5px;
    width:100%;
    height:50px;
    font-size:12px;
}

    flex:1;
    height:70px;
    padding: 0 24px;
    border:0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;
    border-right:0;

    ${(props) => props.hasError &&
        css`
             border-color:#c53030;
         `}

    &::placeholder{
        color: #a8a8b3;
    }
}
button{

    @media (max-width:600px){
    margin-top:10px;
    border-radius: 5px;
    width:100%;
    height:50px;
}


    width:210px;
    height:70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border:0;
    color:#fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover{
    background:${shade(0.2, '#04d361')}
    }
}
 
`

export const Repositories = styled.div`
  @media (max-width:600px){
    margin-top:25px;
}
 margin-top:70px;
 max-width:900px;

 a{
     background:#fff;
     border-radius:5px;
     width:100%;
     padding:24px;
     display:block;
     text-decoration:none;
     display:flex;
     align-items:center;
     transition: transform 0.2s;
     &:hover{
        transform:translateX(10px);
     }
     & + a{
       margin-top:16px;
     }
     img{
         width:64px;
         height:64px;
         border-radius:50%;

     }
     div{
         margin:0 16px;
         flex:1;

         strong{
            @media (max-width:600px){
                font-size: 15px;
}

             font-size: 20px;
             color:#3d3d4d
         }
         p{
                    @media (max-width:600px){
                        font-size: 13px;
        }
            font-size:18px;
            color:#a8a8b3;
            margin-top:4px;
         }
     }
     svg{
         margin-left:auto;
         color:#cbcbd6;
     }

  
 }
`

export const Error = styled.span`
display:block;
color:#c53030;
margin-top: 8px;
`