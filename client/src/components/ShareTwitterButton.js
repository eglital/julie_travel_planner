import { ShareButtons, generateShareIcon } from "react-share";
const { TwitterShareButton } = ShareButtons;
const TwitterIcon = generateShareIcon("twitter");

// title: Title of the shared page (string)
// via: (string)
// hashtags: (array)
const TwitterShareButton = props => {
  return <TwitterIcon size={32} round={true} />;
};

export default TwitterShareButton;
