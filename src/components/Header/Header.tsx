import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import { SavingsOutlined } from "@mui/icons-material";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

// INTERNAL
import "./Header.scss";

const NAV__LINKS = [
    {
        display: "Home",
        url: "/",
    },
    {
        display: "Market",
        url: "/market",
    },
    {
        display: "Create",
        url: "/create",
    },
    {
        display: "Contact",
        url: "/contact",
    },
];

const Header = () => {
    const headerRef = useRef<HTMLInputElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const address = useAddress();

    console.log("address", address);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 8 ||
                document.documentElement.scrollTop > 8
            ) {
                headerRef.current?.classList.add("header__shrink");
            } else {
                headerRef.current?.classList.remove("header__shrink");
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const toggleMenu = () => menuRef.current?.classList.toggle("active__menu");

    return (
        <header className="header" ref={headerRef}>
            <Container className="header__wrapper">
                <div className="header__logo">
                    <Link to="/">
                        <Typography
                            variant="h2"
                            component="h2"
                            style={{
                                display: "flex",
                                gap: 2,
                                alignItems: "center",
                            }}
                        >
                            <span>
                                <SavingsOutlined />
                            </span>
                            NFTs
                        </Typography>
                    </Link>
                </div>

                <div className="header__nav" ref={menuRef} onClick={toggleMenu}>
                    <ul className="header__nav--list">
                        {NAV__LINKS.map((item, index) => (
                            <li className="header__nav--item" key={index}>
                                <NavLink
                                    to={item.url}
                                    className={(navClass: any) =>
                                        navClass.isActive ? "active" : ""
                                    }
                                >
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="header__right">
                    <ConnectWallet />
                </div>
            </Container>
        </header>
    );
};

export default Header;
