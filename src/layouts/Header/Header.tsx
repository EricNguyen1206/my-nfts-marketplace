import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import ava1 from "assets/images/ava-01.png";
import "./Header.scss";
import { AccountBalanceWallet } from "@mui/icons-material";
import { readUserData, disconectUser } from "models/user";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
const NAV__LINKS = [
    {
        display: "Home",
        url: "/",
    },
    {
        display: "Art",
        url: "/category/art",
    },
    {
        display: "Gaming",
        url: "/category/gaming",
    },
    {
        display: "Membership",
        url: "/category/membership",
    },
    {
        display: "Photography",
        url: "/category/photography",
    },
];

/**
 * @Header
 * @return {JSX.Element}
 */
function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const connectWithMetaMask = useMetamask();
    const disconnect = useDisconnect();
    const address = useAddress();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    React.useEffect(() => {
        if (address) {
            dispatch(readUserData(address));
        } else {
            dispatch(disconectUser());
        }
    }, [address]);

    return (
        <AppBar position="static" className="header">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Home logo in desktop size */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className="header__logo"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontSize: "2rem",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        NFTs
                    </Typography>

                    {/* Navigation on mobile size */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {NAV__LINKS.map((item) => (
                                <MenuItem
                                    key={item.display}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <NavLink
                                            to={item.url}
                                            className={(navClass) =>
                                                navClass.isActive
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Home icon on mobile size */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        className="header__logo"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontSize: "2rem",
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        NFTs
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                        className="header__nav"
                    >
                        {NAV__LINKS.map((item) => (
                            <NavLink
                                to={item.url}
                                key={item.display}
                                className={(navClass) =>
                                    navClass.isActive ? "active" : ""
                                }
                                style={{ marginRight: "12px" }}
                            >
                                {item.display}
                            </NavLink>
                        ))}
                    </Box>

                    {/* Avatar and profile pagination */}
                    <Box sx={{ flexGrow: 0 }}>
                        {address ? (
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={user.data?.avatar || ava1}
                                    />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <IconButton
                                size="large"
                                aria-label="connect"
                                onClick={connectWithMetaMask}
                            >
                                <AccountBalanceWallet />
                            </IconButton>
                        )}
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <NavLink to={"/profile"}>Profile</NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography
                                    textAlign="center"
                                    onClick={disconnect}
                                >
                                    Disconnect
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
