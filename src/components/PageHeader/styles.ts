import styled from 'styled-components'

export const TopBar = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background: #1E91CC;
      
  #direita a{
      & + a{
          margin-left:20px;
      }
        text-decoration:none;
        color:#595959;
        font-weight:bold
    }

    button{
        background:none;
        border:none;
        color:#595959;
    }
    #mobile {
            display:none;
            padding-right:10px;       
        }

    #mobile :hover{
        color:#ed1c24;
        }

    @media (max-width:800px){
        #mobile {
            display:block;
        }
        #desktop{
            display:none;
        }
    }
    `
export const PageHeaderDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background: #fff;
      
  #direita a{
      & + a{
          margin-left:20px;
      }
        text-decoration:none;
        color:#595959;
        font-weight:bold
    }

    button{
        background:none;
        border:none;
        color:#595959;
    }
    #mobile {
            display:none;
            padding-right:10px;       
        }

    #mobile :hover{
        color:#ed1c24;
        }

    @media (max-width:800px){
        #mobile {
            display:block;
        }
        #desktop{
            display:none;
        }
    }

      
`
