import React from 'react';

import { ForgotPassword } from 'components/authorization/forgot-password/ForgotPassword';
import { useInput } from 'hooks';

export const ForgotPasswordContainer = () => {
  const { value: email, onChange: handleEmail } = useInput('');

  return <ForgotPassword email={email} handleEmail={handleEmail} />;
};
