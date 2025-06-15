const superHeroes: Array<String> = [];

superHeroes.push('Ironman');
superHeroes.push('Superman');
superHeroes.push('Ganduman')

// console.log(superHeroes);

type User = {
    id:Number
    name:string,
    isLoggedIn:boolean
}

const users:Array<User> = []

users.push({id:1,name:'hello',isLoggedIn:true})
users.push({id:2,name:'world',isLoggedIn:false})

// console.log(users);

const mdArray:Number[][]=[]
mdArray.push([])
mdArray[0].push(1)
mdArray.push([])
mdArray[1].push(2)
// console.log(mdArray);
