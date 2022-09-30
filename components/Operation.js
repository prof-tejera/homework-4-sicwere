const Operation = ({ value, onClick }) => {
  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
        backgroundColor: 'lightgrey'
      }}
      onClick={event => onClick({value})}
    >
      {value}
    </div>
  );
};

export default Operation;
