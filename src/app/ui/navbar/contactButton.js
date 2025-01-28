function Contactbutton(props) {
  const { name, color, text } = props;
  const style = {
    marginLeft: "16px",
    marginRight: "16px",
    color: text,
    "background-color": color,
  };
  return (
    <button className="btn" style={style}>
      <b>{name}</b>
    </button>
  );
}

export default Contactbutton;
