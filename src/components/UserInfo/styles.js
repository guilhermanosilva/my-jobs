import styled from 'styled-components';

const ContainerUserInfo = styled.section`
  color: white;
  margin-top: 1rem;
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
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
`;

export {
  PerfilImage,
  ContainerUserInfo,
};
