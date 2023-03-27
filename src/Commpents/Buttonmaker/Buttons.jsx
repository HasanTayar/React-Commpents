import './buttons.css'
export default function Buttonmaker({id,Btnname}){
    return (
        <div className='btns'>
        <button className="btn" id={id}>{Btnname}</button>
        </div>
    )
}
