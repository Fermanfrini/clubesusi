// "use client";
// import { Button, Divider } from "@nextui-org/react";
// import { TbShieldCheck } from "react-icons/tb";
// import { HiChevronDoubleDown } from "react-icons/hi2";

// import { motion } from "framer-motion";
// import { fadeIn } from "../../animation/variants";
// import { useInView } from "react-intersection-observer";
// import Link from "next/link";




// const plansBronze: { title: string; text: string }[] = [
//   {
//     title: "Consultas de Rotina Ilimitadas",
//     text: "Agende consultas de rotina sem custos adicionais, garantindo que seu pet receba atenção preventiva regular.",
//   },
//   {
//     title: "Vacinação Completa",
//     text: "Todas as vacinas essenciais estão incluídas, protegendo seu pet contra doenças todas as doenças mais comuns.",
//   },
 
// ];

// const plansPrata: { title: string; text: string }[] = [
//   {
//     title: "Consultas de Rotina Ilimitadas",
//     text: "Agende consultas de rotina sem custos adicionais, garantindo que seu pet receba atenção preventiva regular.",
//   },
//   {
//     title: "Vacinação Completa",
//     text: "Todas as vacinas essenciais estão incluídas, protegendo seu pet contra doenças todas as doenças mais comuns.",
//   },
  
// ];

// const plansOuro: { title: string; text: string }[] = [
//   {
//     title: "Consultas de Rotina Ilimitadas",
//     text: "Agende consultas de rotina sem custos adicionais, garantindo que seu pet receba atenção preventiva regular.",
//   },
//   {
//     title: "Vacinação Completa",
//     text: "Todas as vacinas essenciais estão incluídas, protegendo seu pet contra doenças todas as doenças mais comuns.",
//   },
// ];

// const plansDiamante: { title: string; text: string }[] = [
//   {
//     title: "Consultas de Rotina Ilimitadas",
//     text: "Agende consultas de rotina sem custos adicionais, garantindo que seu pet receba atenção preventiva regular.",
//   },
//   {
//     title: "Vacinação Completa",
//     text: "Todas as vacinas essenciais estão incluídas, protegendo seu pet contra doenças todas as doenças mais comuns.",
//   },
  
// ];


// const PlansSection = () => {
//   const [ref, inView] = useInView({ triggerOnce: false });
//   const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

//   return (
//     <section
//       className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/plansbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
//       id="Plans"
//       ref={ref}
//     >
//       <motion.div
//         variants={fadeIn("up", 0)}
//         initial="hidden"
//         animate={inView ? "show" : "hidden"}
//         exit="hidden"
//         className="relative mx-auto flex  w-full flex-col items-center justify-center gap-10  bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
//       >
//         <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 p-5 text-center text-white xl:max-w-[1380px]">
//           <h4 className="flex items-center justify-center gap-5 text-xl font-bold uppercase lg:text-2xl">
//             Invista na saúde e felicidade do seu companheiro
//           </h4>
//           <p className="text-sm font-light md:text-base xl:text-lg">
//             Planos de assinatura que proporcionam uma abordagem abrangente para
//             garantir que seu companheiro peludo receba cuidados essenciais.
//           </p>

//           <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            

//           <div className="flex flex-col items-center justify-center">
//               <span className="w-1/2 rounded-t-2xl bg-powerblue-bronze p-2 font-bold">
//                 Plano Bronze
//               </span>

//               <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
//                 {plansBronze.map((pro, index) => (
//                   <div key={index}>
//                     <h4 className="font-bold">{pro.title}</h4>
//                     <p className="text-sm font-light">{pro.text}</p>
//                     <Divider className="mt-3" />
//                   </div>
//                 ))}
               
//                 <span className="w-full text-3xl font-bold">R$39,90/mês</span>
//                 <Button
//                   as={Link}
//                   target="_blank"
//                   href="https://app.vindi.com.br/customer/pages/cdfcc8ac-5679-4a43-a182-d25d83775a93/subscriptions/new"
//                   className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                   color="primary"
//                 >
//                   CONTRATAR AGORA
//                 </Button>
//               </div>

//               <Button
//                 className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                 color="primary"
              
