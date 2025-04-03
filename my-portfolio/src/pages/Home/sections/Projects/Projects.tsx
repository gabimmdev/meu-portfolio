import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import "../../../../assets/images/project-blue.png";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Blue Ocean",
            subtitle: "May 2024 - Feb 2025",
            srcImg: "../../../../assets/images/project-blue.png",
            description: "O projeto Blue Ocean é um site informativo desenvolvido para conscientizar sobre os impactos da poluição marinha e incentivar ações para a preservação dos oceanos. Ele utiliza HTML, CSS e JavaScript para oferecer uma experiência visual e interativa. O design do site é aprimorado com imagens temáticas.",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://blueoceann.netlify.app/",
            codeURL: "https://github.com/gabimmdev/Project-BlueOcean.git",
        },
        
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection