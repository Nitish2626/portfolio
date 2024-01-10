import contact from "../../Images/contact.png";
import HeadingContainer from "../heading container/HeadingContainer";
import user from "../../Images/user-icon.png";
import message from "../../Images/message.png";
import ImageTag from "../image tag/ImageTag";
import InputTag from "../input tag/InputTag";
import { useRef } from "react";

const Contact = () => {

    const nameRef=useRef();
    const msgRef=useRef();

    const submit=(e)=>{
        e.preventDefault();
        
    };

    return (
        <div>
            <div className="w-full">
                <HeadingContainer
                    src={contact}
                    text="Contact Me"
                />

                <form className="w-full flex flex-col items-center justify-center gap-4 py-5 mt-10 rounded-lg shadow-[1px_1px_10px_0px_gray]" onSubmit={submit}>
                    <section className="w-full flex items-center justify-center gap-4">
                        <ImageTag 
                            src={user}
                            alt="User"
                        />
                        <InputTag 
                            placeholder="Name"
                            ref={nameRef}
                        />
                    </section>

                    <section className="w-full flex justify-center gap-4">
                        <ImageTag 
                            src={message}
                            alt="Message"
                        />
                        <InputTag 
                            placeholder="Message"
                            ref={msgRef}
                            padding="pb-40"
                        />
                    </section>

                    <button type="submit" className="w-40 text-xl bg-green-500 text-white py-2 rounded-lg mt-2 hover:bg-green-700">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;