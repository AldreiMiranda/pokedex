import { Grid, Box, Typography } from '@mui/material'
import { BoxCard, ContaiberBox } from './details.style'
import Image from 'next/image'

export const Details = () => {
    return (
        <ContaiberBox>
            <Grid container>
                <Grid xs={6}>
                    <BoxCard>
                        <Image
                            src={'/images/gengar.png'}
                            alt="pokemon"
                            width={500}
                            height={500}
                        />
                    </BoxCard>
                </Grid>
                <Grid xs={6}>
                    <Box>
                        <Typography color="black" variant="subtitle1">
                            On the night of a full moon, if shadows move on
                            their own and laugh, it must be Gengar’s doing
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </ContaiberBox>
    )
}
