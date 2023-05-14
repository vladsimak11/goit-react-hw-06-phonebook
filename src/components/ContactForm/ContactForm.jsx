import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';
import {getContacts} from '../../redux/selectors';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

const contactsName = [];

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    
    contacts.forEach(contact => {
      contactsName.push(contact.name);
    });

    const form = event.target;

    const contactsValue = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    }

    if(contactsName.includes(contactsValue.name)) {

      toast.warn(`${contactsValue.name} is already in contacts`, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      return;
    } else (
      dispatch(addContact(contactsValue))
    )

    form.reset();
  };

  return (
  <form onSubmit={handleSubmit} className={css.form}>
    <label className={css.label}>
      Name
      <input
        className={css.input}
        type="text"
        placeholder="Enter your name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>

    <label className={css.label}>
      Number
      <input
        className={css.input}
        type="text"
        placeholder="Enter your number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>

    <button className={css.button} type="submit">Add contact</button>
  </form>
)
}
