// export {};
import React from 'react';

import { ForgotPassword } from 'components/authorization/forgot-password/ForgotPassword';
import { InputHook } from 'components/hooks/input-hook/Input';

export const ForgotPasswordContainer = () => {
  const { inputValues: email, handleValueOnChange: handleEmail } = InputHook('');

  return (
    // redirect logic

    <ForgotPassword email={email} handleEmail={handleEmail} />
  );
};
