import { useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewsletterForm () {
  const [isValidEmail, setisValidEmail] = useState(false);
  const navigate = useNavigate();
  const inputEmailId = useId();

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const { emailValue } = Object.fromEntries(new window.FormData(event.target));

    if (emailValue && validateEmail(emailValue)) {
      navigate('/subscribed');
    }
  };

  return (
    <form className='NewsletterForm' action="#" onSubmit={handleOnSubmit}>
      <label className='NewsletterForm-label' htmlFor={inputEmailId}>
        <div className='NewsletterForm-containerLabelMessages'>
          Email address
          {Boolean(isValidEmail) && <p className='NewsletterForm-errorMessage'>Valid email required</p>}
        </div>
        <input className={isValidEmail ? 'NewsletterForm-input isInvalidEmail' : 'NewsletterForm-input'} id={inputEmailId} type="text" placeholder="email@company.com" name='emailValue' />
      </label>
      <input className='NewsletterForm-input NewsletterForm-input--button' type="submit" value="Subscribe to monthly newsletter" />
    </form>
  );
}
export default NewsletterForm;
