import Menu from "../Menu";

const options = [
  {
    route: '/create-account',
    label: 'Create an account'
  }
];

const Account = () => {
  return <Menu options={options} />
}

export default Account;
