import React from "react";
import { Link } from "react-router-dom";

export const BreadContainer = ({children}) =>
<nav class="py-4 px-4 border-b-2 bg-white">
<ul class="flex items-center">
    <li class="flex items-center">
    <Link to="/" class="flex items-center gap-1 hover:text-rose-600 me-2">
        <svg class="w-3 h-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Inicio
    </Link>
    </li>
   {children}
   
</ul>
</nav>

export function BreadPiece({link,children}) {
    return(
        <li className="flex items-center">
        <div class="flex items-end gap-1 me-2 hover:text-rose-600">
            <svg class="rtl:rotate-180  w-3 h-3 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <Link to={link}>{children}</Link>
        </div>
        </li>
    )
    
}

export const BreadDesactive = ({children}) =>  <li li className="flex items-center">
<div class="flex items-end gap-1 me-2 text-gray-500">
    <svg class="rtl:rotate-180  w-full h-3 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
    <span>{children}</span>
</div>
</li>