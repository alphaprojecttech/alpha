import ChatBox from "../components/Chat/ChatBox";
import Users from "../components/Chat/Users";

export default function Chat(){

  

    return(
        <div style={{position: 'absolute', display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw'}}>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: 'grey'}}>
                <Users />
            </div>
            <div style={{position: 'relative', display: 'flex', flex: 3, flexDirection: 'column'}}>
                <ChatBox />
            </div>
            <div style={{display: 'flex', flex: 1, backgroundColor: 'purple'}}>
                Box 3
            </div>
        </div>
    )
}