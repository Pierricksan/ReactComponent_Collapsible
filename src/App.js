import { Fragment } from 'react';
import './App.css';
import Collapse from './Collpase/Collapse';

function App() {
  return (
<Fragment>
  <Collapse label = "Titre">
    <p>Le titre était caché et sert à faire le test pour le component collapse</p>
  </Collapse>
  <Collapse label = "Titre bis">
    <p>Le titre sert à le collapse</p>
  </Collapse>
</Fragment>
  )
}

export default App;
