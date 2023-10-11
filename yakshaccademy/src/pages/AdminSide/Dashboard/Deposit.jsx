import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useSelector } from 'react-redux';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const admindata=useSelector((state)=>state.adminloginreducer)
 
  const {alldata}=admindata
  const [currentDate, setCurrentDate] =React.useState('');

  React.useEffect(() => {
    // This effect will run once when the component mounts
    // You can use it to update the formatted date every second or as needed
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedDate = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()} ${date.getFullYear()}`;
      setCurrentDate(formattedDate);
    }, 1000); // Update the date every second

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 
  return (
    <React.Fragment>
      <Title>Total Registered User</Title>
      <Typography component="p" variant="h4">
        {alldata&&alldata}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       Till {currentDate&&currentDate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}