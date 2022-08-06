import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { EntretenimientoResultados } from './../../data/EntretenimientoData';

export const EntretenimientoScreen = () => {
    const [resultados, setResultados] = useState(EntretenimientoResultados)
    return (
        <>
            {
                resultados.map((result) => {
                    return (
                        <>
                            <Link className="Entretenimiento__Card__Menu" 
                                to={`/entretenimiento/${result.nombre}`}>
                                <p>{result.nombre.toUpperCase()}: id {result.id}</p>
                                <img src={result.dir_background} alt = "" />
                            </Link>
                        </>
                    )
                })
            }
        </>
    )
}
