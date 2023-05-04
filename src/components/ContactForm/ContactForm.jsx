import css from './ContactForm.module.css';
import {addContact} from '../../redux/actions';

import { useDispatch } from "react-redux";

export const ContactForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact(name, number))
  
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
