import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Send from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

interface InputFormProps {
  onAddId: (id: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAddId }) => {
  const [id, setId] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleAddId = () => {
    onAddId(id);
    setId('');
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          label="Ingrese numero de orden"
          value={id}
          onChange={handleInputChange}
          sx={{ flexGrow: 1 }}
        />
        <IconButton onClick={handleAddId} sx={{ ml: 1 }}>
          <Send />
        </IconButton>
      </Box>
    </Box>
  );
};

export default InputForm;
