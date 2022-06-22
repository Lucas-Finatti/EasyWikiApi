const WikiServices = require('../service/WikiServices');
const router = require( 'express' ).Router();

router.get('/description', async(req, res)=>{
    const wikiServices = new WikiServices() 
    let title = req.query.title
    res_data = await wikiServices.SearchTitle(title)
    res.send(res_data)
});

router.get('/description/page', async(req, res)=>{
    const wikiServices = new WikiServices() 
    let page_id = req.query.page_id
    res_data = await wikiServices.GetPage(page_id);
    res.send(res_data)
});

module.exports = router;
