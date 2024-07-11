"use client";
import Image from "next/image";
import values01 from "../../public/values01.png";
import values02 from "../../public/values02.png";

import { BsPatchQuestionFill } from "react-icons/bs";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const values: { title: string; text: string }[] = [
  {
    title: "Posso colocar mais de um pet no plano?",
    text: "Sim, com certeza. Nosso plano foi feito pra atender família de um, dois, três ou múltiplos pets. É só você falar com a gente que faremos o plano perfeito para sua família pet",
  },
  {
    title: "Onde os atendimentos são feitos?",
    text: "Na estrutura hospitalar veterinária do Hospital Veterinário Susi e na rede de clínicas Bicho Pop.",
  },
  {
    title: "O pagamento é feito só no cartão?",
    text: "Não, o pagamento pode ser feito no cartão convencional, no cartão na recorrência (aquele formato que não utiliza o limite do seu cartão) ou também no boleto.",
  },
  {
    title: "Após a contratação já posso começar a usar?",
    text: "É necessário respeitar a carência de cada serviço. Isso mesmo, cada serviço tem sua carência. Por isso quanto antes você contratar, antes já poderá usar, e economizar com a saúde do seu pet.",
  },
  {
    title: "Posso cancelar quando eu quiser?",
    text: "O plano tem fidelidade de um ano, mas nós temos a certeza que você não vai se arrepender de dar esse presente pro seu pet e segurança para o seu bolso.",
  },
  {
    title: "Meu pet é idoso, posso contratar?",
    text: "Com certeza, o plano foi feito para atender a todos os pets, independente da idade. Ops! Todos não, apenas cães e gatos, ainda não atendemos pets silvestres.",
  },
];

const ValuesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-powerblue-dark  bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      >
        <h2
          className="flex items-center justify-center gap-5 text-2xl font-bold text-white md:text-3xl "
          id="Values"
        >
          Ainda está com dúvidas? <BsPatchQuestionFill size={70} />
        </h2>

        <h3>
          Se esse valor ainda não te convenceu e você ainda tem dúvidas, nós
          listamos a baixo as perguntas mais frequentes feitas nas contrações do
          nosso Clube de Vantagens e Plano de Saúde Pet.
        </h3>

        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row">
            <div
              className="mx-auto flex w-full max-w-[80%] flex-col items-center justify-center gap-5 md:flex-col lg:max-w-md lg:pl-8"
              ref={refQuote}
            >
              <Image
                src={values01}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
              <Image
                src={values02}
                alt="Imagem ilustrativa da POWERVET"
                className="aspect-auto h-auto w-full"
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-7 px-8 text-center">
              {values.map((value, index) => (
                <div key={index} className="w-full max-w-3xl">
                  <p className="mx-auto w-[80%] rounded-t-2xl bg-powerblue-light p-2 font-bold text-white md:w-[60%]">
                    {value.title}
                  </p>
                  <p className="rounded-2xl bg-white p-5 text-sm font-light text-black md:text-base xl:text-lg">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
