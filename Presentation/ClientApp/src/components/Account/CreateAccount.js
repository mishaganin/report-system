import React, {useState} from 'react';
import { TextField, FormControl, Button } from '@mui/material';
import {useDispatch} from "react-redux";
import {accountModel} from "../../store/models";
import {addAccount} from "../../store/actions/account";

const url = "account/create-account";

const CreateAccount = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [employeeIdError, setEmployeeIdError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmployeeIdError(employeeId === '');
    setLoginError(login === '');
    setPasswordError(password === '');

    if (employeeId && login && password) {
      accountModel.EmployeeId = employeeId;
      accountModel.Login = login;
      accountModel.Password = password;

      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(accountModel)
      })
        .then(r => r.text())
        .then(data => {
          console.log(data);
          dispatch(addAccount(JSON.parse(data)));
        });

      setEmployeeId('');
      setLogin('');
      setPassword('');
    }
  }
  return (
    <div>
      <form autoComplete={'off'} onSubmit={handleSubmit}>
        <h2>Add account</h2>
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
          label={'Enter login'}
          onChange={e => setLogin(e.target.value)}
          required
          variant={'outlined'}
          type={'text'}
          fullWidth
          margin={'dense'}
          value={login}
          error={loginError}
        />
        <TextField
          label={'Enter password'}
          onChange={e => setPassword(e.target.value)}
          variant={'outlined'}
          type={'password'}
          fullWidth
          margin={'dense'}
          value={password}
          error={passwordError}
        />
        <Button variant={'outlined'} color={'secondary'} margin={'dense'} type={'submit'}>Add</Button>
      </form>
    </div>
  )
}

export default CreateAccount;
