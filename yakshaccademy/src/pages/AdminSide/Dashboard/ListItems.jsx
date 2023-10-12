import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';


import AssignmentIcon from '@mui/icons-material/Assignment';
import { ManageAccounts, Message, School } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <Link to="/admindashboard">   <DashboardIcon /></Link>
      </ListItemIcon>
     <Link to="/admindashboard"> <ListItemText primary="Dashboard" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Link to="/management">     <ManageAccounts/></Link>
      </ListItemIcon>
     <Link to="/management"><ListItemText primary="Management"  /></Link> 
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Link to="/students">     <PeopleIcon /></Link>
      </ListItemIcon>
    <Link to="/students"> <ListItemText primary="Students" /></Link> 
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Link to="/instructers">      <School /></Link>
      </ListItemIcon>
     <Link to="/instructers"> <ListItemText primary="Instructers" /></Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <Link to="/messages">   <Message /></Link>
      </ListItemIcon>
     <Link to="/messages"><ListItemText primary="Messages" /></Link> 
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);