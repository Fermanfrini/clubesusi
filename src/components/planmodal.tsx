

// import React, { useState, useEffect } from 'react';
// import { Dialog } from '@headlessui/react';
// import { Button } from '@nextui-org/react';

// interface PlanModalProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
//   planName: string;
// }

// const PlanModal: React.FC<PlanModalProps> = ({ isOpen, setIsOpen, planName }) => {
//   const [selectedCount, setSelectedCount] = useState(1);
//   const [price, setPrice] = useState(10);

//   const handleCountChange = (increment: number) => {
//     setSelectedCount((prevCount) => {
//       const newCount = prevCount + increment;
//       if (newCount > 4) {
//         alert('Você será redirecionado para o WhatsApp.');
//         return prevCount;
//       }
//       return Math.max(newCount, 1);
//     });
//   };

//   useEffect(() => {
//     switch (selectedCount) {
//       case 1:
//         setPrice(10);
//         break;
//       case 2:
//         setPrice(20);
//         break;
//       case 3:
//         setPrice(28);
//         break;
//       case 4:
//         setPrice(45);
//         break;
//       default:
//         setPrice(10);
//     }
//   }, [selectedCount]);

//   const handlePurchase = () => {
//     let link = '';
//     switch (selectedCount) {
//       case 1:
//         link = 'https://www.facebook.com';
//         break;
//       case 2:
//         link = 'https://www.instagram.com';
//         break;
//       case 3:
//         link = 'https://www.linkedin.com';
//         break;
//       case 4:
//         link = 'https://www.twitter.com';
//         break;
//       default:
//         link = 'https://www.facebook.com';
//     }
//     window.location.href = link;
//   };

//   return (
//     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="fixed inset-0 bg-black opacity-30" onClick={() => setIsOpen(false)}></div>

//         <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
//           <Dialog.Title as="h3" className="text-lg font-medium">{planName}</Dialog.Title>

//           <div className="mt-4 flex flex-col items-center">
//             <p className="text-sm">Selecione a quantidade de animais:</p>

//             <div className="flex items-center mt-2">
//               <button onClick={() => handleCountChange(-1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
//               <span className="px-4">{selectedCount}</span>
//               <button onClick={() => handleCountChange(1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
//             </div>

//             <p className="mt-4 text-xl font-bold">Valor: R${price}</p>

//             <div className="mt-4 flex justify-between">
//               <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
//               <Button onClick={handlePurchase}>Comprar</Button>
//             </div>
//           </div>

//           <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setIsOpen(false)}>
//             Fechar
//           </button>
//         </div>
//       </div>
//     </Dialog>
//   );
// };

// export default PlanModal;

import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Button } from '@nextui-org/react';

interface PlanModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  planName: string;
}

const PlanModal: React.FC<PlanModalProps> = ({ isOpen, setIsOpen, planName }) => {
  const [selectedCount, setSelectedCount] = useState(1);
  const [price, setPrice] = useState(10);
  const [links, setLinks] = useState<string[]>([]);
  const [prices, setPrices] = useState<number[]>([]);

  useEffect(() => {
    // Definir os links e os preços com base no nome do plano
    switch (planName) {
      case 'Plano Bronze':
        setLinks(['https://www.facebook.com', 'https://www.instagram.com', 'https://www.linkedin.com', 'https://www.twitter.com']);
        setPrices([10, 20, 28, 45]);
        break;
      case 'Plano Basic':
        setLinks(['https://example.com/basic-link-1', 'https://example.com/basic-link-2', 'https://example.com/basic-link-3', 'https://example.com/basic-link-4']);
        setPrices([15, 25, 30, 50]);
        break;
      // Adicionar casos para outros planos aqui...
      default:
        setLinks(['https://www.facebook.com', 'https://www.instagram.com', 'https://www.linkedin.com', 'https://www.twitter.com']);
        setPrices([10, 20, 28, 45]);
    }
  }, [planName]);

  const handleCountChange = (increment: number) => {
    setSelectedCount((prevCount) => {
      const newCount = prevCount + increment;
      if (newCount > 4) {
        alert('Você será redirecionado para o WhatsApp.');
        return prevCount;
      }
      return Math.max(newCount, 1);
    });
  };

  useEffect(() => {
    // Atualizar o preço com base na quantidade selecionada
    if (selectedCount >= 1 && selectedCount <= 4) {
      setPrice(prices[selectedCount - 1]);
    }
  }, [selectedCount, prices]);

  const handlePurchase = () => {
    // Redirecionar para o link correspondente com base na quantidade selecionada
    const link = links[selectedCount - 1];
    window.location.href = link;
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30" onClick={() => setIsOpen(false)}></div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
          <Dialog.Title as="h3" className="text-lg font-medium">{planName}</Dialog.Title>

          <div className="mt-4 flex flex-col items-center">
            <p className="text-sm">Selecione a quantidade de animais:</p>

            <div className="flex items-center mt-2">
              <button onClick={() => handleCountChange(-1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
              <span className="px-4">{selectedCount}</span>
              <button onClick={() => handleCountChange(1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
            </div>

            <p className="mt-4 text-xl font-bold">Valor: R${price}</p>

            <div className="mt-4 flex justify-between">
              <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
              <Button onClick={handlePurchase}>Comprar</Button>
            </div>
          </div>

          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={() => setIsOpen(false)}>
            Fechar
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default PlanModal;
