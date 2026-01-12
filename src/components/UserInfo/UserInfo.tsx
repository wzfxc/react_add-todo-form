interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={user.email}>
    {user.name}
  </a>
);
