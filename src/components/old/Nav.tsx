"use client";

import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="elementor-section elementor-inner-section elementor-element elementor-element-d554c1f elementor-section-content-bottom elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky" data-id="d554c1f" data-element_type="section" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_parent&quot;:&quot;body&quot;,&quot;sticky_offset&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_effects_offset&quot;:0}">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0d3de6a" data-id="0d3de6a" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-1c50d58 elementor-widget elementor-widget-image mt[-10px]" data-id="1c50d58" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container flex">
                <a href="#top">
                  <img
                    decoding="async"
                    width="1440"
                    height="230"
                    src="assets/logo.png"
                    className="attachment-full size-full wp-image-2742786 w-[160px] h-auto" alt="SimplyGram - Instagram growth service"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-b63cdf4" data-id="b63cdf4" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-85d4226 elementor-nav-menu--stretch elementor-widget__width-auto elenavi elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="85d4226" data-element_type="widget" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;&lt;i className=\&quot;\&quot;&gt;&lt;\/i&gt;&quot;,&quot;library&quot;:&quot;&quot;},&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">
              <div className="elementor-widget-container">
                <nav className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-none hidden md:block">
                  <ul id="menu-1-85d4226" className="elementor-nav-menu justify-end ml-auto w-full" data-smartmenus-id="17624568082517195">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1367611">
                      <a href="#top" className="elementor-item elementor-item-anchor elementor-item-active mx-4" aria-current="location">Home</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299730">
                      <a href="#reviews" className="elementor-item elementor-item-anchor mx-4" aria-current={false}>Reviews</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299729">
                      <a href="#how-it-works" className="elementor-item elementor-item-anchor mx-4" aria-current={false}>How it Works</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299731">
                      <a href="#faqs" className="elementor-item elementor-item-anchor mx-4">FAQs</a></li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299732">
                      <a href="#contact" className="elementor-item elementor-item-anchor mx-4">Contact</a></li>
                    <li className="add-box menu-item menu-item-type-custom menu-item-object-custom menu-item-1299733">
                      <a href="#pricing" className="elementor-item elementor-item-anchor mx-4">3 Day Free Trial</a></li>
                  </ul>			</nav>
                <div 
                  className={`elementor-menu-toggle md:hidden ${isMenuOpen ? 'elementor-active' : ''}`}
                  role="button" 
                  tabIndex={0} 
                  aria-label="Menu Toggle" 
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleMenu();
                    }
                  }}
                  style={{cursor: 'pointer'}}
                >
                  <i 
                    aria-hidden="true" 
                    role="presentation" 
                    className={`elementor-menu-toggle__icon--open eicon-menu-bar ${isMenuOpen ? 'hidden' : ''}`}
                  ></i>
                  <i 
                    aria-hidden="true" 
                    role="presentation" 
                    className={`elementor-menu-toggle__icon--close eicon-close ${isMenuOpen ? '' : 'hidden'}`}
                  ></i>
                  <span className="elementor-screen-only">Menu</span>
                </div>
                <nav 
                  className={`elementor-nav-menu--dropdown elementor-nav-menu__container md:hidden ${isMenuOpen ? '' : 'hidden'}`}
                  aria-hidden={!isMenuOpen}
                  style={{
                    top: "64.5px", 
                    "--menu-height": isMenuOpen ? "auto" : "0", 
                    width: "100%", 
                    left: "0px"
                  } as React.CSSProperties}
                >
                  <ul id="menu-2-85d4226" className="elementor-nav-menu" data-smartmenus-id="176245680825298">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1367611">
                      <a href="#top" className="elementor-item elementor-item-anchor" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>Home</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299730">
                      <a href="#reviews" className="elementor-item elementor-item-anchor" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>Reviews</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299729">
                      <a href="#how-it-works" className="elementor-item elementor-item-anchor" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>How it Works</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299731">
                      <a href="#faqs" className="elementor-item elementor-item-anchor" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>FAQs</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299732">
                      <a href="#contact" className="elementor-item elementor-item-anchor" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1299733">
                      <a href="#pricing" className="elementor-item elementor-item-anchor" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>3 Day Free Trial</a>
                    </li>
                  </ul>			</nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

