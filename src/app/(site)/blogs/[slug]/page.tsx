import { getPostBySlug } from "@/components/utils/markdown";
import markdownToHtml from "@/components/utils/markdownToHtml";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}
interface PostMeta {
  title?: string;
  author?: string;
  authorImage?: string;
  content?: string;
  coverImage?: string;
  date?: string;
  tag?: string;
  detail?: string;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug, ["title", "author", "content", "metadata"]);

  const siteName = process.env.SITE_NAME || "Your Site Name";
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (post) {
    const metadata: Metadata = {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      authors: [{ name: authorName }],
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
    return metadata;
  } else {
    const metadata: Metadata = {
      title: "Not Found",
      description: "No blog article has been found",
      authors: [{ name: authorName }],
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
    return metadata;
  }
}

export default async function Post({ params }: PageProps) {
  const { slug } = params;
  const post: PostMeta = getPostBySlug(slug, [
    "title",
    "author",
    "authorImage",
    "content",
    "coverImage",
    "date",
    "tag",
    "detail",
  ]);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <section className="relative !pt-44 pb-0!">
        <div className="container max-w-8xl mx-auto md:px-0 px-4">
          <div>
            <div>
              <Link
                href="/blogs"
                className="flex items-center gap-3 text-white bg-primary py-3 px-4 rounded-full w-fit hover:bg-dark duration-300"
              >
                <Icon icon={"ph:arrow-left"} width={20} height={20} />
                <span>Go Back</span>
              </Link>
              <h2 className="text-dark dark:text-white md:text-52 text-40 leading-[1.2] font-semibold pt-7">
                {post.title}
              </h2>
              <h6 className="text-xm mt-5 text-dark dark:text-white">
                {post.detail}
              </h6>
            </div>
            <div className="flex items-center justify-between gap-6 mt-12">
              <div className="flex items-center gap-4">
                {post.authorImage && (
                  <Image
                    src={post.authorImage}
                    alt="author image"
                    className="bg-no-repeat bg-contain inline-block rounded-full !w-12 !h-12"
                    width={48}
                    height={48}
                    quality={100}
                    unoptimized={true}
                  />
                )}
                <div>
                  <span className="text-xm text-dark dark:text-white">
                    {post.author}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-7">
                <div className="flex items-center gap-4">
                  <Icon icon={"ph:clock"} width={20} height={20} />
                  <span className="text-base text-dark font-medium dark:text-white">
                    {post.date
                      ? format(new Date(post.date), "MMM dd, yyyy")
                      : ""}
                  </span>
                </div>
                {post.tag && (
                  <div className="py-2.5 px-5 bg-dark/5 rounded-full dark:bg-white/15">
                    <p className="text-sm font-semibold text-dark dark:text-white">
                      {post.tag}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="z-20 mt-12 overflow-hidden rounded">
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt="cover image"
                width={1170}
                height={766}
                quality={100}
                className="h-full w-full object-cover object-center rounded-3xl"
              />
            )}
          </div>
        </div>
      </section>
      <section className="pt-12!">
        <div className="container max-w-8xl mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="blog-details markdown xl:pr-10">
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
