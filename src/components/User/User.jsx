import React, { useEffect, useState } from 'react';
import './user.css';
import img from '../../Assets/image.png';
import {jwtDecode} from 'jwt-decode'; // Correct import

const Profile = () => {
  const [name, setName] = useState('User'); // Default name

  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      try {
        const decoded = jwtDecode(token); // Correct usage of jwtDecode
        setName(decoded.name || 'User'); // Extracting the 'name' from the token payload
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    }
  }, []);

  return (
    <div className="profile">
      <div className="header-color"></div>
      <div className="profile-pic">
        <img src={img} alt="Profile" />
      </div>
      <div className="title">
        <h1>{name}</h1>
      </div>
      <div className="details">
        <div className="detail">
          <label htmlFor="contact">Contact Details:</label>
          <input type="text" id="contact" name="contact" />
        </div>
        <div className="detail">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
        </div>
        <div className="detail">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="detail">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category">
            <option value="Solo">Student</option>
            <option value="Couple">Teacher</option>
            <option value="Friends">Professional</option>
            <option value="Family">Other</option>
          </select>
        </div>
        <div className="detail">
          <label htmlFor="password">Change Password:</label>
          <input type="password" id="password" name="password" />
        </div>
      </div>
      <div className="description"></div>
      <button className="user_button">UPDATE</button>
      <h1>PAST TRIPS</h1>
      <div className="images-container">
        <div className="image"></div>
      </div>
      <div className="past-trips">
        <div className="trip">
          <p>Jodhpur</p>
        </div>
        <div className="trip">
          <p>Kashmir</p>
        </div>
        <div className="trip">
          <p>Shillong</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
