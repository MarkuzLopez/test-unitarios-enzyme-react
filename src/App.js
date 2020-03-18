import React from 'react';
import Counter from './components/Counter';

import './App.css';

export const Title = () => {
  return <h1>Introduccion a Unit Testing</h1>
}

function App() {
  return (
   <section>
   
     <Counter />
     {/* <Title /> */}
     {/* <div className="container">
        <span num={3} active={false} >Primeroo...</span>
        <span num='3' active='false' >Segundo...</span>
     </div>
     <input type="text" />

    <div></div>
    <p>***********</p>

    <section></section>
    <p>otro</p>
      */}
   </section>
  );
}

export default App;
