import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import { BarChartIcon, LockIcon, RocketIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Bem-vindo ao Nosso Incrível App
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Transforme sua experiência digital com nossa solução inovadora.
                Simples, eficiente e poderosa.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/auth/login">Comece Agora</Link>
              </Button>
              <Button variant="outline">
                <Link href="/pricing">Ver Planos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        id="recurses"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
            Recursos
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="mt-4">
                <BarChartIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-bold">Análises Avançadas</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Obtenha insights profundos com nossas ferramentas de análise
                  de ponta.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="mt-4">
                <LockIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-bold">Segurança Robusta</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Proteja seus dados com nossa segurança de nível empresarial.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="mt-4">
                <RocketIcon className="h-12 w-12 mb-4" />
                <h3 className="text-lg font-bold">Desempenho Otimizado</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experimente velocidade e eficiência incomparáveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
            Depoimentos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="mt-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "Este app revolucionou a maneira como trabalho. Não consigo
                    imaginar minha vida sem ele agora!"
                  </p>
                  <p className="mt-2 font-semibold">- Cliente Satisfeito {i}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pronto para começar?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Junte-se a milhares de usuários satisfeitos e transforme sua
                experiência hoje.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Inscreva-se</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ao se inscrever, você concorda com nossos{" "}
                <Link className="underline underline-offset-2" href="#">
                  Termos & Condições
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
