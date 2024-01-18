import { FC } from 'react';
import { Avatar, AvatarImage } from '../UI/Avatar';
import { Textarea } from '../UI/TextArea';
import Attachment from './Attachment';
import { Button } from '../UI/Button';

interface TweetBoxProps {}

const TweetBox: FC<TweetBoxProps> = () => {
  return (
    <section className="flex border-b border-gray-border px-4 pt-1">
      <div className="pt-3 mr-3">
        <Avatar>
          <AvatarImage src="/profilepic.jpg" alt="profile" />
        </Avatar>
      </div>
      <div className="grow">
        <Textarea
          placeholder="What is happening?!"
          className="w-full"
          rows={1}
        />
        <div className='flex justify-between py-2'>
          <Attachment />
          <Button>Post</Button>
        </div>
      </div>
    </section>
  );
};

export default TweetBox;
