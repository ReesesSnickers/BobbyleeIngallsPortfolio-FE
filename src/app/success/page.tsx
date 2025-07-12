import { ArrowLeft, CheckIcon } from "lucide-react";
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

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
        <div className="min-h-screen flex justify-center-safe items-center-safe">
          <div className="flex flex-col justify-center-safe items-center-safe text-xl text-gray-600 bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <CheckIcon className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Success!
            </h2>
            <p>Thank you for taking the time to review my portfolio!</p>
            <p>
              Please allow time for me to reach back to you regarding your
              contact request.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
