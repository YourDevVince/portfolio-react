import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xykkyarv');
  if (state.succeeded) {
    return (
      <div className='contact'>
        <div className='contact__container'>
          <header className='contact__header'>
            <h2 className='contact__title'>Contact</h2>
            <p className='contact__subtitle'>
              Want to work together or have a question? Send a message.
            </p>
          </header>

          <div className='contact__content'>
            <form className='contact__form' onSubmit={handleSubmit}>
              <label className='contact__field'>
                <span className='contact__label'>Name</span>
                <input
                  className='contact__input'
                  type='text'
                  name='name'
                  placeholder='Your name'
                  autoComplete='name'
                  required
                />
              </label>

              <label className='contact__field'>
                <span className='contact__label'>Email</span>
                <input
                  className='contact__input'
                  type='email'
                  name='email'
                  placeholder='you@email.com'
                  autoComplete='email'
                  required
                />
                <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                />
              </label>

              <label className='contact__field contact__field--message'>
                <span className='contact__label'>Message</span>
                <textarea
                  className='contact__textarea'
                  name='message'
                  placeholder='What can I help with?'
                  rows={6}
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </label>

              <div className='contact__actions'>
                <button
                  className='contact__submit'
                  type='submit'
                  disabled={state.submitting}
                >
                  Send message
                </button>

                <a
                  className='contact__button'
                  href='mailto:vvillanueva@yourdevvince.com'
                >
                  Email me instead
                </a>
                <p className='contact__subtitle'>
                  Your submission has been sent! &#9989;
                </p>
              </div>
            </form>

            <aside className='contact__card' aria-label='Contact links'>
              <h3 className='contact__card-title'>Links</h3>

              <ul className='contact__links'>
                <li className='contact__links-item'>
                  <a
                    className='contact__link'
                    href='https://github.com/yourdevvince'
                    target='_blank'
                    rel='noreferrer'
                  >
                    GitHub
                  </a>
                </li>
                <li className='contact__links-item'>
                  <a
                    className='contact__link'
                    href='https://www.linkedin.com/in/vince-a-villanueva/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
                <li className='contact__links-item'>
                  <a
                    className='contact__link'
                    href='mailto:vvillanueva@yourdevvince.com'
                  >
                    vvillanueva@yourdevvince.com
                  </a>
                </li>
              </ul>

              <p className='contact__note'>Usually reply within 24-48 hours.</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='contact'>
      <div className='contact__container'>
        <header className='contact__header'>
          <h2 className='contact__title'>Contact</h2>
          <p className='contact__subtitle'>
            Want to work together or have a question? Send a message.
          </p>
        </header>

        <div className='contact__content glass'>
          <form className='contact__form' onSubmit={handleSubmit}>
            <label className='contact__field'>
              <span className='contact__label'>Name</span>
              <input
                className='contact__input'
                type='text'
                name='name'
                placeholder='Your name'
                autoComplete='name'
                required
              />
            </label>

            <label className='contact__field'>
              <span className='contact__label'>Email</span>
              <input
                className='contact__input'
                type='email'
                name='email'
                placeholder='you@email.com'
                autoComplete='email'
                required
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </label>

            <label className='contact__field contact__field--message'>
              <span className='contact__label'>Message</span>
              <textarea
                className='contact__textarea'
                name='message'
                placeholder='What can I help with?'
                rows={6}
                required
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </label>

            <div className='contact__actions'>
              <button
                className='contact__submit'
                type='submit'
                disabled={state.submitting}
              >
                Send message
              </button>

              <a
                className='contact__button'
                href='mailto:vvillanueva@yourdevvince.com'
              >
                Email me instead
              </a>
            </div>
          </form>

          <aside className='contact__card' aria-label='Contact links'>
            <h3 className='contact__card-title'>Links</h3>

            <ul className='contact__links'>
              <li className='contact__links-item'>
                <a
                  className='contact__link'
                  href='https://github.com/yourdevvince'
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub
                </a>
              </li>
              <li className='contact__links-item'>
                <a
                  className='contact__link'
                  href='https://www.linkedin.com/in/vince-a-villanueva/'
                  target='_blank'
                  rel='noreferrer'
                >
                  LinkedIn
                </a>
              </li>
              <li className='contact__links-item'>
                <a
                  className='contact__link'
                  href='mailto:vvillanueva@yourdevvince.com'
                >
                  vvillanueva@yourdevvince.com
                </a>
              </li>
            </ul>

            <p className='contact__note'>Usually reply within 24-48 hours.</p>
          </aside>
        </div>
      </div>
    </div>
  );
}
