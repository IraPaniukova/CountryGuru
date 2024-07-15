import { Stack, Typography } from "@mui/material"
import logo from '../../images/Logo_300.png';

interface HeaderProps {
    selectedButton: string,
}

export const Header: React.FC<HeaderProps> = ({ selectedButton }) => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'center' }}
            justifyContent={{ xs: 'center', sm: 'space-between' }}
            width={{ xs: 'auto', sm: '85vw', lg: '70vw' }}
            padding={2}
            spacing={2}>
            <img src={logo} alt="LOGO" height={50} width={50} />

            {selectedButton ?
                <Typography color="grey" variant='h5' align='center' pr={{ sm: '17vw', lg: '10vw' }}>
                    Welcome to Country Guru.
                </Typography> :
                <Typography color="primary" variant='h5' align='center'>
                    Welcome to Country Guru.  Ask any question about a country.
                </Typography>}
        </Stack>
    )
}