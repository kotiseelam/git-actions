import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Koti Reddy Seelam</h1>
      <h2>Software Developer | React & Firebase Enthusiast</h2>
      <h3 className="location">Calgary, Canada</h3>

      <section>
        <h3>About Me</h3>
        <p>
          Passionate software developer focused on building scalable web and mobile applications using modern technologies like React.js, Firebase, and Python.
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>React.js & React Native</li>
          <li>Firebase & Firestore</li>
          <li>Node.js & Express</li>
          <li>MongoDB & SQL</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <li>🤖 <strong>Price Comparison App</strong> – AI-powered tool using Gemini API to compare and rank product prices across platforms like Amazon, Walmart, and Costco.</li>
          <li>💬 <strong>Realtime Chat App</strong> – Built with React, Firebase, and Firestore. Supports user auth, live messaging, and typing indicators.</li>
        </ul>
      </section>

      <section>
        <h3>Education</h3>
        <p>Southern Alberta Institute of Technology, Calgary – Diploma in Software Development</p>
      </section>

      <section>
        <h3>Contact</h3>
        <p>Email: kotiseelam26@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/kotiseelam/" target="_blank" rel="noopener noreferrer">linkedin.com/in/kotiseelam</a></p>
        <p>GitHub: <a href="https://github.com/kotiseelam" target="_blank" rel="noopener noreferrer">github.com/kotiseelam</a></p>
      </section>
    </div>
  );
}

export default App;
