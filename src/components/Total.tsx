import React from 'react';
import { Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

interface TotalCountProps {
  ids: number[];
  total: number;
}

const TotalCount: React.FC<TotalCountProps> = ({ ids, total }) => {
  const percentage = Math.floor((ids.length / total) * 100);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CircularProgressWithLabel value={percentage} />
      <Typography
        variant="caption"
        component="div"
        color="text.secondary"
        ml={1}
      >
        {`Votaron ${ids.length} de ${total} electores`}
      </Typography>
    </div>
  );
};

export default TotalCount;
