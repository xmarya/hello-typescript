import React, { forwardRef, useEffect } from "react";

type Props = {
    value:string | null,
    // turn:string | null,
    winner:string | null
    onClick: React.MouseEventHandler
}

function SquareComponent({value, winner, onClick}:Props, ref: React.ForwardedRef<HTMLButtonElement>) {

    useEffect(() => {
        console.log("square re-render");
    }, []);
    return (
        <button ref={ref} disabled={value !== null || Boolean(winner)} className={`square`} onClick={onClick}/>
    )
}

export const Square = forwardRef(SquareComponent);
