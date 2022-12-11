import { Fragment } from "react";
import "./App.css";
// import Collapse from './Collpase/Collapse';
// import Slideshow from './Slideshow/Slideshow';
// import Carroussel from './Carroussel/Carroussel';
// import User from "./User/User";
// import AVATAR from "./images/avatarTest.jpg";
import Rating from "./Rating/Rating";

// const slides = [
//   {url: 'https://via.placeholder.com/150/0000FF/808080'},
//   {url: 'https://via.placeholder.com/150/FFFF00/000000'},
//   {url: 'https://via.placeholder.com/150/0000FF/808080'},
//   {url: 'https://via.placeholder.com/150/000000/FFFFFF'},
// ]

function App() {
  return (
    <Fragment>
     <Rating stars="3"/>
    </Fragment>
  );
}

export default App;
