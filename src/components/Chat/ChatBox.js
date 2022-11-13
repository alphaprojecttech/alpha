import { BiConversation } from "react-icons/bi"
import { useChat } from "../../context/ChatContext"
import { useProject } from "../../context/ProjectContext"
import { useState } from 'react'

export default function ChatBox(){
    const { allProjects } = useProject()
    const { allConversations } = useChat()
    const [ chatWindow, setChatWindow ] = useState()

    console.log(allProjects)

    const handleChangeConversation = (pid)=>{
        console.log(pid)
        setChatWindow(pid)
    }


    
    return(
        <div style={{position: 'absolute', display: 'flex', flexDirection: 'column', margin: 5, padding: 5, fled: 1, flexWrap: 'wrap'}}>
                <h3 style={{backgroundColor: 'black', color: 'white'}}>All Conversations</h3>
            <div style={{display: 'flex', flexDirection: 'row', overflow: 'scroll'}}>
                {allConversations.map((conversation)=>{
                    return(
                        <div onClick={()=> handleChangeConversation(conversation.pid)} key={conversation.cid} style={{margin: 3, padding: 5, backgroundColor: 'black', color: 'white'}}>
                            {conversation.cid.slice(0, 8)}

                        </div>
                    )
                })}
            </div>
            {chatWindow}
            <div style={{display: 'flex',  flexDirection: 'column'}}>
                <textarea placeholder="Enter message.." rows = "4" cols = "30" style={{width: '100%'}}/>
                <button style={{backgroundColor: 'black', color: 'white'}}>Send</button>
            </div>
        </div>
    )
}