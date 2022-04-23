import { connect } from "react-redux";

function Detail({ toDos }) {
  return (
    <>
      <h1>Detail</h1>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
