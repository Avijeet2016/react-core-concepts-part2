import './App.css'
import Counter from './Counter'
import Toggle from './Toggle'
import Like from './Like'
import Cart from './Cart'
import Bowler from './Bowler'
import { Suspense } from 'react'
import Users from './Users'
import Players from './Players'
import Comments from './Comments'

const fetchComments = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    return res.json();
}

function App() {
  // const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  const commentsPromise = fetchComments();

  return (
    <>
      {/* <Suspense fallback={<li>Users are comming...</li>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h1>Player List is Coming...</h1>}>
        <Players fetchPlayers={fetchUsers}></Players>
      </Suspense> */}
      
      <Suspense fallback={<li>Comments are comming...</li>}>
        <Comments commentsPromise={commentsPromise}></Comments>
      </Suspense>

      <Counter></Counter>
      <Toggle></Toggle>
      <Like></Like>
      <Cart></Cart>
      <Bowler></Bowler>
    </>
  )
}

export default App
