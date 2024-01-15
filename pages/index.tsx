import {Container, Divider, Flex, Grid, Paper, Stack, Text, Title} from "@mantine/core";
import Image from "next/image";
import {FeaturesGrid} from "../components/FeaturesGrid/FeaturesGrid";
import classes from "../components/FeaturesGrid/FeaturesGrid.module.css";
import Contact from "../components/Contact";
import Link from "next/link";
import {useEffect, useState} from "react";

const images = ['/image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg']; // Replace with your image paths

export default function Page() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === images.length - 1 ? 0 : prevSlide + 1
            );
        }, 3000); // Slide changes every 3000 ms (3 seconds)
        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <>
            <Container size={1200}>
                <Flex my="1rem" justify="space-between">
                    <Image className="logo" src="/logo_white.png" alt="Logo" width="180" height="66"/>
                    <Text component={Link} href="#contact" size="sm">Contact us</Text>
                </Flex>
            </Container>
            <Container>
                <div className="slideshow">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                </div>
                <Container className="background-video">
                    {/*<video playsInline loop muted autoPlay*/}
                    {/*       src="/video.mov"></video>*/}
                </Container>
                <Stack gap="0.2rem" my="8rem">
                    <Text ta="center" c="indigo">Welcome to Seoul Talent</Text>
                    <Title c="indigo" mx="auto" ta="center" size="3rem" maw="46rem">Your Ultimate Destination for Unmatched DJ
                        Experiences</Title>
                </Stack>
            </Container>

            <div className="content">
                <Container size={1200}>
                    <Grid className="djs">
                        <Grid.Col span={{base: 12, sm: 6}}>
                            <Paper shadow="md" p="2rem" bg="dark.7">
                                <Stack gap={0}>
                                    <Image src="/dj1.jpg" alt="DJ 1" width="500" height="250"/>
                                    <Text c="white" mt="0.8rem" fw="bold">Joseph Robinson</Text>
                                    <Text c="dimmed">Event organiser</Text>
                                    <Divider maw="20rem" my="1rem"/>
                                    <Text c="grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                        doloremque
                                        eos in iure, laboriosam modi neque quaerat quas rem temporibus?</Text>
                                </Stack>
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={{base: 12, sm: 6}}>
                            <Paper shadow="md" p="2rem" bg="dark.7">
                                <Stack gap={0}>
                                    <Image src="/dj2.jpg" alt="DJ 1" width="500" height="250"/>
                                    <Text c="white" mt="0.8rem" fw="bold">DJ 9</Text>
                                    <Text c="dimmed">Multi Genre DJ</Text>
                                    <Divider maw="20rem" my="1rem"/>
                                    <Text c="grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                                        doloremque
                                        eos in iure, laboriosam modi neque quaerat quas rem temporibus?</Text>
                                </Stack>
                            </Paper>
                        </Grid.Col>
                    </Grid>

                    <FeaturesGrid/>

                    <Title className={classes.title}>Get in touch</Title>
                    <Container id="contact" pb="6rem" size={800}>
                        <Contact/>
                    </Container>
                </Container>
            </div>

            <Container py="4rem" bg="#3C404F" size="100%">
                <Container size={1200}>
                    <Stack align="center">
                        <Image className="logo" src="/logo_white.png" alt="Logo" width="180" height="66"/>
                        <Text my="0.6rem">booking@seoultalent.co.uk</Text>
                        <Text size="sm" c="dimmed">Copyright Seoul Talent 2024</Text>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}
