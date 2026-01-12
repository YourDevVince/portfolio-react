import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import './SocialLinks.css';

export function SocialLinks() {
  const iconSize = 26;

  return (
    <ul className='socials'>
      <li>
        <a
          className='socials__link'
          href='https://github.com/YourDevVince'
          target='_blank'
          rel='noreferrer'
          aria-label='GitHub'
        >
          <FaGithub className='socials__icon' size={iconSize} />
        </a>
      </li>

      <li>
        <a
          className='socials__link'
          href='https://www.linkedin.com/in/vince-a-villanueva?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpplbVCvFQUm1BFV5HFWOEg%3D%3D'
          target='_blank'
          rel='noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedinIn className='socials__icon' size={iconSize} />
        </a>
      </li>

      <li>
        <a
          className='socials__link'
          href='https://x.com/yourdevvince'
          target='_blank'
          rel='noreferrer'
          aria-label='X'
        >
          <FaX className='socials__icon' size={iconSize} />
        </a>
      </li>
    </ul>
  );
}
