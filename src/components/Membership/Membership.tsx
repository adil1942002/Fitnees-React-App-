import "./MemberShip.css"
import Btn from "../button/Button"
export default function MemberShip() {

    return <>
        <div className="container my-5">
            <div className="row section2heading py-5">
                <div className="col-md-6">
                    <div className='py-5'>
                       
                        <h3 className='fw-bold hea2 '  >April membership offer available Now</h3>

                    </div>
                </div>
                <div className=" col-md-6 section2btn mt-md-0  ">
                    <div className=" text-md-end  ">
                        <Btn label="more services" />
                    </div>
                </div>
            </div>
        </div>
    </>
}




// export default function MemberShip() {


//     return (
//         <Stack spacing={1} sx={{ width: 300 }}>
//             <Autocomplete
//                 {...defaultProps}
//                 id="disable-close-on-select"
//                 disableCloseOnSelect
//                 renderInput={(params) => (
//                     <TextField {...params} label="disableCloseOnSelect" variant="standard" />
//                 )}
//             />
 
 
//         </Stack>
//     );
// }

