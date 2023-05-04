const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  ],

  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact": 
      return {
        ...state,

        contacts: [
          action.payload, 
          ...state.contacts,

        ]
      };
    
    case "contacts/deleteContact": 
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }

    case "filters/filterContacts": 
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state;
  }
};