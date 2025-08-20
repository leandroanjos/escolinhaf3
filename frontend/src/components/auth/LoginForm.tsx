"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Button,
    Input,
    Heading,
    Field,
    Fieldset,
    VStack,
    Container
} from "@chakra-ui/react";
import { toaster } from "../ui/toaster";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const success = await login(email, password);
            if (success) {
                toaster.create({
                    title: "Login realizado com sucesso!",
                    type: "success",
                    duration: 3000,
                });
                router.push("/");
            } else {
                setError("Credenciais inválidas");
            }
        } catch (err) {
            setError("Erro de conexão");
        }
        setLoading(false);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100vh"
            width="100%"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                display="flex"
                flexDirection="column"
                gap={4}
                width={{ base: "100%", md: "33.333333%" }}
                border="1px solid"
                bg="white"
                shadow="lg"
                borderRadius="lg"
                p={4}
            >
                <Heading as="h2" textAlign="center">
                    Login
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Fieldset.Root display="flex" flexDirection="column">
                        <Fieldset.Legend as="h3">Dados de acesso</Fieldset.Legend>
                        <Fieldset.Content>
                            <Field.Root>
                                <Field.Label htmlFor="email">E-mail</Field.Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                />
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="password">Senha</Field.Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                                {error && <Field.ErrorText>{error}</Field.ErrorText>}
                            </Field.Root>
                        </Fieldset.Content>
                    </Fieldset.Root>

                    <Box display="flex" justifyContent="center" m={4}>
                        <Button
                            type="submit"
                            colorScheme="blue"
                            loading={loading}
                            width="40"
                        >
                            Entrar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}
