class Wiki{
    hasError = null
    constructor(title,page_id){
        this.title = title,
        this.page_id = page_id
    }
    getPropertiesObject(){
        return{
            title: this.title,
            this: this.page_id
        }
    }
    setError(hasError){
        this.hasError = hasError
    }
}

module.exports = Wiki