class Quote{
    content: string = ''
    author: string = ''
    
    constructor(content:string, author:string){
        this.author = author
        this.content = content
    }
}

export default Quote;