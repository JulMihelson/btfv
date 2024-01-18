import { useState } from "react";
import css from "./Contacts.module.css";

const Contacts: React.FC = () => {
  const [nameForm, setNameForm] = useState("");

  const [emailForm, setEmailForm] = useState("");

  const [telForm, setTelForm] = useState("");

  const requestInfo = {
    name: nameForm,
    email: emailForm,
    tel: telForm,
  };

  const contactRequest = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setNameForm("");
    setEmailForm("");
    setTelForm("");
    console.log("works");
  };

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
          className="css.map"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2538.328726200027!2d30.467472176154786!3d50.49083938445543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1700045276809!5m2!1sen!2sua"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form className={css.contactForm}>
          <input
            name="name"
            type="text"
            value={nameForm}
            onChange={(event) => {
              setNameForm(event.target.value);
            }}
            required
            placeholder="Ім'я *"
          ></input>
          <input
            name="email"
            type="email"
            value={emailForm}
            onChange={(event) => {
              setEmailForm(event.target.value);
            }}
            required
            placeholder="Електронна пошта *"
          ></input>
          <input
            name="tel"
            type="tel"
            value={telForm}
            onChange={(event) => {
              setTelForm(event.target.value);
            }}
            required
            placeholder="Номер телефону *"
          ></input>
          <button
            onSubmit={contactRequest}
            className={css.contactBtn}
            type="submit"
          >
            Зв'язатися{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
