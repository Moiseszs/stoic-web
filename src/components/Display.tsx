import { useEffect, useLayoutEffect, useState } from 'react';
import './display.css'
import Quote from '../class/quote';

function Display() {

    const [quote, setQuote] = useState<Quote>()

    const getResults = async() =>{
        const URL = 'https://stoic-quotes.com/api/quote';
        
        await fetch(URL).then((res) => {
          return res.json()
        })
        .then((data) => {
          let newQuote = new Quote(data['text'], data['author'])
          setQuote(() => newQuote)
        })
        .catch((e) => console.log('houve erro: ' + e))

    }


    //useEffect(() => {console.log(cont)})

    useEffect(() => {getResults()}, [])

    return (
        <div className="container">
          <div className="display">
            <p className="content">{quote?.content}</p>
            <h4>{quote?.author}</h4>
          </div>

          <div>
            {/* <button onClick={() => getResults()}>Update</button> */}
          </div>
        </div>
    )
}

export default Display;