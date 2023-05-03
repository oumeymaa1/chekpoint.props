import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import phot from "./assets/avatar.avif";
import Profile from './profile/Profile';
import PropTypes from "prop-types";


function App() {
  return (
    <div className="App">
     <Profile fullName='Oumeyma' bio='Developer' profession='FullStack js' age ="26">
     <img
						src={phot}
						alt='profile pic'
					/>
     </Profile>
    </div>
  );
}
Profile.defaultProps = {
	adress: "Manzah 5",
};

Profile.propTypes = {
	age: PropTypes.number,
};
export default App;
