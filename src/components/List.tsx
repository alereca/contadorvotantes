// src/components/IdList.tsx
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface IdListProps {
  ids: string[];
}

const IdList: React.FC<IdListProps> = ({ ids }) => {
  return (
    <List>
      {ids.map((id, index) => (
        <ListItem key={index}>
          <ListItemText primary={id} />
        </ListItem>
      ))}
    </List>
  );
};

export default IdList;
