import React from "react";
import "./SuccessPage.css";
import { useState, useEffect } from "react";
import * as Realm from "realm-web";
import { useLocation, useNavigate } from "react-router-dom";
import Set_Form from "../DB/Set_Form";

function SuccessPage(props) {
  // const [products, setProducts] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = process.env.REACT_APP_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        console.log("user", user);
        setUser(user);
        // const allProducts = await user.functions.getAllForms();
        // console.log("allProducts", allProducts);
        // setProducts(allProducts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // return (
  //   <div>
  //     <div>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </div>
  //     <div>
  //       {products &&
  //         products.map((product) => {
  //           console.log("product", product);
  //           return <p key={product._id}>{product.choosen_city}</p>;
  //         })}
  //     </div>
  //   </div>
  // );

  const urlParams = useLocation();
  let navigate = useNavigate();

  const handelClick = () => {
    navigate("/");
  };

  const values = urlParams.state.formValues;
  console.log("useLocation().search", values);
  return (
    <div>
      <h1>Details Sent Successfully</h1>
      {Object.keys(values).map((key) =>
        values[key] !== "Select an Option" && values[key] !== "" ? (
          <p key={key}>
            {key
              .substring("choosen_".length)
              .replace(/_/g, " ")
              .charAt(0)
              .toUpperCase() +
              key.substring("choosen_".length).replace(/_/g, " ").slice(1)}
            : {values[key]}
          </p>
        ) : (
          ""
        )
      )}
      {console.log("user44444", user)}
      <Set_Form user={user} values={values} />
      <button onClick={handelClick}>Send another form</button>
    </div>
  );
}

export default SuccessPage;
