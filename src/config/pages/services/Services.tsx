import { DiClojure, DiApple, DiAndroid } from "react-icons/di";
import HealthCard from "../../../components/cards/card"
import PageNav from "../../../components/PagesNavbar/PagesNav"
import SectionHeading from "../../../components/sectionhea/SectionHea"
import Footer from "../../../components/Footer/Footer"
export default function Services() {
    return <>
        <PageNav topic="OUR SERVICES"/>
        <SectionHeading />
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
        
       
        <Footer />

    </>
}