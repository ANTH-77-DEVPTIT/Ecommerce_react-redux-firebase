import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import fireDB from "../fireConfig";
const Productpage = () => {
  const [product, setProduct] = useState();
  const params = useParams();

  // params nhận về obj là một cặp key/value: key là một id, value là một giá trị trả về phía sau /.../router in the browser
  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const productTeml = await getDoc(
        doc(fireDB, "products", params.productid)
      );

      setProduct(productTeml.data());
    } catch (e) {
      console.error("Error getting document: ", e);
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {product && (
              <div>
                <p>
                  <b>{product.name}</b>
                </p>
                <img
                  src={product.imageURL}
                  className="product_info-img"
                  alt=""
                />
                <hr />
                <p>{product.description}</p>
                <div className="d-flex justify-content-end mt-3">
                  <button>ADD TO CART</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Productpage;
