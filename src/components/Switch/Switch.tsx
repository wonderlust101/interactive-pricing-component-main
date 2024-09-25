import React from "react";
import './Switch.scss'

type SwitchProps = {
    onToggle: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean;
}

export default function Switch({onToggle, checked}: SwitchProps) {
    return (
        <div className="switch__layout">
            <div className="switch__container">
                <input className="switch__box"
                       type="checkbox"
                       id="check"
                       onChange={onToggle}
                       checked={checked}/>
                <label className="switch" htmlFor="check"></label>
            </div>
        </div>
    )
}