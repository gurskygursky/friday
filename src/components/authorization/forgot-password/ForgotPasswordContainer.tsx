import React from 'react';

import { ForgotPassword } from 'components/authorization/forgot-password/ForgotPassword';
import { InputHook } from 'components/hooks/input-hook/Input';

export const ForgotPasswordContainer = () => {
  const { inputValues: password, handleValueOnChange: handlePassword } = InputHook('');

  return (
    // redirect logic

    <ForgotPassword password={password} handlePassword={handlePassword} />
  );
};
