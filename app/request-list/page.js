"use client";
import { Inter } from "@next/font/google";
import { Table } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-purple-600 lg:mb-6 lg:text-4xl dark:text-white">
                Request List
              </h1>
            </header>

            <section className="not-format">
              <article className="p-6 mb-6 text-base bg-white  border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-purple-600">
                    <p className="inline-flex items-center mr-3 text-sm font-bold  dark:text-white">
                      Jess Estabelo
                    </p>
                    <p className="text-sm  dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-03-12"
                        title="March 12th, 2022"
                      >
                        Mar. 12, 2022
                      </time>
                    </p>
                  </div>

                  <p className="items-end mr-3 text-sm text-purple-600 dark:text-white">
                    Requested
                  </p>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    className="inline-flex items-center p-2 text-sm  text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>
                </footer>
                <Table>
                  <Table.Head>
                    <Table.HeadCell>Job Number</Table.HeadCell>
                    <Table.HeadCell>Brand Name</Table.HeadCell>
                    <Table.HeadCell>Items</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap  text-gray-900 dark:text-white">
                        701234
                      </Table.Cell>
                      <Table.Cell>IT Cosmetics</Table.Cell>
                      <Table.Cell>5</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </article>

              <article className="p-6 mb-6 text-base bg-white  border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-purple-600">
                    <p className="inline-flex items-center mr-3 text-sm font-bold  dark:text-white">
                      Antony Antony
                    </p>
                    <p className="text-sm  dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-03-12"
                        title="March 12th, 2022"
                      >
                        Mar. 15, 2022
                      </time>
                    </p>
                  </div>

                  <p className="items-end mr-3 text-sm text-purple-600 dark:text-white">
                    Requested
                  </p>
                  <button
                    id="dropdownComment3Button"
                    data-dropdown-toggle="dropdownComment3"
                    className="inline-flex items-center p-2 text-sm  text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                  </button>
                </footer>
                <Table>
                  <Table.Head>
                    <Table.HeadCell>Job Number</Table.HeadCell>
                    <Table.HeadCell>Brand Name</Table.HeadCell>
                    <Table.HeadCell>Items</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap  text-gray-900 dark:text-white">
                        701288{" "}
                      </Table.Cell>
                      <Table.Cell>Urban Decay</Table.Cell>
                      <Table.Cell>5</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </article>
            </section>
          </article>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="p-4 py-2 mx-auto max-w-screen-xl md:p-8 lg:p-5">
          <div className="text-center">
            <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Web Request
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
