import React from 'react';
import Header from './../components/Header';
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/Contactinfo';
import CalltoActionSection from './../components/homeComponents/CalltoActionSection';
import Footer from './../components/Footer';
import { useParams } from 'react-router';

const HomePage=()=>{
    window.scrollTo(0,0);
    const {keyword,pageNumber}= useParams();
    return (
        <div>
            <Header />
            <ShopSection keyword={keyword} pageNumber={pageNumber}/>
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default HomePage;