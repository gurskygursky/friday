import { ChangeEvent, useCallback, useState } from 'react';

export const InputHook = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const handleInputValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value),
    [],
  );
  const resetInputValue = useCallback(() => setInputValue(initialValue), [initialValue]);
  return { inputValue, handleInputValue, resetInputValue };
};
