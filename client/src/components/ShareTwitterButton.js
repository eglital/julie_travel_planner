import React from "react";
import { ShareButtons, generateShareIcon } from "react-share";
const { TwitterShareButton } = ShareButtons;
const TwitterIcon = generateShareIcon("twitter");

// title: Title of the shared page (string)
// via: (string)
// hashtags: (array)
const ShareTwitterButton = props => {
  return (
    <TwitterShareButton url="something" title="Title" hashtags={["cool"]}>
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
  );
};

export default ShareTwitterButton;
