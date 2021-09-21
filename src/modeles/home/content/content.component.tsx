import React, { useState, useEffect } from 'react'
import { Box } from './content.style'
import Link from 'next/link'
import { Grid } from '@mui/material'

export const ContentComponent = () => {
    const [pokemons, setpokemons] = useState([])

    React.useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokedex/2/')
            .then(reposta => {
                return reposta.json()
            })
            .then(repostaConvertida => {
                setpokemons(repostaConvertida.pokemon_entries)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <>
            <Grid container>
                {pokemons?.map(pokemon => (
                    <Grid xs={3}>
                        <Box key={pokemon.entry_number}>
                            {/* <Image
                                src={''}
                                alt="pokemon"
                                width={100}
                                height={100}
                            /> */}
                            <Link href={`/pokemon/${pokemon.entry_number}`}>
                                <a>{pokemon.pokemon_species.name}</a>
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}