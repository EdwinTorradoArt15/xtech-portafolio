import Link from "next/link";
import { Reveal } from "../Reveal";

export function CtaDark() {
  return (
    <div className="px-6 my-20 md:mt-36" id="contactanos">
      <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-secondary md:px-16 md:py-12 shadow-dark rounded-3xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="my-8 w-3/4">
            <Reveal>
              <h3 className="text-3xl font-bold text-primary">
                Tienes algún proyecto en mente?
              </h3>
            </Reveal>
            <Reveal>
              <p className="text-primary text-sm mt-1">
                Desarrollamos soluciones tecnológicas a medida para tu empresa,
                desde software hasta estrategias de marketing digital.
              </p>
            </Reveal>
          </div>

          <Link
            href="#"
            className="px-4 py-3 mx-auto rounded-md bg-primary border-2 border-transparent text-secondary font-medium"
          >
            <Reveal>Empieza ahora</Reveal>
          </Link>
        </div>
      </div>
    </div>
  );
}
