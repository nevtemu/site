import React from 'react'
import QRCode from "react-qr-code";

const Code = ({url}) => {
        return (
                <QRCode value={url} />
        )
}
export default Code;



// import Code from './Code'
// <Code url={"http://artem-soroka.tk"}/>