import { NavItem, Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to={'movies'}>Movies</NavItem>
    </Header>
  );
};

export default AppBar;
