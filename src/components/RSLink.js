import { NavLink } from 'react-router-dom';

const RSLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      textDecoration='none'
      display='flex'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
    >
      {children}
    </NavLink>
  );
};

export default RSLink;
