"use client";
import React from "react";
import { projectHomes } from "@/app/api/projecthomes";
import { useParams } from "next/navigation";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Details() {
  const { slug } = useParams();

  const item = projectHomes.find((item) => item.slug === slug);

  return (
    <section className="!pt-44 pb-20 relative">
      <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="lg:col-span-8 col-span-12">
            <h1 className="lg:text-52 text-40 font-semibold text-dark dark:text-white">
              {item?.name}
            </h1>
            <div className="flex gap-2.5">
              <Icon
                icon="ph:map-pin"
                width={24}
                height={24}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-xm">
                {item?.location}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-8">
          <div className="lg:col-span-8 col-span-12 row-span-2">
            {item?.images && item?.images[0] && (
              <div className="">
                <Image
                  src={item.images[0]?.src}
                  alt="Main Property Image"
                  width={400}
                  height={500}
                  className="rounded-2xl w-full h-540"
                  unoptimized={true}
                />
              </div>
            )}
          </div>
          <div className="lg:col-span-4 lg:block hidden">
            {item?.images && item?.images[1] && (
              <Image
                src={item.images[1]?.src}
                alt="Property Image 2"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.images && item?.images[2] && (
              <Image
                src={item.images[2]?.src}
                alt="Property Image 3"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
          <div className="lg:col-span-2 col-span-6">
            {item?.images && item?.images[3] && (
              <Image
                src={item.images[3]?.src}
                alt="Property Image 4"
                width={400}
                height={500}
                className="rounded-2xl w-full h-full"
                unoptimized={true}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="lg:col-span-8 col-span-12">
            <h3 className="text-xl font-medium">
              Electric Work Projects Completed
            </h3>

            {/* Dynamic Details Section - Only renders if details exist */}
            {item?.details && item.details.length > 0 && (
              <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                {item.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-white/10 mr-2">
                      <span className="block w-2 h-2 bg-primary dark:bg-white rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-dark dark:text-white text-xm">
                        {detail.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-5">
              {item?.description?.map((desc, idx) => (
                <p key={idx} className="text-dark dark:text-white text-xm ">
                  {desc}
                </p>
              ))}
            </div>

            {/* Dynamic Features Section - Only renders if features exist */}
            {item?.features && item.features.length > 0 && (
              <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                <h3 className="text-xl font-medium">What NoovaWatt Offers</h3>
                <div
                  className={`grid ${
                    item.features.length === 1
                      ? "grid-cols-1"
                      : item.features.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  } mt-5 gap-6`}
                >
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="text-xl font-bold text-primary dark:text-white">
                        -
                      </span>
                      <p className="text-base dark:text-white text-dark">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map Section - Only renders if mapUrl exists */}
            {item?.mapUrl && (
              <iframe
                src={item.mapUrl}
                width="1114"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full mt-8"
              ></iframe>
            )}
          </div>

          <div className="lg:col-span-4 col-span-12">
            <div className="bg-primary/10 p-8 rounded-2xl relative z-10 overflow-hidden">
              <h4 className="text-dark text-3xl font-medium dark:text-white">
                {item?.rate}
              </h4>
              <p className="text-sm text-dark/50 dark:text-white">
                Completed Projects
              </p>
              <Link
                href="#"
                className="py-4 px-8 bg-primary text-white rounded-full w-full block text-center hover:bg-dark duration-300 text-base mt-8 hover:cursor-pointer"
              >
                Get in touch
              </Link>
              <div className="absolute right-0 top-4 -z-[1]">
                <Image
                  src="/images/properties/vector.svg"
                  width={400}
                  height={500}
                  alt="vector"
                  unoptimized={true}
                />
              </div>
            </div>

            {/* Review Section - Only renders if review exists */}
            {item?.review && item?.reviewImage && (
              <div className="border p-10 rounded-2xl border-dark/10 dark:border-white/20 mt-10 flex flex-col gap-6">
                <div className="flex items-center gap-2.5">
                  <p className="text-xm text-dark dark:text-white">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <Image
                    src={item.reviewImage}
                    alt={item?.reviewClient || "Client"}
                    width={400}
                    height={500}
                    className="w-20 h-20 rounded-2xl object-cover"
                    unoptimized={true}
                  />
                  <div className="">
                    <h3 className="text-xm text-dark dark:text-white">
                      {item?.reviewClient || "Client Name"}
                    </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
