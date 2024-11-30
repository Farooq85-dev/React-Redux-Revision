import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const userContext = createContext();

export const useUser = () => useContext(userContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Farooq");
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
