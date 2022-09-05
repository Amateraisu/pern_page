function ContactMe() {
    return (
        <>
            <div className="wrapper">
                <a href="mailto: Linkaizxc@gmail.com">
                    <button>Say Hello</button>
                </a>
            </div>
            <style jsx>
                {`
                    .wrapper {
                        background-position: center;
                        transition: background 1s;

                        text-align: center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }
                    .wrapper:hover {
                        background: rgba(250, 200, 200, 0.3)
                            radial-gradient(
                                circle,
                                transparent 10%,
                                #47a7f5 10%
                            )
                            center/15000%;
                    }
                    .wrapper:active {
                        background-color: #6eb9f7;
                        background-size: 100%;
                        transition: background 0s;
                    }
                    button {
                        width: 120px;
                        height: 60px;
                        font-size: 20px;
                        background: transparent;
                        border: none;
                        color: #6acef5;
                    }
                `}
            </style>
        </>
    );
}

export default ContactMe;
