// frontend/src/App.js
import React from 'react';
import axios from 'axios';
import MeetingsList from './components/MeetingsList';

const App = () => {
  const createMeeting = async () => {
    const response = await axios.post('/api/meetings/create');
    if (response.status === 200) {
      window.location.reload();
    }
  };

  return (
    <div className="App">
      <button onClick={createMeeting}>Create Google Meet</button>
      <MeetingsList />
    </div>
  );
};

export default App;


