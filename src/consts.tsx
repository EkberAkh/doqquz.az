
import { extendTheme } from "@chakra-ui/react";


// all colors will be dded from here
export const colorObjects = {
    white: {
        main: " rgb(255, 255, 255)"
    },
    black: {
        main: "#333333",
        secondary: "rgb(119, 119, 119)",
    },
    blue: {
        main: "#2a41e8",
        secondary: "#3B8DD4",
        secondaryLight: "#3B8DD41F",
    },
    gray: {
        border: "#0000001F",
        dark: "#E1E1EB",
        light: "#0000005C",
        secondary: "#646466",
    },
    surface: {
        secondary: "#F2F2F7",
        tertiary: "#EBEBF2",
    },
    green: {
        main: "#06A822",
    },
};
export const extendedTheme = extendTheme({
    colors: {
        white: {
            main: " rgb(255, 255, 255)"
        },
        blue: {
            main: "#2058BB",
            mainDark: "#174087",
            secondary: "#3B8DD4",
            secondaryLight: "#3B8DD41F",
            secondaryDark: "#266DAB",
        },
        gray: {
            main: "#F2F2F7",
            secondary: "#646466",
            border: "#0000001F",
            dark: "#E1E1EB",
        },
        black: {
            main: colorObjects.black.main,
            secondary: "#000000A3",
        },
        green: {
            main: "#3C8148",
        },
        warning: {
            main: "#FFA500",
            border: "#FFA5001A",
        },
        purple: {
            main: "#8936B2",
        },
        error: {
            main: "#F32828",
        },
    },
    components: {
        Button: {
            variants: {
                primary: {
                    color: "white",
                    backgroundColor: "blue.main",
                    _hover: {
                        backgroundColor: "blue.mainDark",
                    },
                },
                secondary: {
                    backgroundColor: "blue.secondary",
                    color: "white",
                    _hover: {
                        backgroundColor: "blue.secondaryDark",
                        color: "white",
                    },
                },
                gray: {
                    color: "black.main",
                    backgroundColor: "gray.main",
                    _hover: {
                        backgroundColor: "gray.dark",
                    },
                },
                black: {
                    color: "black.main",
                    _hover: {
                        color: "blue.main",
                    },
                },
                transparent: {
                    bgColor: "transparent",
                    borderRadius: "0",
                    _hover: {},
                    _focus: {},
                    _active: {},
                },
            },
        },
        Text: {
            variants: {
                primary: {
                    color: "black.main",
                    fontWeight: 500,
                },
            },
        },
        Flex: {
            variants: {
                primary: {
                    columnGap: "24px",
                    borderBottom: "1px solid #0000001F",
                    py: "40px",
                    color: "black.secondary",
                },
            },
        },
    },
});







