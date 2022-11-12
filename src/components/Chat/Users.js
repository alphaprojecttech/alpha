import { useAuth } from '../../context/AuthContext'
import blank from '../../blank.png'

export default function Users(){

    let { allUsers } = useAuth()

    return !allUsers? 'Loading..' : allUsers.users.map((user)=>{
        return <div key={user.uid} style={{display: 'flex', flexDirection: 'row', backgroundColor: 'black', marginTop: 5, marginBottom: 5, padding: 10}}>
                    <div>
                        <img src={user.photoURL || blank} style={{borderRadius: 100, width: 50, height: 50}} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: 5}}>
                        <h3 style={{color: 'white', fontWeight: 'bold'}}>{user.displayName || user.uid.slice(0, 10)}</h3>
                        <p style={{color: 'white', fontSize: 14}}>{user.displayName || user.uid.slice(0, 10)}</p>
                    </div>
                </div>
    })
}