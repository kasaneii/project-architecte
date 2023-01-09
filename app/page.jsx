import {Navbar, Footer} from '../components';
import {Contact, Expertise, Features, Hero, Partner, Team} from '../sections';

const Page = () => (
  <div className="bg-dark-gray w-full overflow-hidden">
    <Navbar/>
    <Hero/>
    <Partner/>
    <Features/>
    <Expertise/>
    <Team/>
    <Contact/>
    <Footer/>
  </div>
);

export default Page