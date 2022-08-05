import React from "react";
import Logo from "../../assets/images/v3-logo-colorize.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
  };

  return <img className="snake-food" style={style} src={Logo} />;
};
