import React from "react";
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Img = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const ImageView = ({ mapData }) => {
    const { id } = useParams();
    const data = mapData[id]
    return (
            <Grid container spacing={2}>
                <Grid item xs={8} sm container>
                <Paper
                    sx={{
                        p: 1,
                        margin: 'auto',
                    }}
                >
                    <Grid item>
                        <Img alt={data['title']} src={data['url_overridden_by_dest']} />
                    </Grid>

                </Paper>
                </Grid>
                <Grid item xs={4} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs style={{textAlign:"left"}}>
                            <Typography gutterBottom align="left" variant="h2" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="h3"  align="left" gutterBottom color="#b1cdcd">
                                {data.author}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default ImageView
