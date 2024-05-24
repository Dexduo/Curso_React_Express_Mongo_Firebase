import {AppBar, Container, Toolbar, Typography, Box, Button} from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"

const MyMenu = () => {

    return(
        <>
            <AppBar
                position="static"
            >
                <Container>
                    <Toolbar>
                        <AdbIcon 
                            sx={{
                                display:{xs:"none", md:"flex"},
                                mr:"1"
                            }}
                        />
                        <Typography
                            variant="h4"
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: "none",
                                color:"white",
                                fontFamily: "monospace",
                                letterSpacing: ".3rem",
                                fontWeight: "800"
                            }}
                        >
                            CRUD_V0
                        </Typography>

                        <Box
                            sx={{
                                ml: 3,
                                width: "100%",
                                display: "flex",
                                justifyContent: "end", //ou flexDirection: "row-reverse"
                                // display:{xs:"none", md:"flex"}
                            }}
                        >
                            <Button
                                sx={{
                                    color: "white",
                                    my: 2
                                }}
                            >
                                Professores
                            </Button>
                            <Button
                                sx={{
                                    color: "white",
                                    my: 2
                                }}
                            >
                                Alunos
                            </Button>
                            <Button
                                sx={{
                                    color: "white",
                                    my: 2
                                }}
                            >
                                Sobre
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default MyMenu