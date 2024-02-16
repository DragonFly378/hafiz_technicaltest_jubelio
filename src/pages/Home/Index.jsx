import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/Navbar";
import Cart from "../../components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { dummyDatas } from "../../datas";
import productsApi from "../../api/productsApi";
import Swal from "sweetalert2";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const [dataProducts, setDataProducts] = useState([]);
  // const [dataProducts, setDataProducts] = useState(dummyDatas);

  const getProducts = async () => {
    let res = null;
    try {
      res = await productsApi.getAllProducts();
      setDataProducts(res.data.products);
      console.log(res);
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Terjadi error, silahkan refresh halaman",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const addProductToBag = (product) => {
    setSelectedProduct([...selectedProduct, product]);
    Swal.fire({
      title: "Success",
      text: "Produk berhasil ditambahkan!",
      icon: "success",
      confirmButtonText: "OK",
      timer: 1500,
      timerProgressBar: true,
    });
  };

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const removeProductFromBag = (product) => {
    setSelectedProduct((allProducts) =>
      allProducts.filter((current) => {
        return current.id !== product.id;
      })
    );
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    // console.log(setSearchInput);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    const productsSearch = dataProducts.filter((value) =>
      value.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setDataProducts(productsSearch);
  };

  useEffect(() => {
    if (searchInput.length !== 0) {
      const productsSearch = dataProducts.filter((value) =>
        value.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setDataProducts(productsSearch);
    } else {
      getProducts();
    }
  }, [searchInput]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar
        showModal={showModal}
        setShowModal={setShowModal}
        products={selectedProduct}
      />
      {showModal ? (
        <Cart
          showModal={showModal}
          setShowModal={setShowModal}
          products={selectedProduct}
          currency={currencyFormat}
        />
      ) : null}
      <section className="content-section w-11/12 mx-auto my-14">
        <div className="header-content flex flex-col gap-y-3 mb-6">
          <div className="title text-2xl text-hitam font-medium">Product</div>
          <div className="line w-full h-0.5 bg-abu"></div>
        </div>

        <div className="products-content grid grid-cols-12 gap-x-3">
          <div className="search-products col-span-2">
            <form
              //   onSubmit={onSearch}
              className="searchbar w-full flex flex-col"
            >
              <label htmlFor="cari-produk" className="text-base font-medium">
                Pencarian
              </label>
              <input
                className="border-solid  border-gray-500 border-2 rounded-md px-3 py-3 mt-3"
                id="search-product"
                name="search-product"
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Cari Produk"
              />
              <button
                type="submit"
                onClick={(e) => onSearchSubmit(e)}
                className="mt-3 bg-biru-secondary rounded-md py-2 text-md text-hitam font-normal hover:font-medium hover:bg-biru-tertiary"
              >
                Terapkan
              </button>
            </form>
          </div>
          <div className="list-products col-span-10 grid grid-cols-12 gap-x-4 gap-y-5">
            {dataProducts?.map((product, idxProduct) => {
              return (
                <>
                  <div
                    key={idxProduct}
                    className="card-product col-span-3 bg-white rounded-lg shadow flex flex-col"
                  >
                    <div
                      style={{ backgroundImage: `url(${product.images[0]})` }}
                      className={`product-image h-60 bg-contain bg-no-repeat bg-center`}
                    ></div>
                    <div className="product-detail px-3 py-4">
                      <div className="flex justify-between">
                        <div className="product-title text-base font-medium text-hitam">
                          {product.title}
                        </div>{" "}
                        {/* <button
                          className="bag-icon"
                          onClick={() => removeProductFromBag(product)}
                        >
                          Delete
                        </button> */}
                        <button
                          className="bag-icon"
                          onClick={() => addProductToBag(product)}
                        >
                          <FontAwesomeIcon
                            icon={faBagShopping}
                            className="text-biru-secondary text-2xl"
                          />{" "}
                        </button>
                      </div>
                      <div className="category text-oren font-normal text-sm">
                        {product.category}
                      </div>{" "}
                      <div className="price text-biru-primary font-normal text-xl mt-2">
                        {currencyFormat(product.price)}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
