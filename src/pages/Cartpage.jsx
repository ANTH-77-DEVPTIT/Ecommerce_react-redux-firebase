import React from "react";
import { useState, useEffect } from "react";
import { FaForumbee, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";

const Cartpage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [totalAmount, setTotalAmout] = useState();

  useEffect(() => {
    let teml = 0;
    cartItems.forEach((cartItem) => {
      teml = teml + cartItem.price;
    });

    setTotalAmout(teml);
  }, [cartItems]);

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">
                  <FaForumbee />
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length !== 0 ? (
                cartItems.map((item) => {
                  return (
                    //một lần chạy là một dòng
                    <tr>
                      <th>
                        <img src={item.imageURL} height="80" width="auto" />
                      </th>
                      <th>{item.name}</th>
                      <th>{item.price}</th>
                      <th>
                        <FaTrashAlt
                          className="delete_cart"
                          onClick={() => deleteFromCart(item)}
                        />
                      </th>
                    </tr>
                  );
                })
              ) : (
                <tr className="text-center mt-3">
                  <th>Không có sản phẩm nào trong kho chứa!!</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="d-flex justify-content-end">
            {totalAmount !== 0 ? (
              <h1 className="total_amount">Total Amount {totalAmount} RS/-</h1>
            ) : (
              ""
            )}
          </div>
          <div className="d-flex justify-content-end mt-2">
            {totalAmount !== 0 ? <button>PLACE ORDER</button> : ""}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cartpage;
