const Number = ({ value, onClick }) => {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        backgroundColor: 'lightblue'
      }}
      onClick={event => onClick({value})}
    >
      {value}
    </div>
  );
};

export default Number;
