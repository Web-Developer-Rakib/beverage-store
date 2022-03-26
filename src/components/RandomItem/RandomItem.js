import React from "react";

const RandomItem = (props) => {
  const { randomInfo, random } = props;
  console.log(props[random]);
  return <div></div>;
};

export default RandomItem;
