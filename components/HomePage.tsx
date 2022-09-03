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

                        background: black;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
            <div className="wrapper">
                <div className="image_wrapper">
                    <Image
                        src="/images/HomePage.jpg"
                        alt="backgroundHome"
                        width="1000"
                        height="500"
                    />
                </div>
            </div>
        </section>
    );
}

export default HomePage;
