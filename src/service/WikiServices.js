const axios = require('axios');

class WikiServices {
    async SearchTitle(title){
        let res = await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+ title +'&format=json');
        let res_wiki = res.data.query.search[0]
        return res_wiki
    };
    async GetPage(page_id){
        let res = await axios.get('https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&pageid='+page_id);
        return res.data
    };
}

module.exports = WikiServices