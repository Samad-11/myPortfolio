import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



export const contents = [
    {
        heading: "Personal Overview",
        paragraph: "I am a Delhi-based web developer with a deep passion for crafting innovative and user-friendly websites. With 2 years of experience in the industry, I have honed my skills in NextJs, C++, PHP, Python. My journey into web development started My journey into the world of web development began during my graduation. Fascinated by the limitless possibilities of the digital realm, I found myself drawn to the art and science of crafting websites that seamlessly blend form and function.",
    },
    {
        heading: "Mission Statement",
        paragraph: "At the core of my work is a commitment to the core of my web development philosophy: a commitment to creativity, user-centric design, and accessibility. I believe in transforming ideas into visually innovative, intuitive, and inclusive digital experiences that resonate with users. I thrive on turning complex problems into elegant solutions and enjoy collaborating with clients and colleagues to bring ideas to life.",
    },
]

export default function AboutContentScroll() {
    return (
        <ScrollArea className=" h-96 " style={{ width: "100%" }}>
            <div className="flex space-x-4 p-4">
                {contents.map((content) => (
                    <div key={content.heading} className="text-yellow-200" style={{ width: "20rem" }}>
                        <h2 className='font-bold text-3xl text-stone-200 underline'> {content.heading}</h2>
                        <p>
                            {content.paragraph}
                        </p>
                    </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
