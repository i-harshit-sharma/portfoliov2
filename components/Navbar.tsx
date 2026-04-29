import { ArrowUpRight, House } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <div className="hidden fixed bottom-6 h-16 right-0 left-0 w-full max-w-2xl mx-auto rounded-full  p-2 sm:flex justify-between items-center font-medium bg-[#222222cc] text-sm text-white z-50 menu-bar border border-white/10 shadow-lg">
            <div className="p-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out"><House /></div>
            <div className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Projects</div>
            <div className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Experiences</div>
            <div className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Skills</div>
            <Link href="https://drive.google.com/file/d/1PsOE9OqnbHmFbkysf6Thp79rxkA4P-S2/view?usp=drive_link" target="_blank" className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full hover:bg-[#222222dd] transition-colors duration-300 ease-in-out">Resume</Link>
            <div className="px-6 font-semibold text-[16px] py-3 cursor-pointer rounded-full bg-[#111] transition-colors duration-300 ease-in-out flex items-center gap-2">Let's Talk <ArrowUpRight className="w-4 h-4" /></div>
        </div>
    )
}