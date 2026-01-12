import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import './SocialLinks.css';
export function SocialLinks() {
  const iconSize = 26;
  return (
    <ul className='socials'>
      <li className='socials__item'>
        <FaGithub size={iconSize} />
      </li>
      <li className='socials__item'>
        <FaLinkedinIn size={iconSize} />
      </li>
      <li className='socials__item'>
        <FaX size={iconSize} />
      </li>
    </ul>
  );
}
