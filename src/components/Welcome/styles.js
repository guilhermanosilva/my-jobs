import styled from 'styled-components';

const Container = styled.div`
  @media(max-width: 992px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    
    p{
      margin: 0.5rem;
      text-align: center;
    }
  }
`;

export default Container;
