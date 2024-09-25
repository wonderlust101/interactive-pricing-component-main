import {useState} from "react";

import Button from "../../../components/Button/Button.tsx";
import Switch from "../../../components/Switch/Switch.tsx";

import checkIcon from '/images/icon-check.svg';

import './PricingSlider.scss'

type pricingOption = {
    pageViews: string;
    cost: number;
}

const pricingOptions: pricingOption[] = [
    {pageViews: '10K', cost: 8},
    {pageViews: '50K', cost: 12},
    {pageViews: '100K', cost: 16},
    {pageViews: '500K', cost: 24},
    {pageViews: '1M', cost: 36}
];

export default function PricingSlider() {
    const [sliderValue, setSliderValue] = useState(2);
    const [isYearlyBilling, setIsYearlyBilling] = useState(false);

    const currentOption = pricingOptions[sliderValue];

    const discountRate = 0.25;
    const finalCost = isYearlyBilling
        ? (currentOption.cost * (1 - discountRate)).toFixed(2)
        : currentOption.cost.toFixed(2);

    const handleSliderChange = (event: any) => {
        const value = event.target.value;
        setSliderValue(value);

        const progress = (value / (pricingOptions.length - 1)) * 100;
        event.target.style.background = `linear-gradient(to right, #A4F3EB ${progress}%, #ECF0FB ${progress}%)`;
    };

    const handleBillingToggle = () => {
        setIsYearlyBilling(!isYearlyBilling);
    };

    return (
        <section className="pricing-slider">
            <div className="pricing-slider__section-top">
                <div className="pricing-slider__slider">
                    <p className="pricing-slider__page-views">{currentOption.pageViews} pageviews</p>

                    <p className="pricing-slider__rate">
                        <span className="pricing-slider__cost">${finalCost}</span> /month
                    </p>

                    <div className="pricing-slider__range-container">
                        <input
                            className="pricing-slider__range"
                            type="range"
                            min="0"
                            max={pricingOptions.length - 1}
                            value={sliderValue}
                            onChange={handleSliderChange}
                            style={{
                                background: `linear-gradient(to right, #A4F3EB ${(sliderValue / (pricingOptions.length - 1)) * 100}%,
                                                                        #ECF0FB ${(sliderValue / (pricingOptions.length - 1)) * 100}%)`,
                            }}
                        />
                    </div>
                </div>

                <div className="pricing-slider__plan">
                    <p>Monthly Billing</p>
                    <Switch onToggle={handleBillingToggle} checked={isYearlyBilling}/>
                    <div className="pricing-slider__yearly">
                        <p>Yearly Billing</p>
                        <p className="pricing-slider__discount-container">
                            25%
                            <span className="pricing-slider__discount"> discount</span>
                        </p>
                    </div>
                </div>
            </div>

            <hr className="pricing-slider__divider"/>

            <div className="pricing-slider__section-bottom">
                <div>
                    <ul className="pricing-slider__feature-list">
                        <li className="pricing-slider__feature">
                            <img src={checkIcon} alt="" role="presentation"/>
                            <p className="pricing-slider__feature-text">Unlimited websites</p>
                        </li>
                        <li className="pricing-slider__feature">
                            <img src={checkIcon} alt="" role="presentation"/>
                            <p className="pricing-slider__feature-text">100% data ownership</p>
                        </li>
                        <li className="pricing-slider__feature">
                            <img src={checkIcon} alt="" role="presentation"/>
                            <p className="pricing-slider__feature-text">Email reports</p>
                        </li>
                    </ul>
                </div>
                <Button className="button--blue" destination="#">Start my trial</Button>
            </div>
        </section>
    )
}