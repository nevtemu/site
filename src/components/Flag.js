import React from 'react';

import Ukraine from "./flags/UA"
import Cherkasy from "./flags/cherkasy"
import Chernihiv from "./flags/chernihiv"
import Chernivtsi from "./flags/chernivtsi"
import Crimea from "./flags/crimea"
import Dnipro from "./flags/dnipro"
import Donetsk from "./flags/donetsk"
import Ivano from "./flags/ivano"
import Kharkiv from "./flags/kharkiv"
import Kherson from "./flags/kherson"
import Khmelnytskyi from "./flags/khmelnytskyi"
import Kirovohrad from "./flags/kirovohrad"
import Kyiv from "./flags/kyiv"
import Luhansk from "./flags/luhansk"
import Lviv from "./flags/lviv"
import Mykolaiv from "./flags/mykolaiv"
import Odessa from "./flags/odessa"
import Poltava from "./flags/poltava"
import Rivne from "./flags/rivne"
import Sumy from "./flags/sumy"
import Ternopil from "./flags/ternopil"
import Vinnytsia from "./flags/vinnytsia"
import Volyn from "./flags/volyn"
import Zakarpattia from "./flags/zakarpattia"
import Zaporizhia from "./flags/zaporizhia"
import Zhytomyr from "./flags/zhytomyr"

const Flag = (props) => {
    const style = props.style;
    const flags = {
        ukraine: Ukraine,
        cherkasy: Cherkasy,
        chernihiv: Chernihiv,
        chernivtsi: Chernivtsi,
        crimea: Crimea,
        dnipro: Dnipro,
        donetsk: Donetsk,
        ivano: Ivano,
        kharkiv: Kharkiv,
        kherson: Kherson,
        khmelnytskyi: Khmelnytskyi,
        kirovohrad: Kirovohrad,
        kyiv: Kyiv,
        luhansk: Luhansk,
        lviv: Lviv,
        mykolaiv: Mykolaiv,
        odessa: Odessa,
        poltava: Poltava,
        rivne: Rivne,
        sumy: Sumy,
        ternopil: Ternopil,
        vinnytsia: Vinnytsia,
        volyn: Volyn,
        zakarpattia: Zakarpattia,
        zaporizhia: Zaporizhia,
        zhytomyr: Zhytomyr
    };
    const Flag = flags[props.region];
    return (
        <div className="flag-small" style={style}>
            <Flag/>
        </div>
    )
}
export default Flag;