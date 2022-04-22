import React from 'react';

import { SignIn } from './SignIn';

import { InputHook } from 'components/hooks/input-hook/Input';

export const SignInContainer = () => {
  const { inputValues: email, handleValueOnChange: handleEmail } = InputHook('');

  // const onCancelButtonClick = (): any => {
  //   resetEmail();
  //   // resetPassword('');
  //   // resetConfirmPassword('');
  // };

  return <SignIn email={email} handleEmail={() => handleEmail} />;
};
