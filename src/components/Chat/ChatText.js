import { useState } from 'react'
import { useChat} from '../../context/ChatContext'

export default function ChatText({currentConversation}){

    const {sendMessage } = useChat()
    const [ message, setMessage ] = useState('')
    const [ media, setMedia ] = useState('http://imagelink.jpg')

    const handleMessageInput = (e)=>{
        setMessage(e.target.value)
    }

    
    const handleSendMessage = () =>{

        sendMessage({
            cid: currentConversation.cid,
            pid: currentConversation.pid,
            message: message,
            media: media
        })
    }


    return(
        <div style={{display: 'flex',  flexDirection: 'column'}}>
                <textarea value={message} onChange={handleMessageInput} placeholder="Enter message.." rows = "4" cols = "30" style={{width: '100%'}}/>
                <button onClick={handleSendMessage} style={{backgroundColor: 'green', color: 'white'}}>Send</button>
        </div>
    )
}