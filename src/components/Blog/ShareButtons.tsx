'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
} from 'next-share';
import { MotionDiv } from '../Motion/MotionDiv';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const iconSize = 32;
  const iconClassName = 'rounded transition-transform hover:scale-110';

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-4 fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex"
    >
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={iconSize} className={iconClassName} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={iconSize} className={iconClassName} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={iconSize} className={iconClassName} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={iconSize} className={iconClassName} />
      </RedditShareButton>

      {/* Mobile Version */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark-lighter border-t border-dark p-4">
        <div className="flex justify-center gap-4">
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={iconSize} className={iconClassName} />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={iconSize} className={iconClassName} />
          </TwitterShareButton>

          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon size={iconSize} className={iconClassName} />
          </LinkedinShareButton>

          <RedditShareButton url={url} title={title}>
            <RedditIcon size={iconSize} className={iconClassName} />
          </RedditShareButton>
        </div>
      </div>
    </MotionDiv>
  );
} 