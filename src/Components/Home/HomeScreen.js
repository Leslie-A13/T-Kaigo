import React from 'react'
import { Link } from 'react-router-dom';
import './HomeScreen.css';

export const HomeScreen = () => {
    return (
        <section className='home_section'>
            <div id="icon-section">
                <div className="tk_header_logo">
                    <img src="img/logo/logo.svg" alt="" className="tk_logo" />
                </div>
            </div>
            <div name="categ-section">
                <div width="288px" className="text-center" style={{paddingTop: "5%"}}>
                    <h6>¿QUÉ PLANES?</h6>
                </div>
                <Link to = "/turismo">
                    <div className="tk_section_card text-center">
                        <div>
                            <img src={"img/categorias/turismo.png"} className="tk_cat_bg" alt=''/>
                        </div>
                        <div className="bg_dark"></div>
                        <div className="tk_card_info">
                            <div>
                                <img src={"img/categorias/turismo.svg"} alt="" />
                                <h5>Turismo</h5>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to = "/gastronomia">
                    <div className="tk_section_card text-center">
                        <div>
                            <img src={"img/categorias/gastronomia.png"} class="tk_cat_bg" alt='' />
                        </div>
                        <div className="bg_dark"></div>
                        <div className="tk_card_info">
                            <div>
                                <img src={"img/categorias/gastronomia.svg"} alt="" />
                                <h5>Gastronomia</h5>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to = "/entretenimiento">
                    <div className="tk_section_card text-center">
                        <div>
                            <img src={"img/categorias/entretenimiento.png"} className="tk_cat_bg" alt=''/>
                        </div>
                        <div className="bg_dark"></div>
                        <div className="tk_card_info">
                            <div>
                                <img src={"img/categorias/entretenimiento.svg"} alt="" />
                                <h5>Entretenimiento</h5>
                            </div>
                        </div>
                    </div>
                </Link>
                <br /><br />
            </div>
        </section>

    )
}
