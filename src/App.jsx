import { connect } from 'react-redux'
import { useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import Mainhome from './components/Mainhome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getUserAuth } from './actions'

function App(props) {

  useEffect(() => {
    props.getUserAuth();
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Mainhome />}></Route>
      </Routes>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
