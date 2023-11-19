// src/components/App.tsx
import React, { useEffect, useState } from 'react';

import InputForm from './components/InputForm';
import TotalCount from './components/Total';
import IdList from './components/List';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ConfigurationForm from './components/ConfigurationForm';
import HowToVoteIcon from '@mui/icons-material/HowToVote';

const App: React.FC = () => {
  // Load IDs from localStorage on initial render
  const initialIds = JSON.parse(localStorage.getItem('ids') || '[]');
  const [ids, setIds] = useState<number[]>(initialIds);
  const intialTotal = Number(localStorage.getItem('total') || '350');
  const [total, setTotal] = useState<number>(intialTotal);
  const [showConfig, setShowConfig] = useState<boolean>(false);

  // Update localStorage whenever ids change
  useEffect(() => {
    localStorage.setItem('ids', JSON.stringify(ids));
  }, [ids]);

  // Update localStorage whenever total changes
  useEffect(() => {
    localStorage.setItem('total', String(total));
  }, [total]);

  const handleAddId = (id: number) => {
    setIds((prevIds) => [id, ...prevIds]);
  };

  const handleDeleteId = (id: number) => {
    setIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
  };

  const handleOpenConfig = () => {
    setShowConfig(true);
  };

  const handleMainPage = () => {
    setShowConfig(false);
  };

  const onTotalChange = (total: number) => {
    setTotal(total);
    setShowConfig(false);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
            onClick={handleMainPage}
          >
            <Button color="inherit">
              <HowToVoteIcon />
            </Button>
            <Typography variant="h6" component="div">
              contarvotantes
            </Typography>
          </Box>
          <Button color="inherit" onClick={handleOpenConfig}>
            <SettingsIcon />
          </Button>
        </Toolbar>
      </AppBar>
      {showConfig ? (
        <ConfigurationForm
          onTotalChange={onTotalChange}
          setShowConfig={setShowConfig}
        />
      ) : (
        <Box>
          <InputForm ids={ids} onAddId={handleAddId} />
          <Box ml={2} mb={1}>
            <TotalCount ids={ids} total={total} />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <IdList ids={ids} onDeleteId={handleDeleteId} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default App;
