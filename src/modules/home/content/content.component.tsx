import React, { useState, useEffect } from 'react'
import { BoxCard, BoxImage, BoxText, InfoNumber, Types, ContaiberBox } from './content.style'
import Link from 'next/link'
import { Grid, Box } from '@mui/material'
import Image from 'next/image'

export const ContentComponent = () => {
    const [pokemons, setpokemons] = useState([])
    const [types, setTipes] = useState([])

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
        <ContaiberBox>
            <Grid container>
                {pokemons?.map(pokemon => (
                    <Grid xs={6} md={3} lg={2}>
                        <BoxCard key={pokemon.entry_number}>
                            <BoxImage>
                                <Image
                                    src={'/images/gengar.jpeg'}
                                    alt="pokemon"
                                    width={100}
                                    height={100}
                                />
                            </BoxImage>
                            <Box display="flex" alignItems="baseline">
                                <BoxText>
                                    <Link
                                        href={`/pokemon/${pokemon.entry_number}`}
                                    >
                                        <a>{pokemon.pokemon_species.name}</a>
                                    </Link>
                                </BoxText>
                                <InfoNumber># 001</InfoNumber>
                            </Box>
                            <Box>
                                <Types color={'#7b62a3'}>Ghost</Types>
                                <Types color={'#b97fc9'}>Poison</Types>
                            </Box>
                        </BoxCard>
                    </Grid>
                ))}
            </Grid>
        </ContaiberBox>
    )
}
