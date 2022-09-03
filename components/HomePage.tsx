import Image from "next/image";
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
                        width: 500px;
                    }

                    .main_heading {
                        font-size: 50px;
                        font-weight: 800;
                    }

                    .wrapper {
                        display: flex;
                        justify-content: center;
                    }

                    .my_intro {
                        text-align: center;
                    }
                `}
            </style>
            <div className="wrapper">
                <div className="body">
                    <div className="main_heading">Hello</div>
                    <div>Thanks for visiting!</div>
                    <div className="my_intro">
                        I'm Kai, currently a year 2 cs student at NTU, an
                        aspiring Software Engineer, interested in Frontend /
                        Machine Learning Engineering
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
