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
    <div className="flex items-center flex-col justify-center m-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Legacy Migration</h1>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <div>
            <label htmlFor="githubLink" className="text-right block">
              Upload your GitHub link:
            </label>
          </div>
          <div>
            <input
              type="text"
              id="githubLink"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              className="w-full rounded-md p-2 border border-gray-700"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="flex-grow pr-2">
              <label htmlFor="sourceLang" className="block">
                Source language
              </label>
              <input
                type="text"
                id="sourceLang"
                value={sourceLang}
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-700"
              />
            </div>
            <div className="flex-grow pl-2">
              <label htmlFor="destLang" className="block text-right">
                Destination language
              </label>
              <input
                type="text"
                id="destLang"
                value={destLang}
                onChange={(e) => setDestLang(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-700"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow pr-2">
              <label htmlFor="sourceDir" className="text-right block">
                Source directory:
              </label>
              <input
                type="text"
                id="sourceDir"
                value={sourceDir}
                onChange={(e) => setSourceDir(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-700"
              />
            </div>
            <div className="flex-grow pl-2">
              <label htmlFor="destDir" className="text-right block">
                Destination directory:
              </label>
              <input
                type="text"
                id="destDir"
                value={destDir}
                onChange={(e) => setDestDir(e.target.value)}
                className="w-full rounded-md p-2 border border-gray-700"
              />
            </div>
          </div>
          <div>
            <label htmlFor="specificGuidelines" className="text-right block">
              Specific guidelines:
            </label>
          </div>
          <div>
            <textarea
              id="specificGuidelines"
              value={specificGuidelines}
              onChange={(e) => setSpecificGuidelines(e.target.value)}
              className="w-full rounded-md p-2 border border-gray-700"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
