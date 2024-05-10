import { useState } from "react";

export default function TranslationForm() {
  const [githubLink, setGithubLink] = useState("");
  const [sourceLang, setSourceLang] = useState("");
  const [destLang, setDestLang] = useState("");
  const [sourceDir, setSourceDir] = useState("");
  const [destDir, setDestDir] = useState("");
  const [specificGuidelines, setSpecificGuidelines] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({
      githubLink,
      sourceLang,
      destLang,
      sourceDir,
      destDir,
      specificGuidelines,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center m-4 mt-10 bg-white rounded-lg  p-8">
      <h1 className="text-4xl lg:text-6xl font-bold mb-8">Legacy Migration</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="githubLink" className="text-lg font-semibold">
              Upload your GitHub link
            </label>
            <input
              type="text"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="sourceLang" className="text-lg font-semibold">
                Source language
              </label>
              <input
                type="text"
                id="sourceLang"
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="destLang" className="text-lg font-semibold">
                Destination language
              </label>
              <input
                type="text"
                id="destLang"
                value={destLang}
                onChange={(e) => setDestLang(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="sourceDir" className="text-lg font-semibold">
                Source directory
              </label>
              <input
                type="text"
                id="sourceDir"
                value={sourceDir}
                onChange={(e) => setSourceDir(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="destDir" className="text-lg font-semibold">
                Destination directory
              </label>
              <input
                type="text"
                id="destDir"
                value={destDir}
                onChange={(e) => setDestDir(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="specificGuidelines"
              className="text-lg font-semibold"
            >
              Specific guidelines
            </label>
            <textarea
              id="specificGuidelines"
              value={specificGuidelines}
              onChange={(e) => setSpecificGuidelines(e.target.value)}
              className="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
