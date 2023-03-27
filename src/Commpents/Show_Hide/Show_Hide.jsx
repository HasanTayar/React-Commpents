import './show.css'
export default function Show_Hide({flag}){
    if(flag == true){
        return( <div>
            <img src="https://media.istockphoto.com/id/531253600/photo/sunrise.jpg?s=1024x1024&w=is&k=20&c=OQe1shODIBCg5ZXugY6GuouUnT1bobtb0ReKO6Iu8l8=" alt="" />
        </div> );
    }else{
        return (
            <div>
                  <img src="" alt=''  />
            </div>
          
        );
    }
}