import styled from "@emotion/styled"

const Resultado = ({resultado}) => {
    //console.log(resultado)
    const {PRICE, HIGHDAY ,LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
    return (
        <div>
            <p>EL Precio es de: <span>{PRICE}</span></p>
            <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
            <p>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
            <p>Última Actualiozación: <span>{LASTUPDATE}</span></p>
        </div>
    )
}

export default Resultado