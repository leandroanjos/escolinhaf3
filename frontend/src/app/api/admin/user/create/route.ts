import { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function POST(request: NextRequest) {
    try {
        // TODO: Adicione autenticação/autorização do admin aqui
        const { email, password } = await request.json();

        if (!email || !password) {
            return Response.json(
                { error: "Email and password required" },
                { status: 400 }
            );
        }

        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
        });

        if (error) {
            return Response.json(
                { error: error.message },
                { status: 400 }
            );
        }

        return Response.json(
            { user: data.user },
            { status: 200 }
        );
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return Response.json(
            { error: "Erro interno do servidor" },
            { status: 500 }
        );
    }
}