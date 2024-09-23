"use client"
import React, {useRef, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const [state, handleSubmit] = useForm("myyrljne");
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading to true when submitting form
        if (formRef.current.name.value === '' || formRef.current.email.value === '' || formRef.current._subject.value === '' || formRef.current.message.value === '') {
            toast.warning('Please enter full details.'); // Display warning toast if any input is empty
            setIsLoading(false); // Set loading to false after showing warning
            return;
        }
        
        await handleSubmit(event);
        if (state.succeeded) {
            toast.success('Your message has been successfully sent! Thank you for reaching out. You can expect a reply in your email inbox shortly.', {
                autoClose: 10000,
            });
            formRef.current.reset();
        }
        setIsLoading(false); // Set loading to false after form submission
    };

    return (
        <>
            <ToastContainer />
            <div id="contact" className={"flex ms-0 lg:ms-12 gap-5 flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center items-center"}>
                    <div className="flex flex-wrap sm:w-full md:w-full lg:w-1/2">
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold">
                                        Technical support
                                    </p>
                                    <p className="text-neutral-500 ">
                                        hassohail01@gmail.com
                                    </p>
                                    <p className="text-neutral-500 ">
                                        +92 313-315-9500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div className="flex items-start">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold ">
                                        Sales questions
                                    </p>
                                    <p className="text-neutral-500 ">
                                       mhassansohail2001@gmail.com
                                    </p>
                                    <p className="text-neutral-500 ">
                                        +92 333-315-9500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div className="align-start flex">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold ">Press</p>
                                    <p className="text-neutral-500 ">
                                        hassohail01@gmail.com
                                    </p>
                                    <p className="text-neutral-500 ">
                                        +92 313-315-9500
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                            <div className="align-start flex">
                                <div className="shrink-0">
                                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 grow">
                                    <p className="mb-2 font-bold">
                                        Bug report
                                    </p>
                                    <p className="text-neutral-500 ">
                                        hassohail01@gmail.com
                                    </p>
                                    <p className="text-neutral-500 ">
                                        +92 313-315-9500
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 px-2 sm:px-2 md:px-12 lg:px-24  flex flex-wrap w-full sm:w-full md:w-full lg:w-1/2">
                        <div className="text-white px-4 py-10 bg-[#184a79] shadow-lg rounded-md sm:rounded-3xl">
                            <div className="text-center pb-6">
                                <h1 className="text-3xl">Contact Me!</h1>
                                <p className="text-gray-300">
                                    Fill up the form below to send us a message.
                                </p>
                            </div>
                            <form ref={formRef} onSubmit={handleFormSubmit}>
                                <input
                                    className="shadow mb-4  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    className="shadow mb-4  appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Subject"
                                    name="_subject"
                                />
                                <textarea
                                    className="shadow mb-4 leafbutton appearance-none border rounded h-64 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Type your message here..."
                                    name="message"
                                    style={{height: 121}}
                                    defaultValue={""}
                                />
                                <div className={"flex justify-center me-6 flex-col gap-5 mt-4 sm:flex-col md:flex-row lg:flex-row"}>
                                    <input
                                        className="text-black text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#ffb900]  hover:bg-[#b3d7fb]"
                                        type="submit"
                                        defaultValue={!isLoading ? "Send ➤" : "Loading..."}
                                        disabled={state.submitting}
                                    />
                                    <input
                                        className="text-black  text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-[#acd1f4] hover:text-white hover:bg-gold"
                                        type="reset"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Contact;