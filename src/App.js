import React from 'react';
import logo from './assets/img.png';
import './App.css';

function App() {
  return (
      <form method="post">
        <div>
        <img src={logo}  alt="image" />
        </div>
        <h4>Blog post published</h4>
        <p>This blog post has been published. Team members will be able to edit this post and republish changes</p>
        <div className="button">
          <input type="reset" value="Cancel" className="reset" />
          <input type="submit" value="Confirm" className="submit" />
        </div>
      </form>
  );
}

export default App;
