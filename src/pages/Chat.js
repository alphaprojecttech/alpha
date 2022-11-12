import Users from "../components/Chat/Users";


export default function Chat(){
    return(
        <div style={{display: 'flex', flex: 1, flexDirection: 'row', height: '100vh'}}>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', backgroundColor: 'grey'}}>
                <Users />
            </div>
            <div style={{display: 'flex', flex: 3, backgroundColor: 'green'}}>
                Box 2
            </div>
            <div style={{display: 'flex', flex: 1, backgroundColor: 'purple'}}>
                Box 3
            </div>
        </div>
    )
}