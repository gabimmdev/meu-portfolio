import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Typescript", "React", "Next", "Git", "HTML", "CSS", "Material UI", "Figma", "Vite"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Technologist degree</Typography>
                                <Typography textAlign="center">ADS</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                    Olá! Sou Gabriela, graduanda em Análise e Desenvolvimento de Sistemas pela FIAP, com foco e paixão pelo desenvolvimento front-end. <br />
                    Gosto de transformar ideias em interfaces intuitivas e envolventes, criando experiências que realmente fazem a diferença. Tenho experiência 
                    no desenvolvimento de aplicações web e mobile, trabalhando com tecnologias como React, TypeScript, Next.js, Vite e React Native. <br />  Acredito que 
                    um bom código vai além da técnica: colaboração e comunicação eficaz são essenciais para o sucesso de qualquer equipe. Gosto  de contribuir ativamente, 
                    compartilhando conhecimento e ajudando o time a evoluir. <br /> Minha abordagem para resolver problemas é baseada na organização e em processos bem estruturados. 
                    Busco sempre criar um ambiente de trabalho produtivo, transparente e alinhado com os objetivos do projeto.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection