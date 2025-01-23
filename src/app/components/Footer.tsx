import { idleOnesFont } from "@/types/font";

export default function Footer() {
    return (
        <footer className="bg-black/70 w-screen h-20 flex justify-center items-center mt-20">
            <p className={`${idleOnesFont.className} text-white text-sm`}>
                &copy; 2025 Idle Ones. All rights reserved.
            </p>
        </footer>
    );
}
