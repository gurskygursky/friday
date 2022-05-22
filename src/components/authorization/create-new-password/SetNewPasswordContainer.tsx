import React from 'react';

import { SetNewPassword } from 'components/authorization/create-new-password/SetNewPassword';
import { useInput } from 'hooks';

export const SetNewPasswordContainer = () => {
  const {
    value: password,
    onChange: handlePassoword,
    clearValue: clearPassword,
  } = useInput('');

  return (
    <SetNewPassword
      password={password}
      handlePassword={handlePassoword}
      clearPassword={clearPassword}
    />
  );
};
