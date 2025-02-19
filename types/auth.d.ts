export type LoginPayload = {
  email: string;
  password: string;
};

export type ForgotPAsswordPayload = {
    email: string;
}

export type LoginResponse = {
  user: {
    username: string;
    email: string;
  };
  role: string;
  token: string;
};
