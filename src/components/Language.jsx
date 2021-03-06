import Flag from "./Flag"

function Map ({userLang}) {
    let langFlag;
    switch(userLang){
            case 'EN': langFlag='english'; break;
            case 'RU': langFlag='russian'; break;
            case 'UA': langFlag='ukrainian'; break;
            case 'AR': langFlag='arabic'; break;
            default: langFlag=<div>Something went wrong!</div>
        }
    return (
      <>
        <Flag region={langFlag} style={{width:40+'px'}}/>
      </>
    );
}

export default Map;