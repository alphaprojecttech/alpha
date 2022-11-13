import { useChat } from "../../context/ChatContext"
import { useProject } from "../../context/ProjectContext"
import { useState } from 'react'
import Conversations from "./Conversations"
import ChatText from "./ChatText"
import ChatWindow from "./ChatWindow"

export default function ChatBox(){
    const { allProjects } = useProject()
    const { allConversations } = useChat()
    const [ currentConversation, setCurrentConversation ] = useState()
    
    return !allProjects && !allConversations? 'Loading..' :
        <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', margin: 5, padding: 5, fled: 1, flexWrap: 'wrap'}}>
            <Conversations setCurrentConversation={setCurrentConversation} />
            <ChatWindow currentConversation={currentConversation} />
            <ChatText currentConversation={currentConversation} />
        </div>
    
}