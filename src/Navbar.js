import React, { useState } from "react";
import { Link} from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { BiUserCircle, BiLogOut } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiEditLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.clear()
    navigate('/')
  }
  const [submenu, setSubmenu] = useState(false);

  return (
    <>
      <nav>
        <div>
          <h2 className="logo">Dashboard</h2>
        </div>
        <ul>
          <li>
            <Link className={"link user"}>
              <AiOutlineMessage className="icon" />
            </Link>
          </li>

          <li>
            <Link className={"link user"}>
              <FiHelpCircle className="icon" />
            </Link>
          </li>

          <li>
            <Link className={"link user"}>
              <BiUserCircle
                className="icon"
                onClick={() => setSubmenu((prev) => !prev)}
              />
              <div
                className="submenu"
                style={{
                  top: "177%",
                  display: submenu ? "flex" : "none",
                }}
              >
                <li>
                  <ImProfile className="inner-icon" />
                  <Link className="inner-link">Profile</Link>
                </li>
                <li>
                  <RiEditLine className="inner-icon" />
                  <Link className="inner-link">Edit</Link>
                </li>
                <li onClick={logout}>
                  <BiLogOut className="inner-icon" />
                  <Link className="inner-link">Logout</Link>
                </li>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
