import { ArrowUpRight, House } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <div className="hidden fixed bottom-6 right-0 left-0 w-fit gap-1 max-w-2xl mx-auto rounded-full p-1 sm:flex justify-between items-center font-medium bg-[#222222cc] text-sm text-white z-50 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)]">
            <Link href="/" className="p-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out"><House /></Link>
            <Link href="/#about" className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">About</Link>
            <Link href="/#skills" className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Skills</Link>
            <Link href="/#projects" className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Projects</Link>
            <Link href="https://drive.google.com/file/d/1PsOE9OqnbHmFbkysf6Thp79rxkA4P-S2/view?usp=drive_link" target="_blank" className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Resume</Link>
            <Link href="https://cal.com/harshit163/quick-meeting" target="_blank" className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full bg-[#111] transition-colors duration-300 ease-in-out flex items-center gap-2">Let's Talk <ArrowUpRight className="w-4 h-4" /></Link>
        </div>
    )
}