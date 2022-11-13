


export default function ChatBox(){



    
    return(
        <div style={{position: 'absolute', bottom: 10, display: 'flex', flexDirection: 'column', margin: 5, padding: 5}}>
            <p>This is a message</p>
            <div style={{display: 'flex',  flexDirection: 'column'}}>
                <textarea placeholder="Enter message.." rows = "4" cols = "30" style={{width: '100%'}}/>
                <button style={{backgroundColor: 'black', color: 'white'}}>Send</button>
            </div>
        </div>
    )
}