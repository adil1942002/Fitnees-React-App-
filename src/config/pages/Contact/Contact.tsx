import { FcSms, FcHome, FcCallback } from "react-icons/fc";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import PageNav from "../../../components/PagesNavbar/PagesNav"
import Btn from '../../../components/button/Button';
import Footer from "../../../components/Footer/Footer";
export default function Contact() {
    return <>
        <PageNav topic="Contact Us" />
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-md-8">

                    <div style={{ textAlign: "center", }}>

                        <Box
                            component="form"
                            noValidate
                            autoComplete="off">


                            <TextField
                                id="fullWidth"
                                multiline
                                rows={6}
                                fullWidth
                                defaultValue="Message"
                                variant="outlined" />
                            <div className="row my-5">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        className=' w-100'
                                    />
                                </div>
                                <div className="col-md-6">
                                    <TextField
                                        label="Phone"
                                        variant="outlined"
                                        className=' w-100'
                                    />
                                </div>
                            </div>


                            <TextField
                                label="Enter Subject"
                                variant="outlined"
                                className=' w-100'
                            />
                            <Box sx={{ marginTop: "20px ", textAlign: "start" }}>
                                <Btn label="send" />
                            </Box>
                        </Box>
                    </div>

                </div>
                <div className="col-md-4">
                    <Box sx={{ marginTop: "15px" }}>
                        <Box>
                            <h5>
                                <span className="fs-1">
                                    <FcHome />
                                </span>
                                Buttonwood, California.</h5>
                            <p className="ms-5">Rosemead, CA 91770</p>
                        </Box>

                        <Box>
                            <h5>
                                <span className="fs-1">
                                    <FcCallback />
                                </span>
                                +1 253 565 2365</h5>
                            <p className="ms-5">Mon to Fri 9am to 6pm</p>
                        </Box>

                        <Box>
                            <h5>
                                <span className="fs-1">
                                    <FcSms />
                                </span>
                                support@colorlib.com</h5>
                            <p className="ms-5">Send us your query anytime!</p>
                        </Box>

                    </Box>
                </div>
            </div>

        </div>
<Footer/>

    </>
}