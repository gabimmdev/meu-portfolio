import { Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/img/Avatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(()=>({
        backgroundColor: "white",
        height: "100vh",
    }))

    const StyledImg = styled("img")(()=>({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg"> {/* container de responsividade p/ tamanhos de tela maiores */}
                <Grid container spacing={2}> {/* espaço dos containers */}
                    {/* xs = responsividade para telas pequenas | md = responsividade para telas médias */}
                    <Grid item xs={12} md={4}> {/* tamanho da tela que ocupa | nesse caso xs = 12 de 12 e md = 4 de 12 */}
                        <StyledImg src={Avatar} alt="Avatar" />
                    </Grid>
                    <Grid item xs={12} md={8}> 
                        {/* primary = tema cor padrão do material UI | vai ser mudado depois. */}
                        <Typography color="primary" variant="h1" textAlign="center">Gabriela Gomes</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">I'm a Front End Developer</Typography>
                        <Grid container display="flex" justifyContent="center">
                            <Grid item xs={12} md={4} display="flex" justifyContent="center"> {/* xs=12 deixa os botões um embaixo do outro |  md=4 deixa os botões um ao lado do outro */}
                                <Button>
                                    <DownloadIcon />  {/* icone escolhido do material UI */}
                                    Upload CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Button>
                                    <EmailIcon /> {/* icone escolhido do material UI */}
                                    Contact me
                                </Button>     
                            </Grid>
                        </Grid>       
                    </Grid>
                    </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }

  export default Hero
