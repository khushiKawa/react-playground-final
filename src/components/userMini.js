const UserMini = (props) => {
    return ( 
        props.users.map((user,idx,users)=>{
            return <div key={users.indexOf(user)} className={user.class}> 
            <h2>{user.name}</h2>
            <h4>{user.position}</h4>
           </div> 
               
        })
    
    );
}
 
export default UserMini;
 