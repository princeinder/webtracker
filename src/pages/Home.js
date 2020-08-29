import React from "react";
import Header from "../layout/Home/Header";
import Footer from "../layout/Home/Footer";
import OwlCarousel from "react-owl-carousel";
const Home = () => {
    return (
        <>
            <Header />
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 hero-text">
                            <h2>
                                Invest in <span>Alertya</span> <br />
                                Alertya Trading
                            </h2>
                            <h4>
                                Use modern progressive technologies of Alertya
                                to earn money
                            </h4>
                            <form className="hero-subscribe-from">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                />
                                <button className="site-btn sb-gradients">
                                    Get Started
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="img/laptop.png"
                                className="laptop-image"
                                alt="laptop-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6 about-text">
                            <h2>
                                What is <span>Alertya</span>
                            </h2>
                            <h5>
                                <span>Alertya</span> is an innovative payment
                                network and a new kind of money.
                            </h5>
                            <p>
                                <span>Alertya </span>is one of the most
                                important inventions in all of human history.
                                For the first time ever, anyone can send or
                                receive any amount of money with anyone else,
                                anywhere on the planet, conveniently and without
                                restriction. It’s the dawn of a better, more
                                free world.
                            </p>
                            <a
                                href="/"
                                className="site-btn sb-gradients sbg-line"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src="img/about-img.png" alt="about-img" />
                    </div>
                </div>
            </section>
            {/* About section end */}
            {/* Features section */}
            <section className="features-section spad gradient-bg">
                <div className="container text-white">
                    <div className="section-title text-center">
                        <h2>Our Features</h2>
                        <p>
                            Alertya is the simplest way to exchange money at
                            very low cost.
                        </p>
                    </div>
                    <div className="row">
                        {/* feature */}
                        <div className="col-md-6 col-lg-4 feature">
                            <i className="ti-mobile" />
                            <div className="feature-content">
                                <h4>Visual Monitor Pro</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                                <a href className="readmore">
                                    Readmore
                                </a>
                            </div>
                        </div>
                        {/* feature */}
                        <div className="col-md-6 col-lg-4 feature">
                            <i className="ti-shield" />
                            <div className="feature-content">
                                <h4>HTML Tracker Pro</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                                <a href className="readmore">
                                    Readmore
                                </a>
                            </div>
                        </div>
                        {/* feature */}
                        <div className="col-md-6 col-lg-4 feature">
                            <i className="ti-wallet" />
                            <div className="feature-content">
                                <h4>Password Protected Monitor Pro</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                                <a href className="readmore">
                                    Readmore
                                </a>
                            </div>
                        </div>
                        {/* feature */}
                        <div className="col-md-6 col-lg-4 feature">
                            <i className="ti-headphone-alt" />
                            <div className="feature-content">
                                <h4>Keyword Monitor Pro</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                                <a href className="readmore">
                                    Readmore
                                </a>
                            </div>
                        </div>
                        {/* feature */}
                        <div className="col-md-6 col-lg-4 feature">
                            <i className="ti-reload" />
                            <div className="feature-content">
                                <h4> Notifications</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                                <a href className="readmore">
                                    Readmore
                                </a>
                            </div>
                        </div>
                        {/* feature */}
                        <div className="col-md-6 col-lg-4 feature">
                            <i className="ti-panel" />
                            <div className="feature-content">
                                <h4>Encrypted Password Protection</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                                <a href className="readmore">
                                    Readmore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features section end */}
            {/* Process section */}
            <section className="process-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>
                            Get Started With <span>Alertya</span>
                        </h2>
                        <p>
                            Start learning about Alertya with interactive
                            tutorials. It’s fun, easy, and takes only a few
                            minutes!{" "}
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 process">
                            <div className="process-step">
                                <figure className="process-icon">
                                    <img
                                        src="img/process-icons/1.png"
                                        alt="process-icon"
                                    />
                                </figure>
                                <h4>Create Your Wallet</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 process">
                            <div className="process-step">
                                <figure className="process-icon">
                                    <img
                                        src="img/process-icons/2.png"
                                        alt="process-icon"
                                    />
                                </figure>
                                <h4>Create Your Wallet</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 process">
                            <div className="process-step">
                                <figure className="process-icon">
                                    <img
                                        src="img/process-icons/3.png"
                                        alt="process-icon"
                                    />
                                </figure>
                                <h4>Create Your Wallet</h4>
                                <p>
                                    Excepteur sint occaecat cupidatat non
                                    proident sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Process section end */}
            {/* Fact section */}
            <section className="fact-section gradient-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="fact">
                                <h2>60</h2>
                                <p>
                                    Support <br /> Countries
                                </p>
                                <i className="ti-basketball" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="fact">
                                <h2>12K</h2>
                                <p>
                                    Transactions <br /> per hour
                                </p>
                                <i className="ti-panel" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="fact">
                                <h2>5B</h2>
                                <p>
                                    Largest <br /> Transactions
                                </p>
                                <i className="ti-stats-up" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="fact">
                                <h2>240</h2>
                                <p>
                                    Years <br /> of Experience
                                </p>
                                <i className="ti-user" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fact section end */}
            {/* Team section */}
            <section className="team-section spad">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Pricing</h2>
                        <p>View our Plans</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-center align-items-end">
                        {/* Pricing Table*/}
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="bg-white p-10 rounded-lg shadow ">
                                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                                    Basic
                                </h1>
                                <h2 className="h1 font-weight-bold">
                                    $199
                                    <span className="text-small font-weight-normal ml-2">
                                        / month
                                    </span>
                                </h2>
                                <div className="custom-separator my-4 mx-auto bg-primary" />
                                <ul className="list-unstyled my-5 text-small text-left">
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Sed ut perspiciatis
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        At vero eos et accusamus
                                    </li>
                                    <li className="mb-3 text-muted">
                                        <i className="fa fa-times mr-2" />
                                        <del>Nam libero tempore</del>
                                    </li>
                                    <li className="mb-3 text-muted">
                                        <i className="fa fa-times mr-2" />
                                        <del>Sed ut perspiciatis</del>
                                    </li>
                                    <li className="mb-3 text-muted">
                                        <i className="fa fa-times mr-2" />
                                        <del>Sed ut perspiciatis</del>
                                    </li>
                                </ul>
                                <a
                                    href="/"
                                    className="btn site-btn sb-gradients sbsc"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="bg-white p-10 rounded-lg shadow">
                                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                                    Pro
                                </h1>
                                <h2 className="h1 font-weight-bold">
                                    $399
                                    <span className="text-small font-weight-normal ml-2">
                                        / month
                                    </span>
                                </h2>
                                <div className="custom-separator my-4 mx-auto bg-primary" />
                                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Sed ut perspiciatis
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        At vero eos et accusamus
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Nam libero tempore
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Sed ut perspiciatis
                                    </li>
                                    <li className="mb-3 text-muted">
                                        <i className="fa fa-times mr-2" />
                                        <del>Sed ut perspiciatis</del>
                                    </li>
                                </ul>
                                <a
                                    href="/"
                                    className="btn site-btn sb-gradients sbsc"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white p-10 rounded-lg shadow">
                                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                                    Enterprise
                                </h1>
                                <h2 className="h1 font-weight-bold">
                                    $899
                                    <span className="text-small font-weight-normal ml-2">
                                        / month
                                    </span>
                                </h2>
                                <div className="custom-separator my-4 mx-auto bg-primary" />
                                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Sed ut perspiciatis
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        At vero eos et accusamus
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Nam libero tempore
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Sed ut perspiciatis
                                    </li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary" />{" "}
                                        Sed ut perspiciatis
                                    </li>
                                </ul>
                                <a
                                    href="/"
                                    className="btn site-btn sb-gradients sbsc"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="review-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 push-8">
                            <img
                                src="img/quote.png"
                                alt="quote"
                                className="quote mb-5"
                            />
                            <OwlCarousel
                                className="review-text-slider"
                                loop
                                margin={20}
                                items={1}
                                dots={false}
                                nav
                                autoplay
                                animateOut="fadeOutDown"
                                animateIn="fadeInDown"
                            >
                                <div className="review-text">
                                    <p>
                                        "Alertya is exciting because it shows
                                        how cheap it can be. Alertya is better
                                        than currency in that you don’t have to
                                        be physically in the same place and, of
                                        course, for large transactions, currency
                                        can get pretty inconvenient.”
                                    </p>
                                </div>
                                <div className="review-text">
                                    <p>
                                        "Alertya is exciting because it shows
                                        how cheap it can be. Alertya is better
                                        than currency in that you don’t have to
                                        be physically in the same place and, of
                                        course, for large transactions, currency
                                        can get pretty inconvenient.”
                                    </p>
                                </div>
                                <div className="review-text">
                                    <p>
                                        "Alertya is exciting because it shows
                                        how cheap it can be. Alertya is better
                                        than currency in that you don’t have to
                                        be physically in the same place and, of
                                        course, for large transactions, currency
                                        can get pretty inconvenient.”
                                    </p>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className="col-lg-4 pr-0 pull-3">
                            <OwlCarousel
                                className="review-meta-slider pt-5"
                                loop
                                items={3}
                                nav
                                dots
                                margin={20}
                                center={true}
                                autoplay
                            >
                                <div className="author-meta">
                                    <div
                                        className="author-avatar set-bg"
                                        style={{
                                            backgroundImage: `url(${"img/review/1.jpg"})`,
                                        }}
                                    ></div>
                                    <div className="author-name">
                                        <h4>Aaron Ballance</h4>
                                        <p>Ceo Alertya</p>
                                    </div>
                                </div>
                                <div className="author-meta">
                                    <div
                                        className="author-avatar set-bg"
                                        style={{
                                            backgroundImage: `url(${"img/review/2.jpg"})`,
                                        }}
                                    ></div>
                                    <div className="author-name">
                                        <h4>Jackson Nash</h4>
                                        <p>Head of Design</p>
                                    </div>
                                </div>
                                <div className="author-meta">
                                    <div
                                        className="author-avatar set-bg"
                                        style={{
                                            backgroundImage: `url(${"img/review/3.jpg"})`,
                                        }}
                                    ></div>
                                    <div className="author-name">
                                        <h4>Katy Abrams</h4>
                                        <p>Product Manager</p>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter-section gradient-bg">
                <div className="container text-white">
                    <div className="row">
                        <div className="col-lg-7 newsletter-text">
                            <h2>Subscribe to our Newsletter</h2>
                            <p>
                                Sign up for our weekly industry updates, insider
                                perspectives and in-depth market analysis.
                            </p>
                        </div>
                        <div className="col-lg-5 col-md-8 offset-lg-0 offset-md-2">
                            <form className="newsletter-form">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                />
                                <button>Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
