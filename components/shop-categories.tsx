// import { useState } from "react";
// import { Dialog, Popover } from "@headlessui/react";
// export default function Categories() {
//   let [isOpen, setIsOpen] = useState(true);
//   return (
//     <>
//       {categories.map((category) => (
//         <>
//         <h1>{category.parentIds == null && category.title}</h1>
//         <PlaceTree key={category.id} parentId={category.id}></PlaceTree>
//         </>
//       ))}
//     </>
//   );
// }

// function PlaceTree({ id, parentId }: any) {
//   const subCategories = categories.map((category) => {})
//   return (
//     <>
//     <li>
//       {place.title}
//       {childIds.length > 0 && (
//         <ol className="list-decimal list-inside ml-5">
//           {childIds.map((childId: any) => (
//             <PlaceTree key={childId} id={childId} placesById={placesById} />
//           ))}
//         </ol>
//       )}
//     </li>
//       </>
//   );
// }

import React from "react";
const categories = [
  {
    id: 0,
    title: "Eco pennen",
    parentIds: [null],
  },
  {
    id: 1,
    title: "Eco potloden",
    parentIds: [null],
  },
  {
    id: 2,
    title: "Sleutelhangers",
    parentIds: [null],
  },
  {
    id: 3,
    title: "Houten",
    parentIds: [0],
  },
  {
    id: 4,
    title: "Gerecycled papier",
    parentIds: [0],
  },
  {
    id: 5,
    title: "Gerecycled plastic",
    parentIds: [0],
  },
  {
    id: 6,
    title: "Bio plastic",
    parentIds: [0],
  },
  {
    id: 7,
    title: "Potloden",
    parentIds: [1],
  },
  {
    id: 8,
    title: "Fantasie potloden",
    parentIds: [1],
  },
  {
    id: 9,
    title: "Kleurpotloden",
    parentIds: [1],
  },
  {
    id: 10,
    title: "Fantasie kleurpotloden",
    parentIds: [1],
  },
  {
    id: 11,
    title: "Vulpotloden",
    parentIds: [1],
  },
  {
    id: 12,
    title: "Houten sleutelhangers",
    parentIds: [2],
  },
  {
    id: 13,
    title: "Gerecycled metalen sleutelhangers",
    parentIds: [2, 0],
  },
];

function buildTree(categories: any, parentId = null) {

  const children = categories.filter((item: any) => item.parentIds.includes(parentId));
  if (children.length === 0) {
    return null
  }
  return (
    <ul className="list-decimal ml-5">
      {children.map((child: any) => (
        <li key={child.id}>
          {child.title}
          {buildTree(categories, child.id)}
        </li>
      ))}
    </ul>
  );
}

function NavigationMenu() {
  return <nav>{buildTree(categories)}</nav>;
}

export default NavigationMenu;