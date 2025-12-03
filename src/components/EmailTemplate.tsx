import { Html, Text } from "@react-email/components";

export const EmailTemplate = ({ firstName }: { firstName: string }) => (
    <Html>
        <Text>Hola {firstName}, bienvenido a nuestra plataforma.</Text>
    </Html>
);