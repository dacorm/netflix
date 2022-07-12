import React, {useEffect, useState} from 'react';
import {Movie} from "../typing";

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
    const [movie, setMovie] = useState<Movie | null>(null);


    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random()* netflixOriginals.length)])
    }, [netflixOriginals])

    console.log(movie);

    return (
        <div>
            <div>
                {/*<Image src={}/>*/}
            </div>
        </div>
    )
}

export default Banner