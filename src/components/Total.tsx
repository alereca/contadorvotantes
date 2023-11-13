import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface TotalCountProps {
        ids: string[];
}

function CircularProgressWithLabel(
    props: { value: number },
) {
    const size = 50,
      thickness = 9,
      secColor = '#d1d1d1';
    const progressSx = {
        borderRadius: '50%',
        boxShadow: `inset 0 0 0 ${thickness/44*size}px ${secColor}`,
    };
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant='determinate' size={size} thickness={thickness} value={props.value} sx={progressSx} />
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
    const total = 350;
    const percentage = Math.floor((ids.length / total) * 100);

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <CircularProgressWithLabel value={percentage} />
            <Typography variant="caption" component="div" color="text.secondary" ml={1}>
                {`Votaron ${ids.length} de ${total} registrados`}
            </Typography>
        </div>
    );
};

export default TotalCount;