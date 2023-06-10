import {useNavigate} from "react-router-dom";
import {useState} from "react";

const HomePage = ({ socket }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('user', user);
        socket.emit('new-user', {
            user,
            socketID: socket.id
        });
        navigate('/chat');
    };

    return (
        <form onSubmit={onSubmit}>
            <h3>Вход в чат</h3>
            <label htmlFor="user-input"/>
            <input type="text" id="user-input" value={user} onChange={(event) => setUser(event.target.value)}/>
            <button type="submit">Войти в чат</button>
        </form>
    );
};

export default HomePage;