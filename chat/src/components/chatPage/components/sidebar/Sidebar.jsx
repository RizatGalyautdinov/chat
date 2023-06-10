import { Header, SidebarWrapper, User, Users } from "./styled";
import {useEffect, useState} from "react";

const Sidebar = ({ socket }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.on('response-new-user', (data) => {
            setUsers(data);
        })
    }, [socket, users])

    const filteredList = users.filter((value, index, self) =>
        index === self.findIndex((t) => (
        t.user === value.user && t.socketID === value.socketID
            ))
    );

    return (
        <SidebarWrapper>
            <Header>Users</Header>
            <Users>
                {filteredList.map(element =>
                    <User key={element.socketID}>{element.user}</User>
                )}
            </Users>
        </SidebarWrapper>
    );
};

export default Sidebar;

