import styled from 'styled-components';

const Container = styled.div`
  background-color: #4A0D77;
  border-radius: 0.5rem;
  padding: 1rem;
  padding-bottom: 2rem;
`;

const ContainerCategoryIcons = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const CategoryIcon = styled.div`
  margin-right: 0.5rem;

  &.future {
    background-color: #02E2BD;
    border-radius: 50%;
    content: '';
    height: 0.875rem;
    width: 0.875rem;
  }

  &.started {
    background-color: #EB5F5F;
    border-radius: 50%;
    content: '';
    height: 0.875rem;
    width: 0.875rem;
  }

  &.near {
    background-color: #ECC561;
    border-radius: 50%;
    content: '';
    height: 0.875rem;
    width: 0.875rem;
  }
`;

const ContainerSchedule = styled.div`
  border-color: white;
  color: white;

  display: flex;

  ul {
    list-style: none;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    grid-column-gap: 1rem;
    grid-row-gap: 0.5rem;

    li {
      align-items: center;
      display: flex;
      font-size: 0.875rem;
    }
  }
`;

export {
  Container,
  ContainerCategoryIcons,
  CategoryIcon,
  ContainerSchedule,
};
