import { Component } from "react";
import Quote from "../class/quote";
import './display.css'
type QuoteState = {
    quote: Quote
}

class DisplayClass extends Component<QuoteState>{

    state: QuoteState = {
        quote: {
            content: '',
            author: ''
        }
    }

    constructor(props: any){
        super(props);
    }


    fetchContent() : void {
        const URL = 'https://stoic-quotes.com/api/quote'
        fetch(URL).then((res) => {
          return res.json()
        })
        .then((data) => {
          let newQuote = new Quote(data['text'], data['author'])
          this.setState({quote: newQuote})
        })
        .catch((e) => console.log('houve erro: ' + e))
    }

    componentWillMount(): void {
        const URL = 'https://stoic-quotes.com/api/quote';

        fetch(URL).then((res) => {
          return res.json()
        })
        .then((data) => {
          let newQuote = new Quote(data['text'], data['author'])
          this.setState({quote: newQuote})
        })
        .catch((e) => console.log('houve erro: ' + e))
    }

    render(){
        return(
            <div className="container">
                <div className="display">
                    <p className="content">{this.state.quote?.content}</p>
                    <h4>{this.state.quote.author}</h4>
                </div>

                <div className="btn-container">
                <button 
                onClick={() => setTimeout(() => {this.fetchContent()}, 100)} className="update-btn">Novo</button>
                </div>
            </div>
        );
    }
}

export default DisplayClass;