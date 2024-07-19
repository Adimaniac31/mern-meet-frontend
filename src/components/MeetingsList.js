import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MeetingsList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await axios.get('/api/meetings');
      setMeetings(response.data);
    };

    fetchMeetings();
  }, []);

  return (
    <div>
      <h1>Meetings</h1>
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting._id}>
            <a href={meeting.meetLink} target="_blank" rel="noopener noreferrer">
              Join Meeting ({meeting.meetingId})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingsList;
