import React from "react";
import { getProviders, signIn } from "next-auth/react";

function signin({ providers }) {
  return (
    <div className="flex justify-center items-center mt-20">
      <img
        src="data:image/jpeg;base64,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"
        alt="tiwtter image "
        className="object-cover md:w-44 h-80 md:inline-block rotate-6 hidden"
      />
      <div className="calssName">
        {Object.values(providers).map((provider) => (
          // eslint-disable-next-line react/jsx-key
          <div className="flex flex-col items-center space-x-4">
            <img
              className="w-36 object-cover"
              src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter_logo_blue.png.twimg.768.png"
            />
            <p className="text-center text-sm italic my-10">
              this app created for{" "}
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
            >
              Sign with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}