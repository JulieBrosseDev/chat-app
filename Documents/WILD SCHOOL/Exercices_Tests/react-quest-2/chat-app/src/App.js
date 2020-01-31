import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact 
      name="Vlada" 
      avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      status="online"
      />
      <Contact 
      name="Julie" 
      avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      status="online"
      />
      <Contact 
      name="Rut" 
      avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      status="offline"
      />
      <Contact 
      name="Lena" 
      avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      status="online"
      />
    </div>
  );
}

export default App;
