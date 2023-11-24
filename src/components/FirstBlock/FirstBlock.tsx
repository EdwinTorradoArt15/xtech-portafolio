"use client";
import Link from "next/link";
/* import { BackgroundRadialRight } from "../BackgroundRadialRight" */
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export const FirstBlock = () => {
  return (
    <div className="relative p-4 md:py-32">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              Desarrollamos
              <span className="block degradedBlue bg-blueLight">
                soluciones digitales
              </span>
              a medida para tu negocio
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Nuestro equipo de expertos utiliza una metodología para
              identificar las soluciones tecnológicas que se adapten mejor a tus
              necesidades. Examinamos tecnologías emergentes, costos y
              beneficios.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-secondary font-medium border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondary hover:border-secondary text-primary"
              >
                Empieza ahora
              </Link>
            </div>
          </Reveal>
        </div>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src="/assets/ImageFirsts.png"
            alt="Card"
            width={450}
            height={450}
            className="h-auto w-72 md:w-full"
          />
        </MotionTransition>
      </div>
    </div>
  );
};
