import { connect } from "react-redux";
import { skinAction } from "../action";
import Setting from "../pages/Setting";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    skinType: state.skin.skin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickChangeSkin: (color) => dispatch(skinAction(color)),
});

const MySetting = connect(mapStateToProps, mapDispatchToProps)(Setting);

export default MySetting;