//                   target="_blank"
//                 endContent={<HiChevronDoubleDown size={30} className="ml-2" />}
//               >
//                <Link  href="https://drive.google.com/file/d/1eDBWh39WttnlNFWkQ0IsX25dQt2j7e9I/view?usp=drive_link"> CONFERIR COBERTURAS
//                 </Link>
//               </Button>
//             </div>
//             <div className="flex flex-col items-center justify-center">
//               <span className="w-1/2 rounded-t-2xl bg-powerblue-prata p-2 font-bold">
//                Plano Prata
//               </span>

//               <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
//                 {plansPrata.map((pro, index) => (
//                   <div key={index}>
//                     <h4 className="font-bold">{pro.title}</h4>
//                     <p className="text-sm font-light">{pro.text}</p>
//                     <Divider className="mt-3" />
//                   </div>
//                 ))}
                
//                 <span className="w-full text-3xl font-bold">R$79,90/mês</span>
//                 <Button
//                   as={Link}
//                   target="_blank"
//                   href="https://app.vindi.com.br/customer/pages/feca79f2-8951-4758-bc1c-1e023d2eabae/subscriptions/new"
//                   className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                   color="primary"
//                 >
//                   CONTRATAR AGORA
//                 </Button>
//               </div>

//               <Button
//                 className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                 color="primary"
              
//                   target="_blank"
//                 endContent={<HiChevronDoubleDown size={30} className="ml-2" />}
//               >
//                <Link  href="https://drive.google.com/file/d/11SWLe73fsCnLCqZ729CrfIn8cnelUoOx/view"> CONFERIR COBERTURAS
//                 </Link>
//               </Button>
//             </div>
//             <div className="flex flex-col items-center justify-center">
//               <span className="w-1/2 rounded-t-2xl bg-powerblue-ouro p-2 font-bold">
//                 Plano Ouro
//               </span>

//               <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
//                 {plansOuro.map((pro, index) => (
//                   <div key={index}>
//                     <h4 className="font-bold">{pro.title}</h4>
//                     <p className="text-sm font-light">{pro.text}</p>
//                     <Divider className="mt-3" />
//                   </div>
//                 ))}
//                 <span className="w-full text-3xl font-bold">R$99,90/mês</span>
//                 <Button
//                   as={Link}
//                   target="_blank"
//                   href="https://app.vindi.com.br/customer/pages/9b7212f0-35c6-43e6-bd38-dee33b11b4a0/subscriptions/new"
//                   className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                   color="primary"
//                 >
//                   CONTRATAR AGORA
//                 </Button>
//               </div>

//               <Button
//                 className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                 color="primary"
              
//                   target="_blank"
//                 endContent={<HiChevronDoubleDown size={30} className="ml-2" />}
//               >
//                <Link  href="https://drive.google.com/file/d/17SS1ctsIyIFW36dcZoGeaITKa_0ohyqz/view?usp=drive_link"> CONFERIR COBERTURAS
//                 </Link>
//               </Button>
//             </div>
//             <div className="flex flex-col items-center justify-center">
//               <span className="w-1/2 rounded-t-2xl bg-powerblue-diamante p-2 font-bold">
//                 Plano Diamante
//               </span>

//               <div className="flex min-h-[30rem] w-full max-w-sm flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
//                 {plansDiamante.map((pro, index) => (
//                   <div key={index}>
//                     <h4 className="font-bold">{pro.title}</h4>
//                     <p className="text-sm font-light">{pro.text}</p>
//                     <Divider className="mt-3" />
//                   </div>
//                 ))}
//                 <span className="w-full text-3xl font-bold">R$129,90/mês</span>
//                 <Button
//                   as={Link}
//                   target="_blank"
//                   href="https://app.vindi.com.br/customer/pages/010b2c8a-2409-4c14-a501-219faad12757/subscriptions/new"
//                   className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                   color="primary"
//                 >
//                   CONTRATAR AGORA
//                 </Button>
//               </div>
              

//               <Button
//                 className="mt-5 h-14 w-full text-base font-medium uppercase text-white"
//                 color="primary"
              
//                   target="_blank"
//                 endContent={<HiChevronDoubleDown size={30} className="ml-2" />}
//               >
//                <Link  href="https://drive.google.com/file/d/1j1qChiPh6CMM8xK1_LuxFjI19Chr0moX/view?usp=drive_link"> CONFERIR COBERTURAS
//                 </Link>
//               </Button>


//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default PlansSection;







"use client";

import { Button, Divider } from "@nextui-org/react";
import { TbShieldCheck } from "react-icons/tb";
import { HiChevronDoubleDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FC } from "react";

