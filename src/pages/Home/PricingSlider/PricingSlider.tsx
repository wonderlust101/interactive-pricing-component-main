import './PricingSlider.scss'

export default function PricingSlider() {

    return (
        <section className="pricing-slider">
            <div className="pricing-slider__section-top">
                <div className="pricing-slider__slider">
                    <p className="pricing-slider__page-views">100K Pageviews</p>

                    <p className="pricing-slider__rate">
                        <span className="pricing-slider__cost">$16.00</span> /month
                    </p>

                    <div className='pricing-slider__range-container'>
                        <input className="pricing-slider__range" type="range"/>
                    </div>
                </div>

                <div className="pricing-slider__plan">
                    <p>Monthly Billing</p>
                    <input type="checkbox"/>
                    <div className="pricing-slider__yearly">
                        <p>Yearly Billing</p>
                        <p>25% discount</p>
                    </div>
                </div>
            </div>

            <hr className="pricing-slider__divider"/>

            <div className="pricing-slider__section-bottom">
                <div>
                    <ul className="pricing-slider__feature-list">
                        <li className="pricing-slider__feature">
                            <span>X</span>
                            Unlimited websites
                        </li>
                        <li className="pricing-slider__feature">
                            <span>X</span>
                            100% data ownership
                        </li>
                        <li className="pricing-slider__feature">
                            <span>X</span>
                            Email reports
                        </li>
                    </ul>
                </div>
                <a className="button" href="#"> Start my trial</a>
            </div>
        </section>
    )
}