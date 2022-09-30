import styled from 'styled-components';

const Screen = ({ className, value }) => {
  return (
    <div className={className}>
      {value}
    </div>
  );
};

const StyledScreen = styled(Screen)`
   border: 1px solid black;
   width: 326px;
   height: 50px;
   text-align: right;
   font-family: Impact, fantasy;
   font-size: 30px;
`;

export default StyledScreen;
