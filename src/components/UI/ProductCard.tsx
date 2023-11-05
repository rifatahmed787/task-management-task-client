// import { Icon } from "@iconify/react";
// import React from "react";
// import bestSel from "../assets/icon/bestSell.png";
// import newProductIndicator from "../assets/icon/newProduct.png";
// import soldOut from "../assets/icon/sold-out.png";
// import Image from "next/image";

// const ProductCard = ({ singleProduct}) => {

//   const { name, image, price, rating,quantity,bestSelling, newProduct } = singleProduct;

//   return (
//     <>
//       <div className="group h-fit w-full">
//         <div className="relative overflow-hidden">
//           <Image
//           width={undefined}
//             className={`h-52 w-full object-cover duration-300 group-hover:scale-110 group-hover:opacity-80 ${quantity === 0 ? 'grayscale blur-sm' : ''} `}
//             src={image}
//             alt="..."
//           />
//           <div className="absolute -bottom-10 flex w-full transition-all duration-300 group-hover:bottom-0 ">
//             <button className="w-full bg-black px-5 py-2 text-white">
//               Add to cart
//             </button>
//           </div>
//           {
//             quantity===0 ? <div className="absolute -left-1 -top-1">
//             <Image width={undefined} src={soldOut} className="w-12 -rotate-90" alt="" />
//           </div> :""
//           }

//           {
//             bestSelling ? <div className="absolute -left-1 bottom-7">
//             <Image width={undefined} src={bestSel} className="w-20" alt="" />
//           </div> :""
//           }

//           {
//             newProduct=== true ? <div className="absolute left-1 top-1">
//             <Image width={undefined} src={newProductIndicator} className="w-20" alt="" />
//           </div> :""
//           }

//           <div className="absolute right-2 top-3">
//             <Icon
//               icon="mdi:heart-outline"
//               className="cursor-pointer rounded-full bg-[#ececec] p-1 hover:text-gray-500"
//               width={25}
//             />
//             <Icon
//               icon="iconamoon:restart-fill"
//               className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-200 hover:text-gray-500 group-hover:translate-x-0"
//               width={25}
//             />

//            <Icon

//               icon="basil:eye-outline"
//               className="my-2 translate-x-10 cursor-pointer rounded-full bg-[#ececec] p-1 duration-300 hover:text-gray-500 group-hover:translate-x-0"
//               width={25}
//             />

//           </div>
//         </div>
//         <div className="mt-3">

//             <h2 className="text-lg capitalize" title={name}>{name.length >= 19 ? name.slice(0, 20)+'...' : name}</h2>

//         </div>

//         <div className="flex justify-between">
//           <div className="">
//             <del className="text-sm text-red-700">$49</del>
//             <p className="ml-1 mt-2 inline-block text-sm text-gray-700">
//               ${price}
//             </p>
//           </div>
//           <Rating rating={rating} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;
