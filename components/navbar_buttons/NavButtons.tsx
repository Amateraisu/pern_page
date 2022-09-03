import Image from "next/image";

interface NavButtonsProps {
    imageLink: string;
    imageDirectory: string;
    textContent: string;
}

function NavButtons({
    imageLink,
    imageDirectory,
    textContent,
}: NavButtonsProps) {
    return (
        <section>
            <div className="wrapper">
                <a href={imageLink} className="tag">
                    <Image src={imageDirectory} width={30} height={30} />
                    <div>{textContent}</div>
                </a>
            </div>

            <style jsx>{`
                .wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 120px;
                    height: 60px;
                    gap: 10px;
                }

                .tag {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    font-size: 18px;
                    font-weight: 500;
                }
            `}</style>
        </section>
    );
}

export default NavButtons;
