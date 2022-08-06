import React, { useState } from 'react'
import { GastronomiaResults } from '../../data/GastronomiaData';
import { CardComponent } from '../shared/CardComponent';

import './GastronomiaScreen.css';

export const GastronomiaScreen = () => {
    const [GastronomiaState] = useState(GastronomiaResults);
    return (
        <>
            <header className="tk_header">
                <div className="text-center tk_header_logo">
                    <img src="img/logo/logo.svg" alt="" className="tk_logo" />
                </div>
            </header>
            <section className='gastronomia_section'>
                <div id="icon-section">
                    <h4>Gastronomia</h4>
                    <div className="tk_header_logo">
                        <img src="img/logo/logo.svg" alt=""
                            className="tk_logo" />
                    </div>
                    <hr />
                </div>
                <br />
                <div className="categ-section">
                    <div width="288px" className="text-center">
                        <h6>Lo mejor en Huaura</h6>
                    </div>
                    <div className="cards-section">
                        {
                            GastronomiaState.map(({ nombre: titulo, dir_background: url }) => {
                                return (
                                    <CardComponent nombre={titulo} dir_background={url} />
                                )
                            })
                        }

                    </div>
                    <div><br /><br /></div>
                </div>
            </section>
        </>
    )
}
