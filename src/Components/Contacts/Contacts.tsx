import css from "./Contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <div id="contacts" className={css.contactsGlobalContainer}>
      <h2 className={css.contactsTitle}>контакти</h2>
      <div className={css.line}></div>
      <div className={css.contactsContainer}>
        <div className={css.contactsList}>
          <div className={css.address}>
            <div>адреса</div>
            <div>контакти</div>
          </div>
          <div className={css.location}>
            <div>вул. Куренівська, 2Б м.Київ, Україна 04073</div>
            <div className={css.emailLink}>
              <a href="mailto: btfvfoundation@gmail.com">
                btfvfoundation@gmail.com
              </a>
            </div>
          </div>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2538.328726200027!2d30.467472176154786!3d50.49083938445543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1700045276809!5m2!1sen!2sua"
          width="570"
          height="360"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form className={css.contactForm}>
          <input name="name" type="text" required placeholder="Ім'я *"></input>
          <input
            name="email"
            type="email"
            required
            placeholder="Електронна пошта *"
          ></input>
          <input
            name="tel"
            type="tel"
            required
            placeholder="Номер телефону *"
          ></input>
          <button className={css.contactBtn} type="submit">
            Зв'язатися{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
