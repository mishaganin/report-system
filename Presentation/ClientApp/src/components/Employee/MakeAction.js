import React, {useState} from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {makeActionModel} from "../../store/models";
import {makeAction} from "../../store/actions/employee";

const url = "employee/make-action";

const MakeAction = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [messageId, setMessageId] = useState('');
  const [type, setType] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState(false);
  const [messageIdError, setMessageIdError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployeeIdError(employeeId === '');
    setMessageIdError(messageId === '');
    setTypeError(type === '');

    if (employeeId && messageId && type) {
      makeActionModel.EmployeeId = employeeId;
      makeActionModel.MessageId = messageId;
      makeActionModel.Type = type;

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(makeActionModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(makeAction(JSON.parse(data)));
        });

      setEmployeeId('');
      setMessageId('');
      setType('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Make action</h2>
        <TextField
          label={'Enter employee id'}
          onChange={e => setEmployeeId(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={employeeId}
          error={employeeIdError}
        />
        <TextField
          label={'Enter message id'}
          onChange={e => setMessageId(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={messageId}
          error={messageIdError}
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
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Make action</Button>
      </form>
    </div>
  )
}

export default MakeAction;
