import { useState } from 'react'
import CounterBtn from './Commpents/CounterBtn/CounterBtn';
import Show_Hide from './Commpents/Show_Hide/Show_Hide';

// import Cards from './Commpents/Cards/Cards'
// const cards = [
//   {
//     img: 'https://media.istockphoto.com/id/531253600/photo/sunrise.jpg?s=1024x1024&w=is&k=20&c=OQe1shODIBCg5ZXugY6GuouUnT1bobtb0ReKO6Iu8l8=',
//     title: 'Sun Rise',
//     bio: 'That\'s a Sun Rise',
//   },
//   {
//     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/330px-FullMoon2010.jpg',
//     title: 'Moon',
//     bio: 'That\'s a Moon',
//   },
//   {
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7I9baRftbCERHvWWQA3uv21asqrfTEFpaPz3d6KveTw&s',
//     title: 'Phoenix!',
//     bio: 'That\'s a Phoenix!',
//   },
// ];


function App() {  

  const [flag , setFlag]=useState(false);
console.log(flag);
  return (
  <> 
  <CounterBtn/>
  {/* {cards.map(({img , title , bio})=>
  <Cards key={title} img={img} bio={bio} />
  )} */}
  <button onClick={()=>{
    if(flag == false) 
      setFlag(true); 
    if(flag == true) 
      setFlag(false);}}
      >Show/Hide</button>
  <Show_Hide flag={flag} />
</>
  )
}

export default App
