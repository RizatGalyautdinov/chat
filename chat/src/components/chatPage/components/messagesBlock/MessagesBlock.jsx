import {Input, MessagesBlockWrapper} from "./styled";
import {useState} from "react";

const MessagesBlock = ({ socket }) => {
    const [message, setMessage] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        if (message.trim() && localStorage.getItem('user')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('user'),
                id: `${socket.id}-${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('');
    };

    return (
        <MessagesBlockWrapper>
            <form onSubmit={onSubmit}>
                <Input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />
                <button>Отправить</button>
            </form>
        </MessagesBlockWrapper>
    );
};

export default MessagesBlock;