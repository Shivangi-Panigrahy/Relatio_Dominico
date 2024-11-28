import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';


const FileDashboard = ({ cards }) => {


    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                textAlign: 'center',
                                boxShadow: 2,
                                backgroundColor: card.color,
                            }}
                        >
                            <CardContent>
                                <Typography variant="subtitle1" color={card.statusColor} gutterBottom textAlign={'left'} fontSize={'14px'} fontWeight={700}>
                                    {card.label}
                                </Typography>
                                <Typography variant="h4" color={card.textColor} textAlign={'left'} fontSize={'20px'} fontWeight={700}>
                                    {card.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FileDashboard;
