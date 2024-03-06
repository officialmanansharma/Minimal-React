import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { useTheme } from '@emotion/react'
import { CurrentVistis } from './CurrentVistis'
import { CurrentSubject } from './CurrentSubject'
import { WebsiteVisits } from './WebsiteVisits'
import { ConversationRates } from './ConversationRates'


export const Dashboard = () => {

    const theme = useTheme();

  return (
    <Box>
        <Box
        sx={{
            padding: '20px'
        }}>
            <Typography 
                variant='h5'
                sx={{
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center'
                }} 
            >
                Hi, Welcome back <WavingHandIcon sx={{marginLeft: '10px', color: '#D4Af37'}} />
            </Typography>
            <Box 
            sx={{
                marginTop: '35px'
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Card 
                        sx={{
                            padding: '40px 24px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h5' 
                                fontWeight='600'
                            >
                                {`714K`}
                            </Typography>
                            <Typography 
                                variant='subtitle1' 
                                fontWeight='600'
                                sx={{
                                    color: theme.palette.grey[600]
                                }}
                            >
                                {`Weekly Sales`}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card 
                        sx={{
                            padding: '40px 24px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h5' 
                                fontWeight='600'
                            >
                                {`1.35m`}
                            </Typography>
                            <Typography 
                                variant='subtitle1' 
                                fontWeight='600'
                                sx={{
                                    color: theme.palette.grey[600]
                                }}
                            >
                                {`New Users`}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card 
                        sx={{
                            padding: '40px 24px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h5' 
                                fontWeight='600'
                            >
                                {`1.72m`}
                            </Typography>
                            <Typography 
                                variant='subtitle1' 
                                fontWeight='600'
                                sx={{
                                    color: theme.palette.grey[600]
                                }}
                            >
                                {`Item Orders`}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card 
                        sx={{
                            padding: '40px 24px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h5' 
                                fontWeight='600'
                            >
                                {`714K`}
                            </Typography>
                            <Typography 
                                variant='subtitle1' 
                                fontWeight='600'
                                sx={{
                                    color: theme.palette.grey[600]
                                }}
                            >
                                {`Weekly Sales`}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}
                sx={{
                    marginTop: '10px'
                }}>
                    <Grid item xs={8}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Website Visits`}
                            </Typography>
                            <Typography 
                                variant='subtitle2' 
                                fontWeight='600'
                                sx={{
                                    color: theme.palette.grey[600]
                                }}
                            >
                                {`(+43%) than last year`}
                            </Typography>
                            <WebsiteVisits />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Current Visits`}
                            </Typography>
                            <CurrentVistis />
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}
                sx={{
                    marginTop: '10px'
                }}>
                    <Grid item xs={8}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Conversion Rates`}
                            </Typography>
                            <Typography 
                                variant='subtitle2' 
                                fontWeight='600'
                                sx={{
                                    color: theme.palette.grey[600]
                                }}
                            >
                                {`(+43%) than last year`}
                            </Typography>
                            <ConversationRates />
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Current Subject`}
                            </Typography>
                            <CurrentSubject />
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}
                sx={{
                    marginTop: '10px'
                }}>
                    <Grid item xs={8}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`News Update`}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Order Timeline`}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={3}
                sx={{
                    marginTop: '10px'
                }}>
                    <Grid item xs={4}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Traffic by Site`}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card 
                        sx={{
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: 'rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px'
                        }}>
                            <Typography 
                                variant='h6' 
                                fontWeight='600'
                            >
                                {`Tasks`}
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}
