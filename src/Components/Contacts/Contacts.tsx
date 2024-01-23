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
            <div>вул. Куренівська, 2Б м.Київ, Україна 04073</div>
          </div>
          <div className={css.contact}>
            <div>контакти</div>
            <div className={css.emailLink}>
              <a href="mailto: btfvfoundation@gmail.com">
                btfvfoundation@gmail.com
              </a>
            </div>
          </div>
        </div>

        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.3287262000295!2d30.467472176100422!3d50.490839384455384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cded4f8bd78d%3A0xd637740c7c468b0c!2sKurenivska%20St%2C%202%D0%91%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1705928411839!5m2!1sen!2sua"
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