interface PlanItem {
  name: string;
  coverage: string;
  quantityPerYear: string;
  waitingPeriod: string;
}

interface Plan {
  title: string;
  items: PlanItem[];
}

const plans: { [key: string]: Plan[] } = {
  bronze: [
    {
      title: "Serviços",
      items: [
        { name: "Consulta em horário comercial", coverage: "30%", quantityPerYear: "Interminadas", waitingPeriod: "0 dias" },
        { name: "Consultas plantão", coverage: "20%", quantityPerYear: "Interminadas", waitingPeriod: "30 dias" },
        { name: "Check Up (horário comercial)", coverage: "30%", quantityPerYear: "Interminadas", waitingPeriod: "30 dias" },
        { name: "Check Up (plantão)", coverage: "30%", quantityPerYear: "Interminadas", waitingPeriod: "30 dias" },
        { name: "Vacina Múltipla", coverage: "15%", quantityPerYear: "Interminadas", waitingPeriod: "30 dias" },
        { name: "Vacina Raiva", coverage: "15%", quantityPerYear: "Interminadas", waitingPeriod: "30 dias" },
        { name: "Internação", coverage: "15%", quantityPerYear: "Interminadas", waitingPeriod: "30 dias" },
      ],
    },
  ],
  prata: [
    {
      title: "Serviços",
      items: [
        { name: "Consulta em horário comercial", coverage: "100%", quantityPerYear: "04", waitingPeriod: "30 dias" },
        { name: "Consultas plantão", coverage: "100%", quantityPerYear: "01", waitingPeriod: "60 dias" },
        { name: "Check Up (horário comercial)", coverage: "100%", quantityPerYear: "04", waitingPeriod: "30 dias" },
        { name: "Check Up (plantão)", coverage: "100%", quantityPerYear: "01", waitingPeriod: "60 dias" },
        { name: "Vacina Múltipla", coverage: "100%", quantityPerYear: "01", waitingPeriod: "30 dias" },
        { name: "Vacina Raiva", coverage: "100%", quantityPerYear: "01", waitingPeriod: "30 dias" },
        { name: "Internação", coverage: "100%", quantityPerYear: "04", waitingPeriod: "90 dias" },
      ],
    },
  ],
  ouro: [
    {
      title: "Serviços",
      items: [
        { name: "Consulta em horário comercial", coverage: "100%", quantityPerYear: "08", waitingPeriod: "30 dias" },
        { name: "Consultas plantão", coverage: "100%", quantityPerYear: "02", waitingPeriod: "60 dias" },
        { name: "Check Up (horário comercial)", coverage: "100%", quantityPerYear: "08", waitingPeriod: "30 dias" },
        { name: "Check Up (plantão)", coverage: "100%", quantityPerYear: "02", waitingPeriod: "60 dias" },
        { name: "Vacina Múltipla", coverage: "100%", quantityPerYear: "02", waitingPeriod: "30 dias" },
        { name: "Vacina Raiva", coverage: "100%", quantityPerYear: "02", waitingPeriod: "30 dias" },
        { name: "Internação", coverage: "100%", quantityPerYear: "08", waitingPeriod: "90 dias" },
      ],
    },
  ],
  diamante: [
    {
      title: "Serviços",
      items: [
        { name: "Consulta em horário comercial", coverage: "100%", quantityPerYear: "12", waitingPeriod: "0 dias" },
        { name: "Consultas plantão", coverage: "100%", quantityPerYear: "04", waitingPeriod: "60 dias" },
        { name: "Check Up (horário comercial)", coverage: "100%", quantityPerYear: "12", waitingPeriod: "30 dias" },
        { name: "Check Up (plantão)", coverage: "100%", quantityPerYear: "04", waitingPeriod: "60 dias" },
        { name: "Vacina Múltipla", coverage: "100%", quantityPerYear: "04", waitingPeriod: "30 dias" },
        { name: "Vacina Raiva", coverage: "100%", quantityPerYear: "04", waitingPeriod: "30 dias" },
        { name: "Internação", coverage: "100%", quantityPerYear: "12", waitingPeriod: "90 dias" },
      ],
    },
  ],
};

