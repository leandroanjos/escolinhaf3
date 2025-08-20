
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import LogoutButton from "@/components/auth/LogoutButton";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="row-start-1 self-start justify-self-end">
          <LogoutButton />
        </div>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="font-bold text-4xl">Bem-vindo à Escolinha F3</h1>
          <p className="text-lg">
            Aqui você aprende de forma divertida e interativa!
          </p>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Todos os direitos reservados © 2025
        </footer>
      </div>
    </ProtectedRoute>
  );
}
