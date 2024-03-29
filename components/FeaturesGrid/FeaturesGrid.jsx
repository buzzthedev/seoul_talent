import {Container, rem, SimpleGrid, Text, ThemeIcon, Title} from '@mantine/core';
import {IconGauge} from '@tabler/icons-react';
import classes from './FeaturesGrid.module.css';

const MOCKDATA = [
    {
        title: 'Elevate Your Events',
        description:
            'Access a handpicked selection of top-tier DJs\n' +
            'to transform any occasion into an unforgettable celebration',
    },
    {
        title: 'Seamless Booking',
        description:
            'Effortlessly find and book the perfect DJ tailored\n' +
            'to your event\'s style and vibe, ensuring a seamless and personalized experience',
    },
    {
        title: 'Premium Talent',
        description:
            'Discover skilled professionals who bring expertise, energy,\n' +
            'and an incredible playlist to every party or venue, setting the perfect tone',
    },
];

function Feature({title, description}) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                <IconGauge style={{width: rem(18), height: rem(18)}} stroke={3}/>
            </ThemeIcon>
            <Text size="lg" mt="sm" mb={7}>
                {title}
            </Text>
            <Text c="grey" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

function FeaturesGrid() {
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index}/>);

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>The best DJs in United Kingdom</Title>

            <Container size={700} p={0}>
                <Text c="grey" className={classes.description}>
                    Seoul Talent is your premier online platform offering a curated selection of top-tier DJs,
                    tailor-made for
                    creating unforgettable experiences at private parties and venues. Elevating every occasion, our
                    website
                    simplifies the process of hiring skilled DJs who bring the perfect rhythm and vibe to your event
                </Text>
            </Container>

            <SimpleGrid
                mt={60}
                cols={{base: 1, sm: 2, md: 3}}
                spacing={{base: 'xl', md: 50}}
                verticalSpacing={{base: 'xl', md: 50}}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
}

export {FeaturesGrid, MOCKDATA};
