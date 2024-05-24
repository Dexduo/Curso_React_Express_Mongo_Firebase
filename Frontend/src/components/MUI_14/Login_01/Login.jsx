import { Container, Box, Typography, TextField, Button, Link } from "@mui/material"

const Login = () => {



    return (
        <>
            <Container
                maxWidth="xs"
            >
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems:"center",
                        marginTop: 8
                    }}
                >
                    <Typography 
                        component="h1"
                        variant="h5"
                    >
                        Login
                    </Typography>
                    <TextField 
                        required
                        margin="normal" 
                        fullWidth
                        autoFocus
                        label="Endereço de e-mail"
                        id="email"
                        name="email"
                        type="email"
                    />
                    <TextField 
                        required
                        margin="normal" 
                        fullWidth
                        label="Senha"
                        id="password"
                        name="password"
                        type="password"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 1,
                            mb: 1
                        }}
                    >
                        Login
                    </Button>

                    <Box
                        sx={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-between",
                            width:"100%"
                        }}
                    >
                        <Link
                            underline="none"
                            href=""
                        >
                            Esqueceu a Senha?
                        </Link>
                        <Link
                            underline="none"
                            href=""
                        >
                            Cadastre-se!
                        </Link>
                    </Box>

                </Box>
            </Container>
        </>
    )
}

export default Login