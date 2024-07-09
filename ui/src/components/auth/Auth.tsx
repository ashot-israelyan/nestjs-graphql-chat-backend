import { FC, PropsWithChildren, useState } from 'react';
import { Button, Stack, TextField } from '@mui/material';

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
}

const Auth: FC<PropsWithChildren<AuthProps>> = ({
  submitLabel,
  onSubmit,
  children,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Stack
      spacing={3}
      sx={{
        height: '100vh',
        maxWidth: {
          xs: '70%',
          md: '30%',
        },
        margin: '0 auto',
        justifyContent: 'center',
      }}
    >
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;
