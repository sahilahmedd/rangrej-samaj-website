// // components/ResponsiveTabHeader.tsx
// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';

// interface Tab {
//   label: string;
//   value: string;
// }

// interface ResponsiveTabHeaderProps {
//   tabs: Tab[];
//   activeTab: string;
//   onTabChange: (value: string) => void;
// }

// const ResponsiveTabHeader: React.FC<ResponsiveTabHeaderProps> = ({ tabs, activeTab, onTabChange }) => {
//   const [emblaRef] = useEmblaCarousel({ dragFree: true });

//   return (
//     <div>
//       {/* Embla Carousel for small screens */}
//       <div className="block sm:hidden">
//         <div className="overflow-hidden" ref={emblaRef}>
//           <div className="flex">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.value}
//                 onClick={() => onTabChange(tab.value)}
//                 className={`flex-shrink-0 px-4 py-2 m-2 rounded ${
//                   activeTab === tab.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Standard tab layout for larger screens */}
//       <div className="hidden sm:flex justify-center space-x-4 mt-4">
//         {tabs.map((tab) => (
//           <button
//             key={tab.value}
//             onClick={() => onTabChange(tab.value)}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab.value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResponsiveTabHeader;


// components/ResponsiveTabHeader.tsx
'use client'

import useEmblaCarousel from 'embla-carousel-react'

interface Tab {
  label: string
  value: string
}

interface Props {
  tabs: Tab[]
  activeTab: string
  onTabChange: (value: string) => void
}

export default function ResponsiveTabHeader({ tabs, activeTab, onTabChange }: Props) {
  const [emblaRef] = useEmblaCarousel({ dragFree: true })

  return (
    <>
      {/* Mobile: Embla carousel */}
      <div className="sm:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-2 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => onTabChange(tab.value)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm transition-all ${
                  activeTab === tab.value
                    ? 'bg-[#0A2528] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Hide this */}
      <div className="hidden sm:block h-0 w-0 overflow-hidden" aria-hidden />
    </>
  )
}
