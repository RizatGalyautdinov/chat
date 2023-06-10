import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";
import MessagesBlock from "./components/messagesBlock/MessagesBlock";
import {ChatPageWrapper, MainContent} from "./components/styled";
import {useEffect, useState} from "react";

const ChatPage = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        socket.on('response', (data) => {
            setMessages([...messages, data])
        })
    }, [socket, messages])

    return (
        <ChatPageWrapper>
            <Sidebar socket={socket} />
            <MainContent>
                <Body socket={socket} messages={messages} />
                <MessagesBlock socket={socket} />
            </MainContent>
        </ChatPageWrapper>
    )
};

export default ChatPage;