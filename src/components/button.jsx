const Button = (Props) => {
  return (
    <button style={buttonStyle} onClick={Props.click}>
      {Props.children}
    </button>
  );
};

const buttonStyle = {
  border: "1px solid red",
  borderRadius: "25px",
  padding: "10px",
  backgroundColor: "#FFCC00",
  color: "#FF0000",
  minWidth: "110px"
};

export default Button;
