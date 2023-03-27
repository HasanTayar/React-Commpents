import './cards.css'
import Buttonmaker from "../Buttonmaker/Buttons"
const btns=[{
  id:'1',
  Btnname:'Share'
},
{
  id:'2',
  Btnname:'Explore'
}
];
export default function Cards({img , title , bio} ){
    return (
        <div className="container-flex">
        <div class="card">
  <img src={img} alt="Avatar"/>
  <div class="container">
    <h4><b>{title}</b></h4>
    <p>{bio}</p>
    <p>
    {btns.map((
        {id , Btnname})=>
    <Buttonmaker id={id} Btnname={Btnname} />
    )}
      </p>
  </div>
</div>
</div>
    )
}