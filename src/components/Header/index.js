import CurrentDate from '../CurrentDate';
import Logo from '../../assets/images/Logo.svg';

import Container from './styles';

function Header() {
  return (
    <Container>
      <CurrentDate />
      <img src={Logo} alt="logo" />
    </Container>
  );
}

export default Header;
