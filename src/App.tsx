// src/components/App.tsx
import React, { useEffect, useState } from 'react';
import InputForm from './components/InputForm';
import IdList from './components/List';

const App: React.FC = () => {
  // Load IDs from localStorage on initial render
  const initialIds = JSON.parse(localStorage.getItem('ids') || '[]');
  const [ids, setIds] = useState<string[]>(initialIds);

  // Update localStorage whenever ids change
  useEffect(() => {
    localStorage.setItem('ids', JSON.stringify(ids));
  }, [ids]);

  const handleAddId = (id: string) => {
    setIds((prevIds) => [...prevIds, id]);
  };

  return (
    <div>
      <InputForm onAddId={handleAddId} />
      <IdList ids={ids} />
    </div>
  );
};

export default App;
