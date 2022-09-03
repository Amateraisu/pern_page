import Image from "next/image";

function HomePage() {
    return (
        <section>
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
        </section>
    );
}

export default HomePage;
