import Head from "next/head";

export default function Register() {
  return (
    <div className="flex">
      <Head>
        <title>register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="h-screen bg-center bg-cover w-60"
        style={{ backgroundImage: "url('/images/bg.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <h1 className="mb-2 text-lg">Sign Up</h1>
        <p className="mb-10 text-xs">
          By continouing, you agree to our User Agreement and Privacy Policy
        </p>
      </div>
    </div>
  );
}
