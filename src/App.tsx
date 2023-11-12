// src/components/App.tsx
import React, { useEffect, useState } from 'react';

import InputForm from './components/InputForm';
import TotalCount from './components/Total';
import IdList from './components/List';
import { Box } from '@mui/material';

const App: React.FC = () => {
  // Load IDs from localStorage on initial render
  const initialIds = JSON.parse(localStorage.getItem('ids') || '[]');
  const [ids, setIds] = useState<string[]>(initialIds);

  // Update localStorage whenever ids change
  useEffect(() => {
    localStorage.setItem('ids', JSON.stringify(ids));
  }, [ids]);

  const handleAddId = (id: string) => {
    setIds((prevIds) => [id, ...prevIds]);
  };

  return (
    <div>
      <InputForm onAddId={handleAddId} />
      <TotalCount ids={ids} />
      <Box display="flex" justifyContent="center" alignItems="center">
        <IdList ids={ids} />
      </Box>
    </div>
  );
};

export default App;
