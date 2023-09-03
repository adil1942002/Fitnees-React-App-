import AppBar from "../navbar/navbar";

export default function PageNav(props:{topic:string}){
    return<>
        <div style={{ backgroundColor: "#080808", width: "100%" , height: '60vh'}}>
    <AppBar/>
<h1 className="text-white text-center mt-5 fw-bold">{props.topic}</h1>
    </div>

    </>
}