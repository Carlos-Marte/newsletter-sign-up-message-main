import { useLocation, useNavigate } from 'react-router-dom';

function SubscribedSuccess () {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;

  const handleOnClick = () => navigate('/');

  return (
    <section className="SubscribedSuccess">
      <div className="SubscribedSuccess-container">
        <img src="/icon-success.svg" alt="Success Icon" className="SubscribedSuccess-icon" />

        <h1 className="SubscribedSuccess-h1">
          Thanks for subscribing!
        </h1>

        <p className="SubscribedSuccess-p">
          A confirmation email has been sent to <span className="SubscribedSuccess-span">{email || 'ash@loremcompany.com'}</span>. Please open it and click the button inside to confirm your subscription
        </p>
      </div>

      <button className="SubscribedSuccess-button" onClick={handleOnClick}>Dismiss message</button>
    </section>
  );
}
export default SubscribedSuccess;
