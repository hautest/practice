import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "./store";

function ToDo({ text, id, onBtnClick }) {
  return (
    <li key={id}>
      <Link to={`/${id}`}>{text} </Link>{" "}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, onwProps) => {
  console.log(onwProps);
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDO(onwProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
