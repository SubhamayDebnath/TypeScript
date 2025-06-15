// const obj:any = {
//     name:'hello',
//     email:'example@gmail.com',
//     phone:12345678,
//     isLoggedIn:true
// }
var user = {
    _id: 1,
    name: 'hello'
};
user.name = 'world';
console.log("Id of ".concat(user.name, " is ").concat(user._id));
