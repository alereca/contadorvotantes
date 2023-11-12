import React from 'react';
import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';

interface TotalCountProps {
        ids: string[];
}

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" size={100} sx={{color: 'green'}} {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

const TotalCount: React.FC<TotalCountProps> = ({ ids }) => {
    const percentage = Math.floor((ids.length / 350) * 100);

    return (
            <div style={{ position: 'relative', display: 'inline-block' }}>
                    <CircularProgressWithLabel value={percentage} />
            </div>
    );
};

export default TotalCount;