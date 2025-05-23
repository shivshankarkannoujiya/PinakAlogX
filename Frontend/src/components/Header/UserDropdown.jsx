import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignoutBtn from "../Auth/SignOutButton";

const UserDropdown = ({ user }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const ref = useRef();

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-1 rounded-md cursor-pointer"
            >
                <img
                    src={
                        user?.avatar ||
                        "https://avatar.iran.liara.run/public/boy"
                    }
                    loading="lazy"
                    alt="avatar"
                    className="w-10 h-10 p-1 rounded-full border-2 border-gray-400"
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-[#000814] shadow-lg border rounded-md z-50 p-2 space-y-2 text-white">
                    <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm bg-[#000814] rounded-md   hover:bg-[#1a2432]"
                    >
                        Profile
                    </Link>
                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm bg-[#000814] rounded-md   hover:bg-[#1a2432]"
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/submissions"
                        className="block px-4 py-2 text-sm bg-[#000814] rounded-md  hover:bg-[#1a2432]"
                    >
                        My Submissions
                    </Link>
                    <Link
                        to="/mylist"
                        className="block px-4 py-2 text-sm bg-[#000814] rounded-md  hover:bg-[#1a2432]"
                    >
                        Favourite List
                    </Link>
                    {user?.role === "ADMIN" && (
                        <Link
                            to="/create-problem"
                            className="block px-4 py-2 text-sm bg-[#000814] rounded-md  hover:bg-[#1a2432]"
                        >
                            Add Problem
                        </Link>
                    )}
                    <SignoutBtn />
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
