import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function BannerInformativo() {
  return (
    <div className="relative isolate overflow-hidden bg-[#0D0D0D] py-16 sm:py-24 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Bookstore</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            Bem-vindo à nossa livraria! Aqui você encontrará uma seleção incrível de livros para todos os gostos e idades. Explore nosso site e descubra os melhores títulos do momento. Nossa equipe está pronta para ajudá-lo a encontrar o que procura. Aproveite sua jornada literária conosco! Equipe BookStore.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}