import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export default function BreadCrumbs({ crumbs }) {
  const router = useRouter();
  const shopItems = router.query.shopItems || [];
  return (
    <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
      <div className="flex">
        <Link className="text-gray-500 hover:text-gray-700" href={"/shop"}>
          Shop /&nbsp;
        </Link>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <Link
              className="text-gray-500 hover:text-gray-700"
              href={`/shop/${shopItems.slice(0, index + 1).join("/")}`}
            >
              {crumb}
            </Link>
            {index !== shopItems.length - 1 && <span className="mx-1">/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
  // <Link href={router.asPath + "/" + slugify(category.title)}>
  //   <span className="absolute inset-0" />
  //   {category.title}
  // </Link>
}
