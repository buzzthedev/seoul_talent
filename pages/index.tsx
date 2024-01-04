import {Container, Divider, Flex, Grid, Paper, Stack, Text, Title} from "@mantine/core";
import Image from "next/image";
import {FeaturesGrid} from "../components/FeaturesGrid/FeaturesGrid";

export default function Page() {
    return (
        <Container size={1200}>
            <Flex my="1rem" justify="space-between">
                <Image className="logo" src="/seoul_logo.png" alt="Logo" width="180" height="66" />
                <Text size="sm">Contact us</Text>
            </Flex>
            <Container>
                <Container className="background-video">
                    <video playsInline loop muted autoPlay
                           src="/video.mov"></video>
                </Container>
                <Grid pos="relative" align="center">
                    <Grid.Col span={{base: 12, sm: 6}}>
                        <Stack gap="0.2rem" my="8rem">
                            <Text c="indigo">Welcome to Seoul Talent</Text>
                            <Title size="3rem" maw="46rem">Your Ultimate Destination for Unmatched DJ Experiences</Title>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, sm: 6}}>
                        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/oKC_IhGax2I?si=bFfe9lXuf4QPPW8V?autoplay=1&loop=1&controls=0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Grid.Col>
                </Grid>
            </Container>

            <Grid className="djs">
                <Grid.Col span={{base: 12, sm: 6}}>
                    <Paper p="1rem" bg="none">
                        <Stack gap={0}>
                            <Image src="/dj1.jpg" alt="DJ 1" width="500" height="250"/>
                            <Text mt="0.8rem" fw="bold">DJ Ralph</Text>
                            <Text c="dimmed">A short description about the DJ</Text>
                            <Divider maw="20rem" my="1rem"/>
                            <Text c="grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloremque
                                eos in iure, laboriosam modi neque quaerat quas rem temporibus?</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, sm: 6}}>
                    <Paper p="1rem" bg="none">
                        <Stack gap={0}>
                            <Image src="/dj2.jpg" alt="DJ 1" width="500" height="250"/>
                            <Text mt="0.8rem" fw="bold">DJ Louis</Text>
                            <Text c="dimmed">A short description about the DJ</Text>
                            <Divider maw="20rem" my="1rem"/>
                            <Text c="grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloremque
                                eos in iure, laboriosam modi neque quaerat quas rem temporibus?</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>

            <FeaturesGrid/>
        </Container>
    );
}
