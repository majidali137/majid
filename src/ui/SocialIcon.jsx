import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export default function SocialIcon({ className, FooterIcon }) {
  return (
    <div>
      <div className={`flex space-x-6 md:order-2 h-9 w-9  ${className}`}>
        <a href=" https://www.facebook.com/profile.php?id=100010164333532" target="_blank">
          <BsFacebook className={ `h-9 w-9  hover:rounded-full hover:white icon ${FooterIcon}`} />
        </a>
        <a href=" https://twitter.com/MianMajidAli18?t=swgkh5om2YCTq0ypKwbeoA&s=09" target="_blank">
          <BsTwitter className={ `h-9 w-9  hover:rounded-md hover:white icon ${FooterIcon}`} />
        </a>
        <a href=" https://www.instagram.com/mianmajidali6555/" target="_blank">
          <BsInstagram className={ `h-9 w-9  hover:rounded-md hover:white icon ${FooterIcon}`} />
        </a>
        <a href=" https://github.com/majidali137" target="_blank">
          <BsGithub className={ `h-9 w-9  hover:rounded-full hover:white icon ${FooterIcon}`} />
        </a>
        <a href=" https://www.linkedin.com/in/majid-ali-b257b2290/" target="_blank">
          <BsLinkedin className={ `h-9 w-9  hover:rounded-md hover:white icon ${FooterIcon}`} />
        </a>
      </div>
    </div>
  );
}
