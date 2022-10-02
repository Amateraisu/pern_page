import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./../components/HomePage";
import NavBar from "./../components/NavBar";
import AboutMe from "./../components/AboutMe";
import ProjectComponent from "./../components/ProjectComponent";
import { useState, createContext } from "react";

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
                        background: #0b101a;
                        width: 100vw;
                        height: 100vh;
                        padding: 0;
                        margin: 0;
                        overflow-x: hidden;
                    }
                `}
            </style>
        </div>
    );
};

export default Home;
