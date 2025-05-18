import React from 'react';

const User = ({name,email,Children}) => {
  
  return (
    <div>
    <p>name:{name}</p>
    <p>email:{email}</p>
    {Children}
    </div>
  );
};

export default User;