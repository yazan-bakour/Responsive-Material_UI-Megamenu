import React, { FC } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import DrawerContent from './DrawerContent'

const drawerWidth = '100%'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirectio: 'column',
      position: 'absolute',
      right: '30px',
      alignSelf: 'center'
    },
    drawer: {
      [theme.breakpoints.up('lg')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    menuButton: {
      margin: 0,
      padding: 0,
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      },
      '& $svg': {
        fontSize: '46px',
        color: 'rgb(215, 137, 215)'
      }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#2a3d66',
      color: '#fff',
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      }
    }
  })
)

export type MobileHeaderProps = {
}

const Sidebar: FC<MobileHeaderProps> = ({
}) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <IconButton
        // color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Hidden smUp implementation='css'>
        <Drawer
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <DrawerContent handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Hidden>
    </div>
  )
}

export default Sidebar
