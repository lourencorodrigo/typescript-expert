type User = {
  id: number;
  name: string;
  email: string;
};

// Remove the 'email' property from the User type
type WithoutEmail = Omit<User, 'email'>;
