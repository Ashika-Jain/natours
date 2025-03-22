import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
// import Main from "./components/Main/Main";
import Bookings from "./components/Bookings/Bookings";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chat/Chatbot";
import User from "./components/User/User";
import Globe from "./components/Map/Globe";

// import Bookings from "./components/Bookings/Bookings";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agra from "./components/Places/Agra";
import Alibaug from "./components/Places/Alibaug";
import Amritsar from "./components/Places/Amritsar";
import AndamanAndNicobarIslands from "./components/Places/Andaman";
import Bengaluru from "./components/Places/Bengaluru";
import Bhubaneswar from "./components/Places/Bhubaneswar";
import Chandigarh from "./components/Places/Chandigarh";
import Chennai from "./components/Places/Chennai";
import Coimbatore from "./components/Places/Coimbatore";
import Darjeeling from "./components/Places/Darjeeling";
import Delhi from "./components/Places/Delhi";
import Gangtok from "./components/Places/Gangtok";
import Goa from "./components/Places/Goa";
import Guwahati from "./components/Places/Guwahati";
import Haridwar from "./components/Places/Haridwar";
import Himachal from "./components/Places/Himachal";
import Jaipur from "./components/Places/Jaipur";
import Jaisalmer from "./components/Places/Jaisalmer";
import Jammu from "./components/Places/Jammu";
import Jodhpur from "./components/Places/Jodhpur";
import Kanyakumari from "./components/Places/Kanyakumari";
import Ladakh from "./components/Places/Ladakh";
import Lonavala from "./components/Places/Lonavala";
import Lucknow from "./components/Places/Lucknow";
import Madurai from "./components/Places/Madurai";
import Mahabalipuram from "./components/Places/Mahabalipuram";
import Manali from "./components/Places/Manali";
import Mathura from "./components/Places/Mathura";
import MountAbu from "./components/Places/Mount_Abu";
import Mumbai from "./components/Places/Mumbai";
import Mussoorie from "./components/Places/Mussoorie";
import Nainital from "./components/Places/Nainital";
import Nepal from "./components/Places/Nepal";
import Ooty from "./components/Places/Ooty";
import Pondicherry from "./components/Places/Pondicherry";
import Puri from "./components/Places/Puri";
import Rishikesh from "./components/Places/Rishikesh";
import Shillong from "./components/Places/Shillong";
import Shimla from "./components/Places/Shimla";
import Tawang from "./components/Places/Tawang";
import Udaipur from "./components/Places/Udaipur";
import Vadodara from "./components/Places/Vadodara";
import VaishnoDevi from "./components/Places/Vaishno";
import Varanasi from "./components/Places/Varanasi";
import Andaman from "./components/Places/Andaman";

function App() {
  // const ProfileWrapper = () => {
  //   const userName = "Vasu"
  //   return <User prop={userName} />
  // }
  // const location = useLocation();
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/home" element={<Navbar/>} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/user" element={<User name="Shreya"/>} />
          
          {/* <Route path="/user" element={<ProfileWrapper />} /> */}
          <Route path="/map" element={<Globe />} />
          <Route path="/chat" element={<Chatbot />} />

          <Route path="/agra" element={<Agra />} />
          <Route path="/amritsar" element={<Amritsar />} />
          <Route
            path="/andaman-and-nicobar-islands"
            element={<AndamanAndNicobarIslands />}
          />
          <Route path="/alibaug" element={<Alibaug />} />
          <Route path="/bengaluru" element={<Bengaluru />} />
          <Route path="/bhubaneswar" element={<Bhubaneswar />} />
          <Route path="/chandigarh" element={<Chandigarh />} />
          <Route path="/chennai" element={<Chennai />} />
          <Route path="/coimbatore" element={<Coimbatore />} />
          <Route path="/darjeeling" element={<Darjeeling />} />
          <Route path="/delhi" element={<Delhi />} />
          <Route path="/gangtok" element={<Gangtok />} />
          <Route path="/goa" element={<Goa />} />
          <Route path="/guwahati" element={<Guwahati />} />
          <Route path="/haridwar" element={<Haridwar />} />
          <Route path="/himachal" element={<Himachal />} />
          <Route path="/jaipur" element={<Jaipur />} />
          <Route path="/jaisalmer" element={<Jaisalmer />} />
          <Route path="/jammu" element={<Jammu />} />
          <Route path="/jodhpur" element={<Jodhpur />} />
          <Route path="/kanyakumari" element={<Kanyakumari />} />
          <Route path="/ladakh" element={<Ladakh />} />
          <Route path="/lonavala" element={<Lonavala />} />
          <Route path="/lucknow" element={<Lucknow />} />
          <Route path="/madurai" element={<Madurai />} />
          <Route path="/mahabalipuram" element={<Mahabalipuram />} />
          <Route path="/manali" element={<Manali />} />
          <Route path="/mathura" element={<Mathura />} />
          <Route path="/mount-abu" element={<MountAbu />} />
          <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/mussoorie" element={<Mussoorie />} />
          <Route path="/nainital" element={<Nainital />} />
          <Route path="/nepal" element={<Nepal />} />
          <Route path="/ooty" element={<Ooty />} />
          <Route path="/pondicherry" element={<Pondicherry />} />
          <Route path="/puri" element={<Puri />} />
          <Route path="/rishikesh" element={<Rishikesh />} />
          <Route path="/shillong" element={<Shillong />} />
          <Route path="/shimla" element={<Shimla />} />
          <Route path="/tawang" element={<Tawang />} />
          <Route path="/udaipur" element={<Udaipur />} />
          <Route path="/vadodara" element={<Vadodara />} />
          <Route path="/vaishno-devi" element={<VaishnoDevi />} />
          <Route path="/varanasi" element={<Varanasi />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
