// CSS Modules
// Functional Component.
// Using Arrow Function Style: ES6
const Button = (Props) => {
  let defaultStyle = buttonStyle;
  if (Props.type == "danger") {
    defaultStyle = dangerStyle;
  }

  // (Props.type == 'danger') ? dangerStyle : buttonStyle

  return (
    /* on-click onClick */
    <button onClick={Props.click} style={defaultStyle}>
      {Props.children}
    </button>
  );
};

const buttonStyle = {
  border: "2px solid red",
  // border-radius
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "#FFCC00",
  color: "#FF0000",
  minWidth: "110px"
};

const dangerStyle = {
  border: "2px solid red",
  // border-radius
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "red",
  color: "white",
  minWidth: "110px"
};

export default Button;
