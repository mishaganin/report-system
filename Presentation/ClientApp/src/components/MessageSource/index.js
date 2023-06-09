import Menu from "../Menu";

const options = [
  {
    route: '/create-message-source',
    label: 'Create a message source'
  },
  {
    route: '/send-message',
    label: 'Send message'
  }
];

const MessageSource = () => {
  return <Menu options={options} />
}

export default MessageSource;
