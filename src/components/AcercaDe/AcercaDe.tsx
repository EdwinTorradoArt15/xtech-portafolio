"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { dataFeaturesBusiness } from "./BestBusiness.data";

const AcercaDe = () => {
  return (
    <div className="relative px-6 py-20 md:py-32" id="acerca-de">
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h2 className="text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                Innovamos tu negocio
              </span>
              nosotros gestionamos <br />
              la tecnología
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">
              Con las soluciones digitales adecuadas, puedes transformar tu
              empresa, mejorar la eficiencia y ofrecer experiencias
              excepcionales. Pero con tantas opciones en el mercado, elegir la
              correcta es crucial.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8 flex items-center">
              <Link
                href="#acerca-de"
                className="px-4 py-3 rounded-md bg-secondary font-medium border-2 border-transparent transition-all duration-300 ease-in-out hover:bg-transparent hover:text-secondary hover:border-secondary text-primary"
              >
                Contactanos
              </Link>
              <a
                href="https://www.instagram.com/tu_cuenta_instagram/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <AiOutlineInstagram
                  size={24}
                  className="text-secondary hover:text-blue-500 transition-all duration-300 ease-in-out"
                />
              </a>
              <a
                href="https://wa.me/tu_numero_de_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <AiOutlineWhatsApp
                  size={24}
                  className="text-secondary hover:text-green-500 transition-all duration-300 ease-in-out"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/tu_cuenta_linkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <AiOutlineLinkedin
                  size={24}
                  className="text-secondary hover:text-blue-500 transition-all duration-300 ease-in-out"
                />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-1 py-5 md:p-8">
          {dataFeaturesBusiness.map(
            ({ id, icon: Icon, title, description }) => (
              <Reveal key={id}>
                <div className="flex gap-5 px-4 py-2 rounded-3xl group border-2 border-transparent transition-all duration-300 ease-in-out hover:border-blue-500">
                  <div>
                    <i className="text-secondary text-2xl">
                      <Icon />
                    </i>
                    <h4 className="text-base font-semibold">{title}</h4>
                    <p className="text-sm mt-1">{description}</p>
                  </div>
                </div>
              </Reveal>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;
