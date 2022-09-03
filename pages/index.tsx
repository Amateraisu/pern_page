import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePage from "./../components/HomePage";
import NavBar from "./../components/NavBar";

const Home: NextPage = () => {
    return (
        <div>
            <NavBar />
            <HomePage />
        </div>
    );
};

export default Home;
