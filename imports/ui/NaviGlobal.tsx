import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom';

export default function NaviGlobal() {

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to="/"><ListItem button >
          <ListItemText primary="Home" />
        </ListItem></Link>
        <Link to="import-csv"><ListItem button >
          <ListItemText primary="Import Csv" />
        </ListItem></Link>
      </List>
    </div>
  );
}