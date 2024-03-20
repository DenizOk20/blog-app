"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { getDownloadURL, getStorage, ref, uploadBytesResumable, uploadString } from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [catSlug,setCatSlug] = useState("")
  useEffect(() => {
    const upload = () => {
      const storageRef = ref(storage, "images/rivers.jpg");

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
         
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
          });
        }
      );
    };

    file && upload();

  }, [file]);

  const router = useRouter();

  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style", 
      }),
    });
    
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }

  }



  return (
    <div className="p-4 md:px-20 xl:px-40 flex flex-col gap-4 md:gap-6">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="p-7 outline-none text-3xl md:text-4xl lg:text-5xl bg-transparent border-none placeholder:text-[#b3b3b1]"
      />
      <div className="flex gap-3 md:gap-5 flex-col relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-gray-700"
        >
          <Image
            src="/plus.png"
            alt="add"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </button>
        <select onChange={(e) => setCatSlug(e.target.value)} name="Category" id="Category" className="w-[100px] p-1 sm:w-[140px] border-2 border-groove border-gray-300 outline-none md:w-[160px]">
          <option value="Style">style</option>
          <option value="Fashion">fashion</option>
          <option value="Coding">coding</option>
          <option value="Food">food</option>
          <option value="Travel">travel</option>
          <option value="Culture">culture</option>
        </select>
        {open && (
          <div className="absolute flex gap-3 left-12 z-50 w-full">
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button
              className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-[#317a2d]"
            >
              <label htmlFor="image">
                <Image src="/image.png" alt="add" width={16} height={16} />
              </label>
            </button>
            <button
              className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-[#317a2d]"
            >
              <Image src="/external.png" alt="add" width={16} height={16} />
            </button>
            <button
              className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 border-2 
                rounded-full bg-transparent border-[#317a2d]"
            >
              <Image src="/video.png" alt="add" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
          className="w-full"
        />
        <button
            onClick={handleSubmit}
         className="fixed top-12 right-1 bg-[#317a2d] px-3 py-2 rounded-md text-white 
            border-none cursor-pointer">
        Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
