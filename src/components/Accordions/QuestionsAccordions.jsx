import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180 bg-blue-500 text-white" : "bg-white"} h-7 w-7 transition-transform p-1 rounded`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}


const QuestionsAccordions = () => {
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);


    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="bg-[#F8F8F8] p-5 pt-0 rounded-lg my-5">
                <AccordionHeader onClick={() => handleOpen(1)} className="text-lg font-extralight">Can i make an Appointment Online with White Plains Hospital Kendi?</AccordionHeader>
                <AccordionBody className="font-sans font-thin text-gray-500">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, fuga voluptatibus, suscipit nesciunt maiores consequuntur recusandae omnis, exercitationem ex harum corporis nostrum eos id corrupti saepe ea iure architecto dicta!
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="bg-[#F8F8F8] p-5 pt-0 rounded-lg my-5">
                <AccordionHeader onClick={() => handleOpen(2)} className="text-lg font-extralight">
                Can i make an Appointment Online with White Plains Hospital Kendi?
                </AccordionHeader>
                <AccordionBody className="font-sans font-thin text-gray-500">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="bg-[#F8F8F8] p-5 pt-0 rounded-lg my-5">
                <AccordionHeader onClick={() => handleOpen(3)} className="text-lg font-extralight">
                Can i make an Appointment Online with White Plains Hospital Kendi?
                </AccordionHeader>
                <AccordionBody className="font-sans font-thin text-gray-500">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="bg-[#F8F8F8] p-5 pt-0 rounded-lg my-5">
                <AccordionHeader onClick={() => handleOpen(4)} className="text-lg font-extralight">
                Can i make an Appointment Online with White Plains Hospital Kendi?
                </AccordionHeader>
                <AccordionBody className="font-sans font-thin text-gray-500">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className="bg-[#F8F8F8] p-5 pt-0 rounded-lg my-5">
                <AccordionHeader onClick={() => handleOpen(5)} className="text-lg font-extralight">
                Can i make an Appointment Online with White Plains Hospital Kendi?
                </AccordionHeader>
                <AccordionBody className="font-sans font-thin text-gray-500">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </>
    );
};

export default QuestionsAccordions;