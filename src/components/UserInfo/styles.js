import styled from 'styled-components';

const ContainerUserInfo = styled.section`
  color: white;
  margin-top: 1rem;
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .user-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 992px) {
    margin-top: 4rem;
    margin-left: 2rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    
    .user-title{
      margin-left: 0.5rem;

      strong {
        font-size: 14px;
      }
      
      small {
        margin: 0;
        font-size: 14px;
      }
    }
    
    strong {
      font-size: 0.875rem;
      color: red;
    }

    p {
      display: none;
    }
  }
  
  strong {
    color: white;
    font-size: 1.125rem;
    font-weight: 700;
    
    img {
      margin-left: 0.8rem;
    }
  }
  
  small {
    font-size: 1rem;
    font-style: italic;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: .5rem;
  }
  
  p span {
    margin-right: 1rem;
  }
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;

  @media(max-width: 992px) {
    & > img {
      display: none;
    }
  }

    p {
      margin: 0;
      padding: 0;
    }
      
    img {
      margin-right: 0.3125rem;
    }
  }
`;

const PerfilImage = styled.img`
  border: 4px solid white;
  border-radius: 50%;
  margin-bottom: 1rem;
  height: 9.125rem;
  width: 9.125rem;

  @media(max-width: 992px) {
    width: 5.3135rem;
    height: 5.3135rem;
    position: relative;
    bottom: -3rem;
  }
  
`;

export {
  PerfilImage,
  ContainerUserInfo,
};
