class WikiPage{
    hasError = null
    constructor(title,text){
        this.title = title,
        this.text = text
    }
    getPropertiesObject(){
        return{
            title: this.title,
            this: this.text
        }
    }
    setError(hasError){
        this.hasError = hasError
    }
}

module.exports = WikiPage