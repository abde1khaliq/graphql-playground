"use client";
import { useState } from "react";
import { Play, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Editor } from "@monaco-editor/react";

const PlayGround = () => {
  const [backendSchema, setBackendSchema] = useState("");
  const [frontendQuery, setFrontendQuery] = useState("");

  return (
    <section id="next-section" className="p-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Interactive <span className="text-[#e535ab] ">GraphQL</span>{" "}
            Playground
          </h2>
          <p className="text-lg text-neutral-600">
            Try out GraphQL queries in real-time
          </p>
        </div>

        <div className="grid grid-cols-2 border rounded-lg overflow-hidden bg-neutral-950">
          {/* Backend Section */}
          <div className="border-r border-neutral-800">
            {/* Backend Header */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-[#e535ab]" />
                <span className="text-sm text-neutral-300 font-medium">
                  Your Backend Schema
                </span>
              </div>
              <Button
                size="sm"
                className="h-7 text-xs bg-[#e535ab] hover:bg-[#d12d9a]"
                // onClick={runBackend}
              >
                <Play className="h-3 w-3 mr-1" />
                Generate Frontend Query
              </Button>
            </div>

            {/* Backend Code */}
            <pre className="text-sm font-mono overflow-auto h-100 border-b border-neutral-800">
              <Editor
                defaultLanguage="graphql"
                value={`type Query {
  user(id: ID!): User
  posts: [Post]
}

type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}
`}
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
                      "editor.lineHighlightBackground": "#2a2a2a",
                      "editorCursor.foreground": "#e535ab",
                    },
                  });
                }}
                theme="dark"
                options={{ minimap: { enabled: false }, fontSize: 14 }}
              />
            </pre>

            {/* Backend Console */}
            <div>
              <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2 border-b border-neutral-800">
                <Terminal className="h-4 w-4 text-green-500" />
                <span className="text-xs text-neutral-400 font-mono">
                  Console
                </span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-auto h-60">
                <code className="text-green-400">
                  {backendSchema || "// Click 'Run' to start the server"}
                </code>
              </pre>
            </div>
          </div>

          {/* Frontend Section */}
          <div>
            {/* Frontend Header */}
            <div className="flex items-center justify-between bg-neutral-900 px-4 py-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-neutral-300 font-medium">
                  Your Frontend Query
                </span>
              </div>
              <Button
                size="sm"
                className="h-7 text-xs bg-blue-500 hover:bg-blue-600"
                // onClick={runFrontend}
              >
                <Play className="h-3 w-3 mr-1" />
                Get Backend Response
              </Button>
            </div>

            {/* Frontend Code */}
            <pre className="p-6 text-sm font-mono overflow-auto h-100 border-b border-neutral-800">
              <code className="text-neutral-100">
                {`query GetUser {
  user(id: "123") {
    name
    email
    posts {
      id
      title
      content
    }
  }
}`}
              </code>
            </pre>

            {/* Frontend Console */}
            <div>
              <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2 border-b border-neutral-800">
                <Terminal className="h-4 w-4 text-blue-500" />
                <span className="text-xs text-neutral-400 font-mono">
                  Response
                </span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-auto h-60">
                <code className="text-blue-400">
                  {"// Click 'Run' to execute the query"}
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
