import React, { useEffect } from "react";

function Set_Form(props) {
  useEffect(async () => {
    console.log("props2", props.values);

    const allProducts = await props.user.functions.setForm(
      // Object.keys(props.values).map(
      // console.log("key", props.values)
      props.values
      // (key) => console.log("props.values", props.values)
      // <div>this is{props.values[key]}</div>
      // )
    );
    // setForm();
  }, [props.values]);
  {
    console.log("props", props);
  }
  return <h1>SET FORM</h1>;
}

export default Set_Form;
