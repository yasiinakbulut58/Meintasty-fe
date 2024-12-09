'use client';

import React from 'react';
import { IUser } from '@/lib/data';
import UserSection from './UserSection';
import LoginDetailsSection from './LoginDetailsSection';

type Props = {
  user: IUser | undefined;
};
const Profile = ({ user }: Props) => {
  /*  const [userInfo, setUserInfo] = useState<IUser | undefined>(user);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserDetail(1);
      console.log(response);
    };
    fetchUser();
  }, []); */
  return (
    <>
      <UserSection user={user} />
      <LoginDetailsSection user={user} />
    </>
  );
};

export default Profile;
