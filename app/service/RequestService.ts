
class RequestService{

    private deafaulHeaders = {
        "Content-Type": "application/json"
    }

    private getHeaders(headers: HeadersInit){
        return Object.assign(this.deafaulHeaders, headers)
    }

    public get(url:string, headers: HeadersInit = {}){
        return fetch(url, {
            method: 'GET',
            headers: this.getHeaders(headers)
        })
    }

    
    

}

export default new RequestService()
