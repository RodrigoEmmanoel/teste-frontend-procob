import { Avatar, Box, IconButton } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import './style.scss'
import MenuIcon from '@mui/icons-material/Menu'

export default function LeftMenu() {
  const collapseMenu = useMediaQuery('(max-width:460px)')

  return (
    <Box className="left-menu">
      <img
        src="/src/assets/img/logo-procob.webp"
        alt="Logo"
        className="left-menu__logo"
      />
      <div className="left-menu__icons">
        {collapseMenu ? (
          <>
            <IconButton className="left-menu__menu-icon">
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Avatar className="left-menu__avatar--square" variant="square">
              &nbsp;
            </Avatar>
            <Avatar className="left-menu__avatar--square" variant="square">
              &nbsp;
            </Avatar>
            <Avatar className="left-menu__avatar--square" variant="square">
              &nbsp;
            </Avatar>
            <Avatar className="left-menu__avatar--square" variant="square">
              &nbsp;
            </Avatar>
          </>
        )}
        <Avatar className="left-menu__avatar--circle">&nbsp;</Avatar>
      </div>
    </Box>
  )
}
