import {ChangeEventHandler, useEffect, useState} from "react";

type SliderProps = {
    sliderValue: number;
    minValue: number;
    maxValue: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    trackColor: string;
    progressColor: string;
}

export default function Slider({sliderValue, minValue, maxValue, onChange, progressColor, trackColor}: SliderProps) {
    const [backgroundStyle, setBackgroundStyle] = useState("");

    useEffect(() => {
        const progress = (sliderValue / (maxValue - minValue)) * 100;
        setBackgroundStyle(`linear-gradient(to right, ${progressColor} ${progress}%, ${trackColor} ${progress}%)`);
    }, [sliderValue]);

    return (
        <input
            className="pricing-slider__range"
            type="range"
            min={minValue}
            max={maxValue}
            value={sliderValue}
            onChange={onChange}
            style={{background: backgroundStyle}}
        />
    )
}