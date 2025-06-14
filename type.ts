type User={
    name:string,
    email:string,
    isLoggedIn:Boolean
}

function createUser(user:User):User{
    return user
}

// console.log(createUser({name:"hello",email:'hello',isLoggedIn:true}));

type Point = {
    x:number | string,
    y:number | string
}

const pointCord = (pt:Point)=>{
    console.log(`x : ${pt.x} and y : ${pt.y}`);
}

// pointCord({x:100,y:"200"})