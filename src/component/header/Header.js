import React from "react";
import "./header.scss";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/DisplayModeAction';
function mapStateToProps(state, props) { // more of Map Store to props
  return {
    darkMode: state.darkMode
  };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

function Header(props) {
  const toggleMode = () => {
    const mode = props.darkMode;
    props.actions(mode);
    
  }
  return (
    <>
      <div className="nav-header header-bg">
        <div className="nav-child nav-brand">View Surf</div>
        <div className="nav-child"></div>
        <div className="nav-child"></div>
      </div>
      <div className="side-bar ">
        <div className="side-elements" onClick={toggleMode}>
        { !props.darkMode ? <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-brightness-high-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
            <path fillRule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>:
        
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-brightness-low-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
        </svg>
        }
        </div>
        <div className="side-elements d-none" title='Add Libraries'>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
        </svg>
        </div>
        <div className="side-elements">
        
        </div>
      </div>
    </>
  );
}
