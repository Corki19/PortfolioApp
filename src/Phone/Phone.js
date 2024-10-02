import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import '../Css/phone.css'

export default function Phone() {


    return (
        <div className="phone-frame items-center flex justify-center mt-[3%] ml-[40%]">
            <div className="phone-screen h-full">
                <Header />
                <About />
                <Footer />
            </div>
        </div>
    )
}
