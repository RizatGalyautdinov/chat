import {
    BodyHeader,
    SendedMessage,
    RecivedMessage,
    Container,
    LeaveButton,
    SenderMessage, ReciverMessage
} from "./styled";
import {useNavigate} from "react-router-dom";

const Body = ({ socket, messages }) => {
    const navigate = useNavigate();
    const onClick = () => {
        socket.emit('logout', {
            user: localStorage.getItem('user'),
            socketID: socket.id
        });
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div>
            <BodyHeader>
                <LeaveButton onClick={onClick}>Покинуть чат</LeaveButton>
            </BodyHeader>
            <Container>
                {messages.map(element =>
                    element.name === localStorage.getItem('user') ? (
                        <SendedMessage key={element.id}>
                            <p>Вы</p>
                            <SenderMessage>
                                <p>{element.text}</p>
                            </SenderMessage>
                        </SendedMessage>
                    ) : (
                        <RecivedMessage key={element.id}>
                            <p>{element.name}</p>
                            <ReciverMessage>
                                <p>{element.text}</p>
                            </ReciverMessage>
                        </RecivedMessage>
                    ))
                }
            </Container>
        </div>
    );
};

export default Body;

