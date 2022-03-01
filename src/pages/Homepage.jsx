import React, { useState } from "react";
import Layout from "../components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useEffect } from "react";
// import { fireProducts } from "../fireCommerce";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  //lấy nhận xử lý dữ liệu ở đây
  // async function addData() {
  //   try {
  //     const docRef = await addDoc(collection(fireDB, "users"), {
  //       name: "Trương Hùng An",
  //       born: 2000,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  // const addProductData = () => {
  //   fireProducts.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDB, "products"), product);
  //     } catch (e) {
  //       console.log("thêm dữ liệu không thành công", e);
  //     }
  //   });
  // };
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  // add empty brackets here. and run only on the first render
  // console.log("data", products);

  //function getData from firebase to store and save products
  async function getData() {
    try {
      const users = await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        //sau khi lay duoc data tu firebase thi ta dua no vao mot cai mang trong
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });
      setProducts(productsArray);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const addToCart = (product) => {
    console.log('Đã thêm vào giỏ hàng');
    
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4 " key={product.id}>
                <div className="m-2 p-1 product position-relative">
                  <div className="product-content">
                    <p>{product.name}</p>
                    <div className="text-center">
                      <img
                        src={product.imageURL}
                        alt=""
                        className="product-img"
                      />
                    </div>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-actions">
                    <h3 className="product-price">{product.price} RS/-</h3>
                    <div className="d-flex">
                      <button className="mx-2" onClick={() => addToCart(product)}>ADD TO CART</button>
                      <button
                        onClick={() => {
                          navigate(`/productinfo/${product.id}`);
                        }}
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <button onClick={addData}>Add data to firebase</button> */}
      {/* <button onClick={getData}>Get data from Firebase</button> */}
      {/* <button onClick={addProductData}>Add product data to firebase</button> */}
    </Layout>
  );
};

export default Homepage;
