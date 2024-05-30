import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavLink style={{ color: '' }} to="/">
        Welcome
      </NavLink>
      {/* <NavLink to="/welcome">Welcome</NavLink> */}
      <NavLink to="/Works">Works</NavLink>
      <NavLink to="/Contacts">Contacts</NavLink>
      <Outlet />
    </div>
  );
};

export default Layout;
