import MoviewCard from '../components/MoviewCard';
function Home(){
    const movies =[
        {id:1,release_date:2024,name:'Movies 1',thumb:'1.jpg'},
        {id:2,release_date:2020,name:'Movies 2',thumb:'2.jpg'},
        {id:3,release_date:2021,name:'Movies 3',thumb:'3.jpg'},
        {id:4,release_date:2022,name:'Movies 4',thumb:'4.jpg'},
        {id:5,release_date:2023,name:'Movies 5',thumb:'5.jpg'},
        {id:6,release_date:2024,name:'Movies 6',thumb:'6.jpg'},
        {id:7,release_date:2026,name:'Movies 7',thumb:'1.jpg'},
    ]

    return (
    <>
    

    <div className="bg-white shadow rounded overflow-hidden">
       { movies.map(
            ( movie) => (
                    <MoviewCard movie={movie} key={movie.id}></MoviewCard>

                        )
                    )
       }

       

    </div>
    </>
    )
}
export default Home;