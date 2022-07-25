// import {hello, add} from "./util"
import "./style.css"
import "./header.css"
import List from "./List";
// import logo from "./react.jpeg"


// const text = hello("<h1>웹팩 번들링!!</h1>");
// const num = add(1, 2);
// const img = `<img src="${logo}" alt="리액트 로고" width="500px"/>`

const users = [
    {
        id : 1,
        name : "회원 1",
    },
    {
        id : 2,
        name : "회원 2",
    },
    {
        id : 3,
        name : "회원 3",
    },
    {
        id : 4,
        name : "회원 4",
    },
    {
        id : 5,
        name : "회원 5",
    },
]
document.getElementById('root').appendChild(
    List({userList: users})
)