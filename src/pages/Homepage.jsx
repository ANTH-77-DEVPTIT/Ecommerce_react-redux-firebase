import React from "react";
import Layout from "../components/Layout";
import { collection, addDoc, getDocs } from "firebase/firestore";
import FireDB from "../fireConfig";
const Homepage = () => {
  async function addData() {
    try {
      const docRef = await addDoc(collection(FireDB, "users"), {
        name: "Trương Hùng An",
        born: 2000,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getData() {
    try {
      const users = await getDocs(collection(FireDB, "users"));
      const usersArray = [];
      users.forEach((doc) => {
        //sau khi lay duoc data tu firebase thi ta dua no vao mot cai mang trong
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        usersArray.push(obj);
      });
      console.log(usersArray);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <Layout>
      <h1>Layout</h1>
      <button onClick={addData}>Add data to firebase</button>
      <button onClick={getData}>Get data from Firebase</button>
    </Layout>
  );
};

export default Homepage;
