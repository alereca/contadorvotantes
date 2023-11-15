// src/components/App.tsx
import React, { useEffect, useState } from 'react';

import InputForm from './components/InputForm';
import TotalCount from './components/Total';
import IdList from './components/List';
import { Box } from '@mui/material';

const App: React.FC = () => {
  // Load IDs from localStorage on initial render
  const initialIds = JSON.parse(localStorage.getItem('ids') || '[]');
  const [ids, setIds] = useState<number[]>(initialIds);
  const total = 350;

  // Update localStorage whenever ids change
  useEffect(() => {
    localStorage.setItem('ids', JSON.stringify(ids));
  }, [ids]);

  const handleAddId = (id: number) => {
    setIds((prevIds) => [id, ...prevIds]);
  };

  const handleDeleteId = (id: number) => {
    setIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
  };

  return (
    <div>
      <InputForm ids={ids} onAddId={handleAddId} />
      <Box ml={2} mb={1}>
        <TotalCount ids={ids} total={total} />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IdList ids={ids} onDeleteId={handleDeleteId} />
      </Box>
    </div>
  );
};

export default App;
