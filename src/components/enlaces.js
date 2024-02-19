import React from "react";
import { Link , useParams, useLocation} from "react-router-dom";

export const EnlaceHeader = ({link,children}) => <Link to={link} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">{children}</Link>
export function EnlaceNav ({link,children}) {
    const location = useLocation();
    const url = location.pathname;

    if(url === link) {
        return <Link to={link} className="mr-5 underline underline-offset-3 text-red-700 hover:text-red-500">{children}</Link>
    }

    return <Link to={link} className="mr-5 text-gray-800 hover:text-gray-950 hover:underline underline-offset-3">{children}</Link>
} 