import { useState } from "react";
export default function CounterBtn() {
    const [cnt, setCnt] = useState(0);
    return (
        <div>
            <p>Your Courent Counter is: {cnt}</p>
            <button onClick={() => { setCnt(cnt + 1) }}>+</button>
            <button onClick={() => { setCnt(cnt - 1) }}>-</button>
        </div>
    )
}
