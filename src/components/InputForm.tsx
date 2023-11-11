// src/components/InputForm.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    <div>
      <TextField
        label="Enter ID"
        value={id}
        onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleAddId}>
        Add
      </Button>
    </div>
  );
};

export default InputForm;
