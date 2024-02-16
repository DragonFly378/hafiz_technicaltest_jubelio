import React from "react";

const Cart = ({ showModal, setShowModal, products, currency }) => {
  const productsCart = products;

  console.log(productsCart);

  const quantyCount = (id) => {
    let res = null;
    res = productsCart.filter((product) => {
      if (product.id === id) {
        return true;
      } else {
        return false;
      }
    });

    return res;
  };

  console.log(quantyCount(4).length);

  return (
    <>
      <div className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-8/12">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="header-content flex bg-biru-primary items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white">Cart</h3>
              <button
                className="my-auto bg-biru-tertiary p-2 rounded-md text-black text-xl leading-none font-semibold hover:bg-merah hover:text-white"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>
            <div className="products-cart relative p-6 flex flex-col gap-y-5 w-full py-16">
              {productsCart.length !== 0 ? (
                productsCart.map((product, idxProduct) => {
                  return (
                    <>
                      <div
                        key={idxProduct}
                        className="card-product w-11/12 mx-auto grid grid-cols-9 shadow-md rounded-md"
                      >
                        <div
                          style={{
                            backgroundImage: `url(${product.images[0]})`,
                          }}
                          className={`product-image col-span-2 w-3/4 h-28 mr-auto bg-contain bg-no-repeat bg-center`}
                        ></div>
                        <div className="product-detail col-span-6 my-auto">
                          <div className="title text-base font-medium mb-3">
                            {product.title}
                          </div>
                          <div className="price text-biru-primary">
                            {currency(product.price)}
                          </div>
                        </div>
                        <div className="product-qty col-span-1 my-auto">
                          Qty:
                          <div className="title text-base font-medium mb-3">
                            {/* {quantyCount(product.id).length} */}1
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                  <div className="text-hitam text-2xl mx-auto py-[180px]">
                    No Item
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Cart;
