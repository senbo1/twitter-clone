import { FC } from 'react';
import { Avatar, AvatarImage } from '../UI/Avatar';
import { BsThreeDots } from 'react-icons/bs';

interface UserProfileProps {}

const UserProfile: FC<UserProfileProps> = () => {
  return (
    <section className="hidden xl:flex items-center gap-3 mb-1 p-3 rounded-full hover:bg-primary-light/10 transition-all duration-200">
      <Avatar>
        <AvatarImage src="/profilepic.jpg" alt="profile" />
        {/* Todo Add Avatar Fallback based on first character of name */}
      </Avatar>
      <div className="flex flex-col justify-center">
        <p className="font-black text-sm truncate">harsh</p>
        <p className="text-gray-500 text-sm truncate">@senbodev</p>
      </div>
      <BsThreeDots className="w-5 h-5 ml-auto" />
    </section>
  );
};

export default UserProfile;
