import { useChat } from "../../context/ChatContext"

export default function Conversations({setCurrentConversation}){

    const { allConversations } = useChat()

    const handleChangeConversations = (conversation)=>{
        setCurrentConversation(conversation)
    }

   
    return(
        <div>
            <h3 style={{ color: 'white'}}>All Conversations</h3>
                <div style={{display: 'flex', flexDirection: 'row', overflow: 'scroll'}}>
                {allConversations.map((conversation)=>{
                    return(
                        <div onClick={()=> handleChangeConversations(conversation)} key={conversation.cid} style={{margin: 3, padding: 5, backgroundColor: 'grey', color: 'white'}}>
                            {conversation.cid.slice(0, 8)}
                        </div>
                        )
                    })}
                </div>
        </div>
    )
}