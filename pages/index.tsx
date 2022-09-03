import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./../components/HomePage";
import NavBar from "./../components/NavBar";
import AboutMe from "./../components/AboutMe";

const Home: NextPage = () => {
    return (
        <div className="main">
            <div className="mainPage">
                <NavBar />
                <HomePage />
                <AboutMe />
            </div>
            <style jsx>
                {`
                    .mainPage {
                        background: #fbcbc9;
                        height: 100vh;
                        width: 100vw;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
