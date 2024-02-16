import React, { useEffect } from "react";
import navLogo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ showModal, setShowModal, products }) => {
  const productSelected = products;
  //   console.log(showModal);
  //   console.log(productSelected.length);
  //   console.log(productSelected);

  const handleRefresh = () => {
    window.location.reload(); // Reload the page
  };

  useEffect(() => {
    productSelected;
  }, []);
  return (
    <>
      <section className="navbar-section bg-white py-6">
        <div className="nav-links w-11/12 mx-auto  flex flex-row justify-between">
          <Link onClick={handleRefresh} to="/" className="nav-brand">
            <img src={navLogo} alt="" className="w-full" />
          </Link>{" "}
          <div className="flex relative">
            <button
              className="cart-btn"
              onClick={() => setShowModal(!showModal)}
            >
              {" "}
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-biru-primary text-2xl"
              />{" "}
            </button>
            <div className="relative left-[-8px] top-[-7px] cart-total text-xs text-white bg-merah h-4 w-4 text-center rounded-xl">
              {productSelected.length}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
