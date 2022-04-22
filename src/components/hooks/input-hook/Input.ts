import { ChangeEvent, useCallback, useState } from 'react';

export const InputHook = (initialValue: string) => {
  const [inputValues, setInputValues] = useState<string>(initialValue);

  const handleValueOnChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setInputValues(event.currentTarget.value),
    [],
  );
  const handleResetValueOnChange = useCallback(
    () => setInputValues(initialValue),
    [initialValue],
  );
  return { inputValues, handleValueOnChange, handleResetValueOnChange };
};
