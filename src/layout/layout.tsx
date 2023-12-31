import React, { ReactNode } from "react";
import Head from "next/head";
import Navigation from "@component/navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { navigationmenu } from "@component/navigationpattern";

interface Props {
  children?: ReactNode;
  seo?: any;
  isBanner?: boolean;
  banner?: ReactNode;
  secondaryNavigation?: ReactNode;
  isBannerAd?: false;
}

function Main({ children, isBanner, banner, secondaryNavigation, isBannerAd }: Props) {

   const seo: any = {
    title: 'EVWheelsHub.com',
    description: 'drive ecofriendly vehicle, save environment',
  }

  return (

    <>
      <Head>
         <title>{seo.title}</title>
        {/* <meta charSet="utf-8" content={image} /> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={seo.description} />
      </Head>

      <Navigation navigation={navigationmenu}/>

      {banner}
      {secondaryNavigation}

      <div className="container container-xl px-2 mx-auto flex lg:flex-row flex-col gap-2 mt-2">
        {children}
      </div>

      <footer className=" bg-white py-4">
        <div className="container container-xl px-2 mx-auto grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div className="flex flex-col gap-2 lg:items-start items-center">
            <Image
              // src={config.LOGO}
              src=""
              width={130}
              height={30}
              // alt={config.DOMAIN}
              alt=""
              className="h-auto w-28"
            />
            <div className="text-xs text-gray-500">
              * Prices are indicative and subject to change.
            </div>
            <div className="text-xs text-gray-500">&copy; 2023 {seo.title}</div>
          </div>

          <ul className="flex gap-2 mx-auto">
            <li>
              <Link
                href="https://www.youtube.com/@91Trucks"
                target="_blank"
                rel="noreferrer"
                aria-label="youtube"
              >
                <svg
                  fill="#6B7280"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/91Trucks"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <svg
                  fill="#6B7280"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/91Trucks"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter"
              >
                <svg
                  fill="#6B7280"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/91Trucks/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  fill="#6B7280"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                </svg>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col lg:items-end items-center">
            <ul className="flex text-gray-500 lg:text-sm text-xs gap-2">
              <li>
                <Link
                  // href={UrlHelper.toAbout()}
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                 // href={UrlHelper.toAbout()}
                 href=""
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  // href={UrlHelper.toAbout()}
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                 // href={UrlHelper.toAbout()}
                 href=""
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  Consent Declaration
                </a>
              </li>
            </ul>
            <span className="text-xs text-gray-500 mt-6">
              Our website Partners
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Main;
