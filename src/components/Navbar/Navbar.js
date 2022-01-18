import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

import { role_group } from "../../data/role_grants";

/** Import CSS */
import "../../Scss/_navbar.scss";

const Navbar = (props) => {
  const { user } = useContext(UserContext);

  console.log({ role_group });

  const result =
    role_group?.filter((element) => element.role === user.role) || null;

  const renderItems = result[0]?.modules.map((item, i) => (
    <li key={"itemnav_"+i} ><Link to="#">{item.option}</Link></li>
  )) || null;

  return (
    <div className="root-navbar">
      <nav className="navbar">
        <ul>
          {renderItems}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
