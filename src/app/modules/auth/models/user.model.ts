export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
}

export const userMock: User = {
  id: 1,
  name: 'Mario',
  surname: 'Rossi',
  email: 'mario.rossi@example.com'
};
