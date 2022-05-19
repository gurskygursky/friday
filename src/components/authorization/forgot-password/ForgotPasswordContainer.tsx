import React from 'react';

import { ForgotPassword } from 'components/authorization/forgot-password/ForgotPassword';
import { InputHook } from 'components/hooks/input-hook/InputHook';

export const ForgotPasswordContainer = () => {
  const { inputValue: email, handleInputValue: handleEmail } = InputHook('');

  return <ForgotPassword email={email} handleEmail={handleEmail} />;
};
