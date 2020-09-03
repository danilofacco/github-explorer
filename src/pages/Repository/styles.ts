import styled from 'styled-components'

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    max-width:900px;

    a{
        display :flex;
        align-items:center;
        text-decoration:none;
        color:#a8a8b3;
        transition: color 0.2s;

        &:hover{
            color:#666
        }

        svg{
      margin-right:4px  
    }

    }
   
`

export const RepositoryInfo = styled.section`
  @media (max-width:600px){
    margin-top:25px;
}
margin-top:80px;
max-width:900px;
header{
    display:flex;
    align-items:center;

    img{
        @media (max-width:600px){
        width:80px;
        height:80px;
}
        width:120px;
        height:120px;
        border-radius:50%
    }

    div{
        margin-left:24px;

        strong{
            @media (max-width:600px){
                font-size:25px;
}
            font-size:36px;
            color:#3d3d4d;
        }

        p{
            @media (max-width:600px){
                font-size:15px;
}
            font-size:18px;
            color:#737380;
            margin-top:4px;
        }
    }
}
ul{
    display:flex;
    list-style:none;
    margin-top:40px;
    @media (max-width:600px){
        margin-top:25px;
}

    li{

        & + li{
            @media (max-width:600px){
                margin-left:45px;
}
            margin-left:80px;
        }
        strong{
            @media (max-width:600px){
                font-size:25px;
}
            display:block;
            font-size:36px;
            color:#3d3d4d
        }

        span{
            display:block;
            margin-top:4px;
            color:#6c6c80

        }
    }
}
    
   
`

export const Issues = styled.section`
margin-top:70px;
@media (max-width:600px){
    margin-top:25px;
}

 a{
    @media (max-width:600px){
        padding:15px;
}
     background:#fff;
     border-radius:5px;
     width:100%;
     max-width:900px;
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