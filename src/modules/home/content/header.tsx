import React, { useState, useEffect } from 'react'
import { HeaderBox } from './content.style'
import Link from 'next/link'
import { Grid, Box } from '@mui/material'
import Image from 'next/image'

export const HeaderComponent = () => {
    return (
        <>
            <HeaderBox>
                <Image
                    src={'/images/pokedex.png'}
                    alt="pokemon"
                    width={250}
                    height={100}
                />
            </HeaderBox>
        </>
    )
}
