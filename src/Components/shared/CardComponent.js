import React from 'react'

export const CardComponent = ({nombre, dir_background}) => {
    return (
        <>
            <a href="https://www.google.com/">
                <div className="tk_section_card text-center">
                    <div>
                        <img src={dir_background} alt=""
                            className="tk_cat_bg" />
                    </div>
                    <div className="bg_dark"></div>
                    <div className="tk_card_info">
                        <div>
                            {/* <img src="img/Gastronomia/G001/icon.svg" alt="" width="80px" /> */}
                            <h5>{nombre}</h5>
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}
