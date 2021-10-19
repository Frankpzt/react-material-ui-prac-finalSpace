import { Button } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/AccountCircle';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character/?limit=12")
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])
  console.log(data);
  return (
    <>
      <Button startIcon={ <LoginIcon />}  endIcon={ <AccessAlarmIcon />} size="small" color="primary" variant="contained">
        Click Me for blessing
      </Button>
      <p>
        
      </p>
    </>
  );
}

export default App;
