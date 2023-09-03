import PageNav from "../../../components/PagesNavbar/PagesNav"
import Images from "../../../components/Images/Images"
import SectionHeading from "../../../components/sectionhea/SectionHea"
import Seation1 from "../../../components/seation1/Seation1"
import Footer from "../../../components/Footer/Footer"
import CardImg from '../../../components/aboutCard/AboutCard';
import MemberShip from "../../../components/Membership/Membership";
import Btn from "../../../components/button/Button"
export default function About() {
    return <>
        <PageNav topic="ABOUT US"/>
        <Seation1
            url='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about.png'
            redhea='__________ with patrick potter'
            heading='Build Perfect body Shape for good and Healthy life.' para='Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.'
            btn={<Btn label="BECOME A MEMBER" />} />
    
<Images/>    
        <Seation1
            url='https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/about2.png'
            redhea='__________ CLIENT FEEDBACK'
            heading='WHAT OUR CLIENT THIK ABOUT OUR GYM' para='JHON SMITH'
             />
    <SectionHeading/>

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
    <MemberShip/>
 <Footer/>
 
    </>
}