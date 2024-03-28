import prisma from "@/utils/connect";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
  const popularPosts = await prisma.post.findMany({
    orderBy: {
      views: "desc",
    },
    include: { user: true },
    take: 5,
  });
  return popularPosts;
};

const getCatData = async () => {
  const res = await fetch("http://localhost:3000//api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Menu = async () => {


  const data = await getData();
  const catData = await getCatData();



  return (
    <div className="lg:w-1/3 p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-gray-600 font-bold text-sm">
            {"What's hot"}
          </span>
          <h2 className="font-bold text-xl">Most Popular</h2>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/posts/${item.slug}`}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-row items-center">
                <div className="relative w-16 h-16 rounded-full flex min-w-[64px]">
                  {item.img && (
                    <Image
                      alt="postImage"
                      src={item.img}
                      fill
                      className="rounded-full"
                    />
                  )}
                </div>
                <div className="flex flex-col px-1 lg:px-2">
                  <span
                    className="px-3 py-[2px] rounded-md max-w-[80px] text-center first-letter:uppercase font-bold text-black"
                    style={{ background: item.color }}
                  >
                    {item.title}
                  </span>
                  <p className="font-medium">{item.desc}</p>
                  <span className="text-sm">
                    {item?.user?.name} -{" "}
                    {item?.createdAt.toLocaleString().substring(0, 10)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-gray-600 font-bold text-sm">
            {"Discover by topic"}
          </span>
          <h2 className="font-bold text-xl">Categories</h2>
        </div>
        <div className="flex flex-wrap gap-1">
          {catData.map((cat) => (
            <Link
              className="p-3 min-w-[80px] text-center font-medium first-letter:uppercase text-black"
              style={{ background: cat.bg }}
              key={cat.id}
              href={`/blog?cat=${cat.title}`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-gray-600 font-bold text-sm">
            {"Chosing by editor"}
          </span>
          <h2 className="font-bold text-xl">Editors Pick</h2>
        </div>
        <div>
          {data.map((item) => (
            <Link href={`/posts/${item.slug}`} key={item.id} className="flex">
              <div className="flex flex-row">
                <div className=" relative flex items-center w-[64px] h-[64px] min-w-[64px]">
                  {item.img && (
                    <Image
                      alt=""
                      src={item.img}
                      className="rounded-full h-14 w-14"
                      fill
                    />
                  )}
                </div>
                <div className="flex flex-col w-[80%] p-3 gap-1">
                  <span
                    className="p-1 max-w-[80px] rounded-md text-center font-medium first-letter:uppercase text-black"
                    style={{ background: item.color }}
                  >
                    {item.title}
                  </span>
                  <p className="text-sm">{item.desc}</p>
                  <span className="text-sm">
                    {item?.user?.name} -{" "}
                    {item.createdAt.toLocaleString().substring(0, 10)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
