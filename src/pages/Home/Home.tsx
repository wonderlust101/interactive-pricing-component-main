import './Home.scss'
import Header from "./Header/Header.tsx";
import PricingSlider from "./PricingSlider/PricingSlider.tsx";

export default function Home() {

    return (
        <div className='home'>
            <Header />
            <main className='grid-bleed'>
                <PricingSlider/>
            </main>
        </div>
    )
}