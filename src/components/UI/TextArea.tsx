'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const autoResizeTextArea = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const element = event.target;
      element.style.height = 'auto';
      element.style.height = element.scrollHeight + 'px';
    };

    return (
      <div className='p-3'>
        <textarea
          className={cn(
            'flex min-h-[28px] max-h-[500px] w-full text-xl bg-background placeholder:text-primary-gray  disabled:cursor-not-allowed disabled:opacity-50 outline-none resize-none overflow-hidden',
            className
          )}
          ref={ref}
          {...props}
          onChange={autoResizeTextArea}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
