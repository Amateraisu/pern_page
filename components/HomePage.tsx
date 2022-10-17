import Image from "next/image";
import ContactMe from "./ContactMe";

/// <reference types="styled-jsx" />

function HomePage() {
    return (
        <section>
            <style jsx>
                {`
                    .test {
                        color: blue;
                    }

                    .image_wrapper {
                        width: 100%;

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 15px;
                        overflow: hidden;
                    }

                    .body {
                        display: flex;

                        justify-content: space-around;
                        flex-direction: column;
                        align-items: center;

                        height: 600px;
                        width: 600px;
                    }

                    .main_heading {
                        font-size: 40px;
                        font-weight: 800;
                    }

                    .wrapper {
                        display: flex;
                        justify-content: center;
                        color: white;
                    }

                    .my_intro {
                        text-align: center;
                    }
                `}
            </style>
            <div className="wrapper">
                <div className="body">
                    <div className="main_heading">Welcome to my page!</div>
                    <ContactMe />
                    <div className="my_intro">
                        <div>
                            I am Kai, a year 2 CS at NTU, aspiring Software
                            Engineer.
                        </div>
                        <div>
                            Interests: Frontend, Machine Learning, Computer
                            Networks, Data Mining, Linear Algebra, Statistics
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
