import { Grid, Box, Typography } from '@mui/material'
import { BoxCard, ContainerBox, BoxGrid, Types } from './details.style'
import Image from 'next/image'

export const Details = () => {
    return (
        <ContainerBox>
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
                <Grid xs={6} alignSelf="center">
                    <Box>
                        <Typography color="black" variant="h5">
                            On the night of a full moon, if shadows move on
                            their own and laugh, it must be Gengar’s doing
                        </Typography>
                    </Box>
                    <BoxGrid>
                        <Grid container>
                            <Grid xs={6}>
                                <Box display="flex" alignItems="baseline">
                                    <Typography color="black" variant="h6">
                                        Height:
                                    </Typography>
                                    <Typography
                                        color="black"
                                        variant="body1"
                                        marginLeft="5px"
                                    >
                                        1.5M
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Box display="flex" alignItems="baseline">
                                    <Typography color="black" variant="h6">
                                        Category:
                                    </Typography>
                                    <Typography
                                        color="black"
                                        variant="body1"
                                        marginLeft="5px"
                                    >
                                        Shadow
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Box display="flex" alignItems="baseline">
                                    <Typography color="black" variant="h6">
                                        weight:
                                    </Typography>
                                    <Typography
                                        color="black"
                                        variant="body1"
                                        marginLeft="5px"
                                    >
                                        40.5kg
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Box display="flex" alignItems="baseline">
                                    <Typography color="black" variant="h6">
                                        Abilities:
                                    </Typography>
                                    <Typography
                                        color="black"
                                        variant="body1"
                                        marginLeft="5px"
                                    >
                                        Cursed Body
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={6}>
                                <Box display="flex" alignItems="baseline">
                                    <Typography color="black" variant="h6">
                                        Gender:
                                    </Typography>
                                    <Typography
                                        color="black"
                                        variant="body1"
                                        marginLeft="5px"
                                    ></Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </BoxGrid>
                </Grid>
                <Grid xs={6}>
                    <Box>
                        <Typography color="black" variant="h5">
                            Type
                        </Typography>
                        <Box>
                            <Types color={'#7b62a3'}>Ghost</Types>
                            <Types color={'#b97fc9'}>Poison</Types>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box>
                        <Typography color="black" variant="h5">
                            Weaknesses
                        </Typography>
                        <Box>
                            <Types color={'#7b62a3'}>Ghost</Types>
                            <Types color={'#707070'}>Dark</Types>
                            <Types color={'#f366b9'}>Psychic</Types>
                            <Types color={'#f7de3f'}>Ground</Types>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ContainerBox>
    )
}
