import Flag from "./Flag"

function Map (props) {
    const lang = props.userLang;
    let langFlag;
    switch(lang){
            case 'en-GB': case 'en-US': langFlag='english'; break;
            case 'ru-RU': langFlag='russian'; break;
            case 'ua-UA': langFlag='ukranian'; break;
            case 'ar-AE': langFlag='arabic'; break;
            default: flagComponent=<div>Something went wrong!</div>
        }
    return (
      <>
        <Flag region={langFlag} style={{width:40+'px'}}/>
      </>
    );
}

export default Map;