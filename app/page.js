"use client";
import React from "react";
import { Label, TextInput, Button } from "flowbite-react";

export default function Home() {
  const jobRef = React.useRef(null);
  const pathRef = React.useRef(null);
  const fileNameRef = React.useRef(null);
  const [fileUrl, setFileUrl] = React.useState("");
  const [cutFile, setCutFile] = React.useState("");

  const onAddFileName = (e) => {
    e.preventDefault();
    let path = pathRef.current.value;

    const reg1 = new RegExp("\\\\", "g");
    const noBackSlash = path.replace(reg1, "/");

    const reg2 = new RegExp("C:/PDM/", "g");
    const onlinePath = noBackSlash.replace(
      reg2,
      "https://torepdm2022.array.local/SOLIDWORKSPDM/"
    );

    const reg3 = new RegExp(" ", "g");
    const finalURL = onlinePath.replace(reg3, "%20");

    setFileUrl(finalURL + "/" + fileNameRef.current.value);
    setCutFile(fileNameRef);
  };
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-purple-600 lg:mb-6 lg:text-4xl dark:text-white">
                Cut Request
              </h1>
            </header>

            <section className="not-format">
              <div className="flex justify-between items-center mb-6 border-t">
                <h2 className="text-lg lg:text-2xl font-semibold text-gray-900 dark:text-white mt-2">
                  Fill-out form with complete details
                </h2>
              </div>
              <form className="flex flex-col gap-4" onSubmit={onAddFileName}>
                <div className="w-2/3">
                  <div className="mb-2 block">
                    <Label htmlFor="job_number" value="Job Number" />
                  </div>
                  <TextInput
                    id="job_number"
                    type="number"
                    required={true}
                    ref={jobRef}
                  />
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
                    ref={pathRef}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="cut_file_name" value="Cut File Name" />
                  </div>
                  <TextInput
                    id="cut_file_name"
                    type="text"
                    required={true}
                    ref={fileNameRef}
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  Add
                </Button>
              </form>
              <div className="mt-2">
                <a href={fileUrl} target="_blank">
                  {fileUrl}
                </a>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
