import SectionHeading from '../../../components/sectionhea/SectionHea';
import Stack from '@mui/material/Stack';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Button } from 'react-bootstrap';
import Footer from '../../../components/Footer/Footer';
import AppBar from '../../../components/navbar/navbar';
import Btn from '../../../components/button/Button';
import Seation1 from '../../../components/seation1/Seation1';
import './home.css';
import HealthCard from '../../../components/cards/card';
import Images from '../../../components/Images/Images';
import CardImg from '../../../components/aboutCard/AboutCard';
import MemberShip from '../../../components/Membership/Membership';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DiClojure, DiApple, DiAndroid } from "react-icons/di";
import * as React from 'react';
import { BiArrowFromBottom } from "react-icons/bi";
interface FilmOptionType {
    title: string;
    year: number;
}

const top100Films = [

    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },

];
export default function Home() {
    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: FilmOptionType) => option.title,
    };
    const flatProps = {
        options: top100Films.map((option) => option.title),
    };
    const [value, setValue] = React.useState<FilmOptionType | null>(null);
    return <>
        <div className="screen">
            <div className="top">
                <a href="#">
         <BiArrowFromBottom/>
                </a>
            </div>
            <div className='main '>
                <AppBar />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className='mt-md-5 pt-5'>
                                <span className=" text-danger"  >
                                    __________ with patrick potter
                                </span>
                                <h1 className='text-white display-3 fw-bold my-5'>Build Perfect body <br /> Shape for good and <br /> Healthy life.</h1>
                                <Btn label="BECOME A MEMBER" />
                            </div>
                        </div>
                        <div className=" col-md-4 ">
                            <Stack direction="row" spacing={1}>
                                <Button className='playButton  bg-danger ' >
                                    <PlayCircleIcon />
                                </Button>

                            </Stack>
                        </div>

                    </div>
                </div>
            </div>
            <Seation1
                url='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about.png'
                redhea='__________ with patrick potter'
                heading='Build Perfect body Shape for good and Healthy life.' para='Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.'
                btn={<Btn label="BECOME A MEMBER" />} />
            <div className="main2 ">
                <div className="hea2">

                    <span className=" text-danger"  >
                        __________ OUR SERVICES FOR YOU
                    </span>
                    <h1 className='text-white display-6 fw-bold my-5'>PUSH YOUR LIMITS FORWARD <br /> WE OFFER TO YOU</h1>
                    <div className='text-md-end me-5'>
                        <Btn label="BECOME A MEMBER" />
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4 mt-2">
                            <HealthCard Heading='QUALITY EQUIPMENT' Icon={<DiClojure />} />
                        </div>
                        <div className="col-md-4 mt-2">
                            <HealthCard Heading='HEALTH CARING' Icon={<DiApple />} />
                        </div>
                        <div className="col-md-4 mt-2">
                            <HealthCard Heading='GYM STRATEGIES' Icon={<DiAndroid />} />
                        </div>
                    </div>
                </div>

            </div>
            <Seation1
                url='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about2.png'
                redhea='__________ CLIENT FEEDBACK'
                heading='WHAT OUR CLIENT THIK ABOUT OUR GYM.'
                para='JHON SMITH GYMTRNINER'
            />
            <Images />
            <SectionHeading />
            <div className="container pt-5">
                <div className="row ">
                    <div className="col-md-4">
                        <CardImg path='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team2.png' />
                    </div>
                    <div className="col-md-4">
                        <CardImg path='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png' />
                    </div>
                    <div className="col-md-4">
                        <CardImg path='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team3.png' />
                    </div>
                </div>
            </div>
            <MemberShip />
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/contact_form.png" alt="" height={'100%'} width={"100%"} />
                    </div>
                    <div className="col-md-6  mt-5">
                        <span className="fw-bold text-danger"  >
                            ________ CONTACT FORM
                        </span>
                        <h1 className='display-5 fw-bold my-5'>
                            FEEL FREE TO CONTACT WITH US!
                        </h1>

                        <div style={{ backgroundColor: "lightblue", padding: "10px", textAlign: "center", margin: "10px" }}>

                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '35ch', }
                                }}
                                noValidate
                                autoComplete="off"
                            >


                                <div>
                                    <TextField
                                        label="Name"

                                        variant="standard"
                                    />
                                    <TextField
                                        label="Phone"

                                        variant="standard"
                                    />
                                    <Autocomplete
                                        {...defaultProps}
                                        id="disable-close-on-select"
                                        renderInput={(params) => (
                                            <TextField {...params} label="Shakil Myia" variant="standard" />

                                        )}
                                    />
                                    <TextField
                                        label="Name"

                                        variant="standard"
                                    />
                                    <Stack>

                                        <TextField
                                            id="standard-multiline-static"
                                            multiline
                                            rows={4}
                                            defaultValue="Message"
                                            variant="standard"
                                        />
                                    </Stack>
                                </div>
                            </Box>
                            <Btn label="BECOME A MEMBER" />
                        </div>


                    </div>
                </div>


            </div>

            <Footer />
        </div>
    </>
}
