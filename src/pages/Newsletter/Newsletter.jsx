import NewsletterForm from '@/components/NewsletterForm/NewsletterForm';

function Newsletter () {
  return (
    <section className="Newsletter">
      <picture className="Newsletter-picture">
        <source className="Newsletter-sourceImg" media="(min-width: 768px)" srcSet="/illustration-sign-up-desktop.svg" alt="Illustration desktop" loading="lazy"/>
        <img className="Newsletter-Img" src='/illustration-sign-up-mobile.svg' alt="Illustration mobile" loading="lazy" />
      </picture>

      <div className="Newsletter-container">
        <h1 className="Newsletter-h1">Stay Updated!</h1>

        <p className="Newsletter-p">Join 60,000+ product managers receiving monthly updates on:</p>

        <ul className="Newsletter-list">
          <li className="Newsletter-list-item">
            <img className="Newsletter-icon" src="/icon-list.svg" alt="Check icon" />
            <p className="Newsletter-p">
              Product discovery and building what matters
            </p>
          </li>
          <li className="Newsletter-list-item">
            <img className="Newsletter-icon" src="/icon-list.svg" alt="Check icon" />
            <p className="Newsletter-p">
              Measuring to ensure updates are a success
            </p>
          </li>
          <li className="Newsletter-list-item">
            <img className="Newsletter-icon" src="/icon-list.svg" alt="Check icon" />
            <p className="Newsletter-p">
              And much more!
            </p>
          </li>
        </ul>

        <NewsletterForm />
      </div>
    </section>
  );
}
export default Newsletter;
