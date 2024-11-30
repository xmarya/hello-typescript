import { forwardRef } from "react";

type Props = {
    value:string | null,
    // turn:string | null,
    winner:string | null
    onClick: () => void
}

function SquareComponent({value, winner, onClick}:Props, ref: React.ForwardedRef<HTMLButtonElement>) {

    return (
        <button ref={ref} disabled={value !== null || Boolean(winner)} className={`square`} onClick={onClick}/>
    )
}

export const Square = forwardRef(SquareComponent);
