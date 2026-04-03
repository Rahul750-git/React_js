function User(props){
return(
    <>
    <h1> Name: {props.name}</h1>
    <p>Age: {props.age}</p>
    <p>City: {props.city}</p>
    <p>Phone: {props.phone}</p>
    <p>Address: {props.address}</p>
       

    </>
)
}

export default User