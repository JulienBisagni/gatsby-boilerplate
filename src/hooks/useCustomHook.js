import { useState } from 'react';

export const useCustomHook = () => {
  const [customHook, setCustomHook] = useState(null);

  return {
    customHook,
  };
};
