import { connect } from 'react-redux'
import { useEffect } from 'react'
import PropTypes from 'prop-types';
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getUserAuth } from './actions'

function AppComponent(props) {

  useEffect(() => {
    props.getUserAuth();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

AppComponent.propTypes = {
  getUserAuth: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;
