import {Button, Group, Select, SimpleGrid, Stack, Text, Textarea, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useState} from "react";
import axios from 'axios';

export default function Contact() {
    const [statusMessage, setStatusMessage] = useState('');
    const form = useForm({
        initialValues: {
            fname: '',
            lname: '',
            dj: '',
            price: '',
            message: '',
        },
        validate: {
            fname: (value) => value.trim().length < 2,
            lname: (value) => value.trim().length < 2,
            dj: (value) => value.trim().length < 2,
            price: (value) => value.trim().length < 2,
            message: (value) => value.trim().length < 2,
        },
    });

    const handleFormSubmit = (event) => {
        if (!form.validate().hasErrors) {
                event.preventDefault();
                axios.post("/api/contact", { ...form.values })
                    .then(response => {
                        setStatusMessage(response.data.message);
                        form.reset();
                    })
                    .catch(error => {
                        setStatusMessage(error.response.data.message);
                    });
        }
    }

    return (
        <form onSubmit={form.onSubmit(() => {
        })}>
            <SimpleGrid cols={{base: 1, sm: 3}} mt="xl">
                <TextInput
                    label="First Name"
                    placeholder="Your first name"
                    {...form.getInputProps('fname')}
                />
                <TextInput
                    label="Last Name"
                    placeholder="Your last name"
                    {...form.getInputProps('lname')}
                />
                <Select
                    label="DJ"
                    data={["DJ 9", "DJ DL"]}
                    placeholder="Select DJ"
                    {...form.getInputProps('dj')}
                />
            </SimpleGrid>

            <Select
                label="Price"
                data={["£125"]}
                placeholder="Select price"
                mt="md"
                {...form.getInputProps('price')}
            />
            <Textarea
                mt="md"
                label="Message"
                placeholder="Your message"
                maxRows={10}
                minRows={5}
                autosize
                {...form.getInputProps('message')}
            />

            <Stack align="center" mt="xl">
                <Button onClick={handleFormSubmit} color="indigo" type="submit" size="md">
                    Send message
                </Button>
                <Text c="black">{statusMessage}</Text>
            </Stack>
        </form>
    );
}