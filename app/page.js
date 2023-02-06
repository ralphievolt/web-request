"use client";
import { Inter } from "@next/font/google";
import { Table, Label, TextInput, Checkbox, Button } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-purple-600 lg:mb-6 lg:text-4xl dark:text-white">
                Cutting Request
              </h1>
            </header>

            <section className="not-format">
              <div className="flex justify-between items-center mb-6 border-t">
                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                  Fill-out form with complete details
                </h2>
              </div>
              <form className="flex flex-col gap-4">
                <div className="w-2/3">
                  <div className="mb-2 block">
                    <Label htmlFor="job_number" value="Job Number" />
                  </div>
                  <TextInput id="job_number" type="number" required={true} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="file_path" value="File Path" />
                  </div>
                  <TextInput
                    id="file_path"
                    type="text"
                    placeholder="C:\PDM\ArrayVault1\Brands\"
                    required={true}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="cut_file_name" value="Cut File Name" />
                  </div>
                  <TextInput id="cut_file_name" type="text" required={true} />
                </div>
                {/* <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div> */}
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-500"
                >
                  Add
                </Button>
              </form>
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
