import Link from "next/link";

export default function FooterSection() {
    return (
        <div
            data-elementor-type="footer"
            data-elementor-id={1818293}
            className="elementor elementor-1818293 elementor-location-footer"
            data-elementor-post-type="elementor_library"
        >
            <section
                className="elementor-section elementor-top-section elementor-element elementor-element-2f3d22c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="2f3d22c"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
            >
                <div className="elementor-container elementor-column-gap-default">
                    <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ffc063a"
                        data-id="ffc063a"
                        data-element_type="column"
                    >
                        <div className="elementor-widget-wrap elementor-element-populated">
                            <div
                                className="elementor-element elementor-element-3762afc elementor-nav-menu__align-center elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
                                data-id="3762afc"
                                data-element_type="widget"
                                data-settings='{"layout":"horizontal","submenu_icon":{"value":"<i class=\"fas fa-caret-down\"><\/i>","library":"fa-solid"}}'
                                data-widget_type="nav-menu.default"
                            >
                                <div className="elementor-widget-container flex flex-col">
                                    <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none flex justify-center">
                                        <ul
                                            id="menu-1-3762afc"
                                            className="elementor-nav-menu flex flex-row flex-nowrap items-center justify-center gap-4"
                                            data-smartmenus-id={17625100950143242}
                                        >
                                            <li className="ps2id menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-5010">
                                                <Link
                                                    href="#top"
                                                    aria-current="page"
                                                    className="elementor-item elementor-item-anchor"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-1723874">
                                                <Link
                                                    href="#contact"
                                                    aria-current="page"
                                                    className="elementor-item elementor-item-anchor"
                                                >
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1825065">
                                                <Link
                                                    href="/about-us"
                                                    className="elementor-item"
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5023">
                                                <Link
                                                    href="/terms/"
                                                    className="elementor-item"
                                                >
                                                    Terms and Conditions
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5024">
                                                <Link
                                                    href="/privacy/"
                                                    className="elementor-item"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                    <nav
                                        className="elementor-nav-menu--dropdown elementor-nav-menu__container hidden"
                                        aria-hidden="true"
                                    >
                                        <ul
                                            id="menu-2-3762afc"
                                            className="elementor-nav-menu"
                                            data-smartmenus-id={17625100950142542}
                                        >
                                            <li className="ps2id menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-5010">
                                                <Link
                                                    href="#top"
                                                    aria-current="page"
                                                    className="elementor-item elementor-item-anchor"
                                                    tabIndex={-1}
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-1723874">
                                                <Link
                                                    href="#contact"
                                                    aria-current="page"
                                                    className="elementor-item elementor-item-anchor"
                                                    tabIndex={-1}
                                                >
                                                    Contact Us
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1825065">
                                                <Link
                                                    href="about-us"
                                                    className="elementor-item"
                                                    tabIndex={-1}
                                                >
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5023">
                                                <Link
                                                    href="/terms/"
                                                    className="elementor-item"
                                                    tabIndex={-1}
                                                >
                                                    Terms and Conditions
                                                </Link>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5024">
                                                <Link
                                                    href="/privacy/"
                                                    className="elementor-item"
                                                    tabIndex={-1}
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-7ca7e56 elementor-widget elementor-widget-heading"
                                data-id="7ca7e56"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <div className="elementor-widget-container">
                                    <div className="elementor-heading-title elementor-size-default">
                                        © 2025 Tubekarma. All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-3dfc0ee elementor-widget elementor-widget-html"
                                data-id="3dfc0ee"
                                data-element_type="widget"
                                data-widget_type="html.default"
                            >
                                <div className="elementor-widget-container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}