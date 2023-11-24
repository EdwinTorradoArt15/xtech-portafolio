"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { portafolioData } from "./Portafolio.data";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  link: string;
  img: string;
}

const Portafolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  const newsPorfolio = portafolioData.slice(0, 4);

  return (
    <div className="relative px-6 py-20 md:py-32" id="portafolio">
      <div className="max-w-5xl mx-auto">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Explora Nuestro Portafolio
              </span>
              Descubre cómo transformamos negocios con tecnología innovadora.
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-6">
              Conoce algunos de nuestros proyectos destacados que ilustran
              nuestra experiencia y enfoque innovador.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-secondary font-medium border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondary hover:border-secondary text-primary"
              >
                Ver mas
              </Link>
            </div>
          </Reveal>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-1">
          {newsPorfolio.map(({ id, name, link, img }: Project) => (
            <Reveal key={id}>
              <div
                className="border-2 border-transparent"
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div>
                  <Image src={img} alt={img} width="500" height="500" />
                </div>
                {hoveredIndex === id && (
                  <div className="absolute top-0 left-0 w-full h-full bg-white/80 p-4 text-black border-2 border-transparent hover:border-secondary transition-all duration-300 ease-in-out flex justify-center items-center">
                    <p className="font-semibold text-center">{name}</p>
                    <a
                      href="#"
                      className="absolute bottom-0 left-0 w-full p-4 text-center text-white bg-secondary"
                    >
                      Ver más
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
