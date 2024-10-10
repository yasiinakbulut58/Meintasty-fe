import { useSession } from 'next-auth/react';
import { FC } from 'react';

const UserDetail: FC = () => {
  const { data: session } = useSession();
  return (
    <div className="profile-top">
      <div className="profile-detail">
        <h5>{session?.user.name}</h5>
        <h6>{session?.user.email}</h6>
      </div>
    </div>
  );
};

export default UserDetail;
