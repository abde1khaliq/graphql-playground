"use client";
import { useState } from "react";
import { Play, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Editor } from "@monaco-editor/react";
import { parse } from "graphql";

const PlayGround = () => {
  const [backendSchema, setBackendSchema] = useState("");
  const [frontendQuery, setFrontendQuery] = useState("");
  const [backendTerminalMsg, setbackendTerminalMsg] = useState("");
  const [frontendTerminalMsg, setfrontendTerminalMsg] = useState("");

  const GenerateFrontendQuery = async () => {
    try {
      parse(backendSchema);
      console.log("Schema is valid");
      const response = await fetch("/api/generate_query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ schema: backendSchema }),
      });

      if (response.ok) {
        const data = await response.json();
        setFrontendQuery(data.query);
        setbackendTerminalMsg("Successfully Generated Your frontend Query!");
      }
    } catch (err) {
      if (err instanceof Error) {
        setbackendTerminalMsg(`${err}`);
      } else {
        console.error("Unknown error", err);
      }
    }
  };

  return (
    <section id="next-section" className="p-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-transparent to-pink-50/30 pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Interactive <span className="text-[#e535ab]">GraphQL</span>{" "}
            Playground
          </h2>
          <p className="text-lg text-neutral-600">
            Try out GraphQL queries in real-time
          </p>
        </div>

        <div className="grid grid-cols-2 border rounded-xl overflow-hidden bg-neutral-950 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-shadow duration-500">
          {/* Backend Section */}
          <div className="border-r border-neutral-800 relative">
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#e535ab]/5 to-transparent pointer-events-none"></div>

            {/* Backend Header */}
            <div className="flex items-center justify-between bg-neutral-900/95 backdrop-blur-sm px-4 py-3 border-b border-neutral-800 relative z-10">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-[#e535ab]" />
                <span className="text-sm text-neutral-300 font-medium">
                  Your Backend Schema
                </span>
              </div>
              <Button
                onClick={GenerateFrontendQuery}
                size="sm"
                className="h-7 text-xs bg-[#e535ab] hover:bg-[#d12d9a] shadow-lg shadow-[#e535ab]/20"
              >
                <Play className="h-3 w-3 mr-1" />
                Generate Frontend Query
              </Button>
            </div>

            {/* Backend Code */}
            <div className="h-100 border-b border-neutral-800 relative">
              <Editor
                defaultLanguage="graphql"
                value={backendSchema}
                onChange={(value) => setBackendSchema(value || "")}
                beforeMount={(monaco) => {
                  monaco.editor.defineTheme("dark", {
                    base: "vs-dark",
                    inherit: true,
                    rules: [
                      { token: "string", foreground: "e535ab" },
                      { token: "keyword", foreground: "569cd6" },
                    ],
                    colors: {
                      "editor.background": "#0a0a0a",
                      "editor.lineHighlightBackground": "#1a1a1a",
                      "editorCursor.foreground": "#e535ab",
                    },
                  });
                }}
                theme="dark"
                options={{ minimap: { enabled: false }, fontSize: 14 }}
              />
            </div>

            {/* Backend Console */}
            <div className="relative">
              <div className="flex items-center gap-2 bg-neutral-900/95 backdrop-blur-sm px-4 py-2 border-b border-neutral-800">
                <Terminal className="h-4 w-4 text-green-500" />
                <span className="text-xs text-neutral-400 font-mono">
                  Console
                </span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-auto h-60 bg-gradient-to-b from-neutral-950 to-neutral-900">
                <code className="text-green-400">
                  {backendTerminalMsg || "// Start writing your queries."}
                </code>
              </pre>
            </div>
          </div>

          {/* Frontend Section */}
          <div className="relative">
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>

            {/* Frontend Header */}
            <div className="flex items-center justify-between bg-neutral-900/95 backdrop-blur-sm px-4 py-3 border-b border-neutral-800 relative z-10">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-neutral-300 font-medium">
                  Your Frontend Query
                </span>
              </div>
              <Button
                size="sm"
                className="h-7 text-xs bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/20"
              >
                <Play className="h-3 w-3 mr-1" />
                Get Backend Response
              </Button>
            </div>

            {/* Frontend Code */}
            <pre className="p-6 text-sm font-mono overflow-auto h-100 border-b border-neutral-800">
              <code className="text-neutral-100">{frontendQuery}</code>
            </pre>

            {/* Frontend Console */}
            <div className="relative">
              <div className="flex items-center gap-2 bg-neutral-900/95 backdrop-blur-sm px-4 py-2 border-b border-neutral-800">
                <Terminal className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-neutral-400 font-mono">
                  Response
                </span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-auto h-60 bg-gradient-to-b from-neutral-950 to-neutral-900">
                <code className="text-blue-400">
                  {frontendTerminalMsg ||
                    "// Click 'Get Backend Response' to recieve mock data for your query."}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayGround;
