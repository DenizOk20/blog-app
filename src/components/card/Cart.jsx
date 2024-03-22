import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cart = ({ key, item }) => {
  return (
    <div
      className="h-[70vh] lg:h-[40vh] flex flex-col lg:flex-row gap-4 lg:gap-8"
      key={key}
    >
      {item.img && (
        <div className="relative h-[40%] md:h-[100%] w-full lg:max-w-[60%]">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}

      <div className="flex flex-col justify-between gap-8">
        <div className="flex gap-2 w-full">
          <span>{item.createdAt.substring(0, 10)} -</span>
          <span className="text-red-400">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`} className="font-bold text-xl">
          {item.title}
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link
          href={`/posts/${item.slug}`}
          className="text-left py-2 underline underline-offset-2 decoration-red-400"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Cart;
