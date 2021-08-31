import React from "react";

interface User{
    name:string,
    age:number
}
interface UserSearchProps{
    users:User[]
}

interface UserSearchState{
    name:string,
    user:User |undefined
}
export default class UserSearchClass extends React.Component<UserSearchProps>{

    state:UserSearchState={
        name:'',
        user:undefined
    }

     onCLick=() =>{
        const foundUser =this.props.users.find((user) =>{
                return user.name == this.state.name
        });
        this.setState({user:foundUser});
        console.log(foundUser);
    }

    render(){
        const {name,user}=this.state
       
        return (
            <div>
                <p>User search here</p>
                <input type='text' value={this.state.name} onChange={e =>this.setState({name:e.target.value})}/>
                <button onClick={this.onCLick}>search</button>
                <div>
                    {this.state.user && this.state.user.name}
                    {user && user.age}
                </div>
            
        </div>


        )
    }
}