import React, { useState } from 'react'

import { NavLink, withRouter } from 'react-router-dom'
import Routes from '../Routes'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    MenuList,
    MenuItem,
    ListItemText,
} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        drawer: {
            width: 300,
            background: '#2EABBD',
            color: 'white',
        },
        fullList: {
            width: 'auto',
            color: 'white',
        },
        appBar: { background: '#2EABBD' },
    })
)

const NavigationBar: React.FC = (props: any) => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return
            }

            setIsOpen(open)
        }

    const activeRoute = (routeName: any) => {
        return props.location.pathname === routeName ? true : false
    }

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Indra's Pearls
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer
                classes={{ paper: classes.drawer }}
                open={isOpen}
                onClose={toggleDrawer(false)}
                BackdropProps={{ invisible: true }}
            >
                <div
                    className={classes.fullList}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <MenuList>
                        {Routes.map((prop, key) => {
                            return (
                                <NavLink
                                    to={prop.path}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                    key={key}
                                >
                                    <MenuItem selected={activeRoute(prop.path)}>
                                        <ListItemText
                                            primary={prop.sidebarName}
                                        />
                                    </MenuItem>
                                </NavLink>
                            )
                        })}
                    </MenuList>
                </div>
            </Drawer>
        </div>
    )
}

export default withRouter(NavigationBar)
