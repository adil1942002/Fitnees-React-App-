import "./SectionHea.css"
import Btn from "../button/Button"
export default function SectionHeading() {

    return <>
        <div className="container my-5">
            <div className="row sectionheading">
                <div className="col-md-9">
                    <div className='pt-5'>
                        <span className=" text-danger"  >
                            __________ with patrick potter
                        </span>
                        <h2 className='fw-bold hea1 my-3' style={{ color: "darkblue" }}>OUR MOST EXPRIENCED TRAINERS</h2>
                        
                    </div>
                </div>
                <div className=" col-md-2 sectionbtn mt-md-0 mt-5 ">
                    <div className=" text-md-end  ">
                        <Btn label="more services" />
                    </div>
                </div>
            </div>
        </div>
    </>
}