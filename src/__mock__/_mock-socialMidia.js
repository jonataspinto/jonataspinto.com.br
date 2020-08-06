import React from 'react';
import { Github, Linkedin, Twitter, Twitch } from "styled-icons/boxicons-logos";

const data = [
  {
    key: 'github',
    url: 'https://github.com/jonataspinto',
    icon: (
      <Github />
    )
  },
  {
    key: 'linkedin',
    url: 'https://www.linkedin.com/in/jonatas-pinto-35111a164/',
    icon: (
      <Linkedin />
    )
  },
  {
    key: 'twitter',
    url: 'https://twitter.com/jonataspintorj',
    icon: (
      <Twitter />
    )
  },
  {
    key: 'twitch',
    url: 'https://www.twitch.tv/jonataspinto',
    icon: (
      <Twitch />
    )
  }
]

export default data;
