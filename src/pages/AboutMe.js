import React from 'react';
import { Card } from 'react-bootstrap';
import ava from '../assets/1.jpg'

const AboutMe = () => {

  return (
    <Card>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <div className="avatar-container">
          <img src={ava} alt="Avatar" className="avatar" style={{width:300}}/>
        </div>
        <div className="info">
          <div>
            <strong>Year of Birth: <em>1992</em></strong>
          </div>
          <div>
            <strong>Email Address: <em>kerimakmyradov28@gmail.com</em></strong>
          </div>
          <div>
            <strong>Bio: <em>Lifelong Learner</em></strong>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;
