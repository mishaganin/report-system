import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {sendMessageModel} from "../../store/models";
import {sendMessage} from "../../store/actions/messageSource";

const url = "messagesource/send-message";

const SendMessage = () => {
  const [accountId, setAccountId] = useState('');
  const [messageSourceId, setMessageSourceId] = useState('');
  const [text, setText] = useState('');
  const [accountIdError, setAccountIdError] = useState(false);
  const [messageSourceIdError, setMessageSourceIdError] = useState(false);
  const [textError, setTextError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setAccountIdError(accountId === '');
    setMessageSourceIdError(messageSourceId === '');
    setTextError(text === '');

    if (accountId && messageSourceId && text) {
      sendMessageModel.AccountId = accountId;
      sendMessageModel.MessageSourceId = messageSourceId;
      sendMessageModel.Text = text;

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendMessageModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(sendMessage(JSON.parse(data)));
        });

      setAccountId('');
      setMessageSourceId('');
      setText('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Send message</h2>
        <TextField
          label={'Enter account ID'}
          onChange={e => setAccountId(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={accountId}
          error={accountIdError}
        />
        <TextField
          label={'Enter message source ID'}
          onChange={e => setMessageSourceId(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={messageSourceId}
          error={messageSourceIdError}
        />
        <TextField
          label={'Enter text'}
          onChange={e => setText(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={text}
          error={textError}
        />
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Send</Button>
      </form>
    </div>
  )
}

export default SendMessage;
