import CurrentDate from '../CurrentDate';
import Logo from '../../assets/images/Logo.svg';
import LogoWhite from '../../assets/images/LogoWhite.svg';

import Container from './styles';

function Header() {
  const screenWidth = window.screen.width;
  return (
    <Container>
      {screenWidth < 992
        ? ((
          <>
            <img src={LogoWhite} alt="logo" />
            <CurrentDate />
          </>
        ))
        : (
          <>
            <CurrentDate />
            <img src={Logo} alt="logo" />
          </>
        )}
    </Container>
  );
}

export default Header;
