import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC<{}> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="nav-bar">
        <Link to={"/"}>Posts</Link>
        <Link to={"/to-do/"}>To Do</Link>
        <Link to={"/other/"}>Other</Link>
      </div>
    </nav>
  );
}

export default Header