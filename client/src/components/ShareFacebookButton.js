import React from "react";
import { ShareButtons, generateShareIcon } from "react-share";
const { FacebookShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon("facebook");

//title, description, picture - optional props, url - required
const ShareFacebookButton = props => {
  return (
    <FacebookShareButton
      url="http://www.github.com"
      title="Title"
      description="red"
    >
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
  );
};

export default ShareFacebookButton;
