// import React from 'react'
// import { Button } from './button'

// const ViewButtton = () => {
//   return (
//     <div>
//         <Button className="text-h5 text-black bg-muted hover:bg-accent mt-12 fon[300] rounded-none py-[24px] leading-none px-[32px]">
//             View Colletion
//         </Button>
//     </div>
//   )
// }

// export default ViewButtton




import React from 'react';
import { Button } from './button';
import Link from 'next/link';

const ViewButtton = () => {
  return (
    <div>
      <Link href="/allproductlist">
      <Button className="text-h5 text-black bg-muted hover:bg-accent mt-5 md:mt-10 font-[300] rounded-none py-[24px] leading-none px-[32px]">
        View Collection
      </Button>
      </Link>
    </div>
  );
};

export default ViewButtton;

