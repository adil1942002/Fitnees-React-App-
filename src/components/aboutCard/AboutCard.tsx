
type propsType={
    path:string
}
export default function CardImg (props:propsType){
    let {path} = props
    return<>
    <div className="card ">
        <div  style={{
            backgroundImage :`url(${path})`,
            width:"100",
            height:"500px",
            backgroundRepeat:"no-repeat"
            }} className="cardImg d-flex align-items-end">
                <div className="ps-4">
                <span className="text-danger fw-bold">_______ </span>
                    <span className="text-white">Creative derector</span>
                <h3 className="text-white ">Jhon Sunsaev
   </h3>
                </div>
                    </div>
    </div>
    </>
}