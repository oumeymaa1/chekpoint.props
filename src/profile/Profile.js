import React from 'react';
import { Button } from 'react-bootstrap';


const Profile = (props) => {
    const handleName = (name) => alert(`my name is ${props.fullName}`);

return (
    <div>
        <h2>{props.fullName}</h2>
        <h2>{props.bio}</h2>
        <h2>{props.profession}</h2>
        {props.children}
        <h2>{props.adress}</h2>
        <h2>{props.age}</h2>

        <Button onClick={handleName}> click here </Button>
    </div>

)
}

export default Profile