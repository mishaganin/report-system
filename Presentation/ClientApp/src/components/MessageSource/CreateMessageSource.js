import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {messageSourceModel} from "../../store/models";
import {addMessageSource} from "../../store/actions/messageSource";

const url = "messagesource/create-message-source";

const Account = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [nameError, setNameError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setNameError(name === '');
    setTypeError(type === '');

    if (name && type) {
      messageSourceModel.Name = name;
      messageSourceModel.Type = type;

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageSourceModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(addMessageSource(JSON.parse(data)));
        });

      setName('');
      setType('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Add message source</h2>
        <TextField
          label={'Enter name'}
          onChange={e => setName(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={name}
          error={nameError}
        />
        <TextField
          label={'Enter type'}
          onChange={e => setType(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={type}
          error={typeError}
        />
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Add</Button>
      </form>
    </div>
  )
}

export default Account;
