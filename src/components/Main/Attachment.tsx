import { FC } from 'react';
import { Image, Smile, CalendarClock, MapPin } from 'lucide-react';
import { Button } from '../UI/Button';

interface AttachmentProps {}

const Attachment: FC<AttachmentProps> = () => {
  return (
    <div>
      <Button variant='icon' size='icon'>
        <Image className="text-twitter-blue-500" size="20" />
      </Button>
      <Button variant='icon' size='icon'>
        <Smile className="text-twitter-blue-500" size="20" />
      </Button>
      <Button variant='icon' size='icon'>
        <CalendarClock className="text-twitter-blue-500" size="20" />
      </Button>
      <Button variant='icon' size='icon' disabled>
        <MapPin className="text-twitter-blue-500" size="20" />
      </Button>
    </div>
  );
};

export default Attachment;
