
import { type FC } from 'react'
import type { Gif } from '../interfaces/gif.response'

interface Props {
    gifs: Gif[]
}

const GifsList : FC<Props> = ({gifs} : Props) => {
  return (
     <div className="gifs-container">
        {
            gifs.map((gif) => (
                <div key={gif.id} className='gif-card'>
                    <img src={gif.url} alt={gif.title} />
                    <h3>{ gif.title }</h3>
                    <p>
                        {gif.width} x {gif.height}
                    </p>
                </div>
            ))
        }
    </div>
  )
}

export default GifsList
