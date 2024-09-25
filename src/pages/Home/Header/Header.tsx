import './Header.scss'

export default function Header() {

    return (
        <header className="header grid-bleed">
            <div className='header__content'>
                <h1 className='header__header'>Simple, traffic-based pricing</h1>
                <p className="header__body">Sign-up for our 30-day trial. No credit card required. </p>
            </div>
        </header>
    )
}