import { BiConversation } from "react-icons/bi"
import { useChat } from "../../context/ChatContext"
import { useProject } from "../../context/ProjectContext"
import { useEffect, useState } from 'react'
import Conversations from "./Conversations"

export default function ChatWindow({currentConversation}){
    const [ messages, setMessages ] = useState()
    let { allConversations } = useChat()

    useEffect(()=>{
        if(!allConversations) return
        let array = []
        allConversations.forEach((conversation)=> {
            if(conversation?.cid === currentConversation?.cid){
                setMessages(Object.values(conversation?.messages))
                console.log(messages)
            }
        })
    }, [ currentConversation ])



return !currentConversation? 'Select a project' :
    <div style={{backgroundColor: 'blue'}}>
        {!messages? 'Loading..' :
            messages.map(message =>{
                return(
                    <div>
                        {message.message}
                    </div>
                )
            })
        }
   
      
    </div>


}