const PlanCard: FC<{ plan: Plan; price: string; link: string; downloadLink: string; color: string; planName: string }> = ({ plan, price, link, downloadLink, color, planName }) => (
  <div className="flex flex-col items-center justify-center w-full p-10 ">
    <span className={`w-1/2 rounded-t-2xl bg- bg-powerblue-${color} p-2 font-bold`}>
      Plano {planName}
    </span>
    <div className="flex min-h-[30rem]  flex-col items-center justify-center gap-4 rounded-t-2xl bg-white p-8 text-black">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px2 py-2 border-b-2">Serviço</th>
            <th className="px-2 py-2 border-b-2">Cobertura</th>
            <th className="px-2 py-2 border-b-2">Quantidade por Ano</th>
            <th className="px-2 py-2 border-b-2">Período de Carência</th>
          </tr>
        </thead>
        <tbody>
          {plan.items.map((item, index) => (
            <tr key={index}>
              <td className="px-2 py-2 border-b">{item.name}</td>
              <td className="px-2 py-2 border-b">{item.coverage}</td>
              <td className="px-2 py-2 border-b">{item.quantityPerYear}</td>
              <td className="px-2 py-2 border-b">{item.waitingPeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>A partir</span>
      <span className="w-full text-4xl font-bold">{price}</span>
      <span>Cobertura para até 4 Pets</span>
      <Button
        as={Link}
        target="_blank"
        href={link}
        className="mt-2 h-14 w-full text-base font-medium uppercase text-white"
        color="primary"
      >
        CONTRATAR AGORA
      </Button>
     
      <Link href={downloadLink} target="_blank">Conferir todas as coberturas</Link>
    
    </div>
  </div>
);

const PlansSection: FC = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <section
      className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 bg-powerblue-dark bg-[url('/plansbg.png')] bg-cover bg-center bg-no-repeat py-5 md:py-16 3xl:max-w-[1580px] 3xl:rounded-2xl"
      id="Plans"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="relative mx-auto flex w-full flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat py-5 md:py-16 2xl:max-w-[1580px] 3xl:rounded-2xl"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 p-5 text-center text-white xl:max-w-[1380px]">
          <h4 className="flex items-center justify-center gap-5 text-xl font-bold uppercase lg:text-2xl">
            Invista na saúde e felicidade do seu companheiro
          </h4>
          <p className="text-sm font-light md:text-base xl:text-lg">
          Economize e tenha o melhor tratamento para o seu Pet. Tudo em um só plano!
          </p>

          <div className="grid w-full grid-cols-1 gap-6 pt-5 md:grid-cols-2 lg:grid-cols-">
            {Object.keys(plans).map((key) => {
              const plan = plans[key][0];
              let price = "";
              let link = "";
              let downloadLink = "";
              let color = "";
              let planName = "";

              switch (key) {
                case "bronze":
                  price = "R$ 49,90/mês";
                  link = "https://app.vindi.com.br/customer/pages/cdfcc8ac-5679-4a43-a182-d25d83775a93/subscriptions/new";
                  downloadLink ="https://drive.google.com/file/d/1t5OxY1bltxwNzYsH9ZdOEpFd-eNacrk9/view";
                  color = "bronze";
                  planName = "Bronze";
                  break;
                case "prata":
                  price = "R$ 79,90/mês";
                  link = "https://app.vindi.com.br/customer/pages/feca79f2-8951-4758-bc1c-1e023d2eabae/subscriptions/new";
                  downloadLink = "https://drive.google.com/file/d/1z-PSIfDulTsUzHtqUQSORRpwYEv7wAIE/view";
                  color = "prata";
                  planName = "Prata";
                  break;
                case "ouro":
                  price = "R$ 109,90/mês";
                  link = "https://app.vindi.com.br/customer/pages/9b7212f0-35c6-43e6-bd38-dee33b11b4a0/subscriptions/new";
                  downloadLink = "https://drive.google.com/file/d/1hvk8PLm_t11BApRUw3-tvHkyq56PXXNM/view";
                  color = "ouro";
                  planName = "Ouro";
                  break;
                case "diamante":
                  price = "R$ 159,90/mês";
                  link = "https://app.vindi.com.br/customer/pages/010b2c8a-2409-4c14-a501-219faad12757/subscriptions/new";
                  downloadLink = "https://drive.google.com/file/d/1Iy5iSp-w2z6qc97NAAsRqEAZAXZMkH46/view";
                  color = "diamante";
                  planName = "Diamante";
                  break;
              }

              return <PlanCard key={key} plan={plan} price={price} link={link} downloadLink={downloadLink} color={color} planName={planName} />;
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlansSection;
