import { connect } from "react-redux";
import Home from "../pages/Home";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    skinType: state.skin.skin,
  };
};

const MyHome = connect(mapStateToProps)(Home);

export default MyHome;
