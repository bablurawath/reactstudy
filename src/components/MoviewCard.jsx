import Home from "../pages/Home";
function MoviewCard({ movie })
{
    return (
        <>
            
            
            <img src={`/media/${movie.thumb}`} alt="Diagram 1" className="w-full h-48 object-cover" />
            <div className="p-2 text-center text-sm font-semibold">{movie.name}:{movie.release_date}</div>
          
           
        </>
    )
}
export default MoviewCard;