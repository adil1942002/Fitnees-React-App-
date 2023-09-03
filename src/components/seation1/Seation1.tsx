type PropsType = {
    url: string,
redhea:string
heading: string
para: string
btn?: any
}
export default function Seation1(props: PropsType){
    return<>
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={props.url} alt="" height={'100%'} width={"100%"} />
                </div>
                <div className="col-md-6 mt-md-5 ms-md-5 mt-5">
                    <span className="fw-bold text-danger"  >
             {
                props.redhea
             }           
                    </span>
                    <h1 className='display-4 fw-bold my-5'> 
                    {props.heading}</h1>
                    <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                    <p>
                        {props.para}
                    </p>
                    {
props.btn
                    }
                    
                </div>
            </div>


        </div>
    </>
} 