import { ArrowLeft } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Success | Bobbylee Ingalls Portfolio</title>
        <meta name="description" content="Successful contact request" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex justify-center-safe items-center-safe">
        <div className="flex flex-col justify-center-safe items-center-safe text-xl text-gray-600">
          <p>Thank you for taking the time to review my portfolio!</p>
          <p>
            Please allow time for me to reach back to you regarding your contact
            request.
          </p>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Home
          </Link>
        </div>
      </main>
    </>
  );
}
