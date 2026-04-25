import Applicationform from "../component/Applicationform";
import Joblist from "../component/Joblist";

const Home = () =>{
    return(
        <div className="flex gap-3 p-5 flex-col xl:flex-row">
            <div className="w-full xl:w-1/2"><Applicationform/></div>
            <div className="w-full xl:w-1/2"><Joblist/></div>
        </div>
    )
}

export default Home;