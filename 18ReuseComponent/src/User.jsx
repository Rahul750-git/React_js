function User(data){
    return(
        <div style={{border:"1px solid black",
        margin:"10px",
        padding:"10px",
        borderRadius:"5px",
        backgroundColor:"lightgray",
        color:"green",
        width:"300px",
        display:"inline-block",
        display:"grid",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
        }}>
            <h3>Name: {data.data.name}</h3>
            <p>Age: {data.data.age}</p>
            <p>Email: {data.data.email}</p>
        </div>
    )
}

export default User;