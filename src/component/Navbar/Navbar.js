import React, { useContext, useState } from "react";
import "./Navbar.css";

import { images } from "../../constants";
import { BsSearch } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { netflixAuthContext } from "../../App";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBrowse, setToggleBrowse] = useState(false);
  const Navigate = useNavigate();
  const { handleLogOut, user } = useContext(netflixAuthContext);

  console.log(user);

  const handleLoggingOut = async () => {
    try {
      await handleLogOut();
      Navigate("/netflix-clone-authentication/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="app__navbar app__bg">
        <div className="app__navbar-logolink">
          <div className="app__navbar-logolink_logo ">
            <img src={images.netflix} alt="netflix logo" />
          </div>

          <div className="app__navbar-logolink_dropdown">
            <p
              onClick={() =>
                setToggleBrowse((prevToggleBrowse) => !prevToggleBrowse)
              }
              className="p__opensans"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginLeft: "0.8rem",
              }}
            >
              Browse
              <BsFillCaretDownFill color="#FFF" fontSize={16} />
            </p>

            {toggleBrowse && (
              <ul className="app__navbar-logolink_dropdown-links">
                <li>
                  <IoMdNotifications color="#FFF" fontSize={27} />
                </li>
                <li>
                  <AiOutlineGift color="#FFF" fontSize={27} />
                </li>
                <li>
                  <p className="p__opensans" style={{ fontSize: "16px" }}>
                    CHILD
                  </p>
                </li>
                <li>
                  <button
                    onClick={handleLoggingOut}
                    className="button__logout smallscreen"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            )}
          </div>

          <ul className="app__navbar-logolink_links">
            <li className="p__opensans">
              <a href="#home" style={{ fontWeight: "900" }}>
                Home Page
              </a>
            </li>
            <li className="p__opensans">
              <a href="#arrays">Arrays</a>
            </li>
            <li className="p__opensans">
              <a href="#movies">Movies</a>
            </li>
            <li className="p__opensans">
              <a href="#newpopular">New and Popular</a>
            </li>
            <li className="p__opensans">
              <a href="#list">List</a>
            </li>
          </ul>
        </div>

        <div className="app__navbar-search">
          <BsSearch color="#FFF" fontSize={23} />
          <p className="p__opensans">CHILD</p>
          <AiOutlineGift color="#FFF" fontSize={27} />
          <IoMdNotifications color="#FFF" fontSize={27} />
          {/* <p className="p__opensans logout">Log out</p> */}
          <button onClick={handleLoggingOut} className="button__logout">
            Log out
          </button>
        </div>

        <div className="app__navbar-smallscreen">
          <div className="app__navbar-smallscreen-svg flex__center">
            <BsSearch color="#FFF" fontSize={18} />
            <GiHamburgerMenu
              color="#FFF"
              fontSize={24}
              onClick={() => setToggleMenu((prevToggleMenu) => !prevToggleMenu)}
            />
          </div>

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center">
              <GiCrossMark
                className="crossmark"
                color="#FFF"
                fontSize={32}
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans">
                  <a href="#home" style={{ fontWeight: "900" }}>
                    Home Page
                  </a>
                </li>
                <li className="p__opensans">
                  <a href="#arrays">Arrays</a>
                </li>
                <li className="p__opensans">
                  <a href="#movies">Movies</a>
                </li>
                <li className="p__opensans">
                  <a href="#newpopular">New and Popular</a>
                </li>
                <li className="p__opensans">
                  <a href="#list">List</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
