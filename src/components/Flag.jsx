import Ukraine from "./flags/_UA.jsx"
import Russia from "./flags/_RU.jsx"
import UK from "./flags/_EN.jsx"
import UAE from "./flags/_AR.jsx"
import Cherkasy from "./flags/cherkasy.jsx"
import Chernihiv from "./flags/chernihiv.jsx"
import Chernivtsi from "./flags/chernivtsi.jsx"
import Crimea from "./flags/crimea.jsx"
import Dnipro from "./flags/dnipro.jsx"
import Donetsk from "./flags/donetsk.jsx"
import Ivano from "./flags/ivano.jsx"
import Kharkiv from "./flags/kharkiv.jsx"
import Kherson from "./flags/kherson.jsx"
import Khmelnytskyi from "./flags/khmelnytskyi.jsx"
import Kirovohrad from "./flags/kirovohrad.jsx"
import Kyiv from "./flags/kyiv.jsx"
import Luhansk from "./flags/luhansk.jsx"
import Lviv from "./flags/lviv.jsx"
import Mykolaiv from "./flags/mykolaiv.jsx"
import Odessa from "./flags/odessa.jsx"
import Poltava from "./flags/poltava.jsx"
import Rivne from "./flags/rivne.jsx"
import Sumy from "./flags/sumy.jsx"
import Ternopil from "./flags/ternopil.jsx"
import Vinnytsia from "./flags/vinnytsia.jsx"
import Volyn from "./flags/volyn.jsx"
import Zakarpattia from "./flags/zakarpattia.jsx"
import Zaporizhia from "./flags/zaporizhia.jsx"
import Zhytomyr from "./flags/zhytomyr.jsx"

export default function Flag (props) {
    const style = props.style;
    const flags = {
        ukrainian: Ukraine,
        english: UK,
        arabic: UAE,
        russian: Russia,

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
        <div style={style}>
            <Flag/>
        </div>
    )
}