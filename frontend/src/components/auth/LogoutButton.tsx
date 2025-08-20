"use client";
import { Button } from "@chakra-ui/react";
import { useAuth } from "@/contexts/AuthContext";

export default function LogoutButton() {
    const { logout, user } = useAuth();

    if (!user) return null;

    return (
        <Button onClick={logout} colorScheme="red" variant="outline" size="sm">
            Sair
        </Button>
    );
}
