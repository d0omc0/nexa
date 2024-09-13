import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const tools = [
  {
    category: "Design",
    items: [
      { name: "Figma", description: "Design Tool", icon: "/figma.svg" },
      { name: "Adobe XD", description: "Design Tool", icon: "/adobe.svg" },
      { name: "Framer", description: "Web design platform", icon: "/framer.svg" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "Nextjs", description: "react Framework", icon: "/nextjs.svg" },
      { name: "Reactjs", description: "Javascript Library", icon: "/react-logo-svgrepo-com.svg" },
      { name: "Vuejs", description: "Javascript Library", icon: "/vue.svg" },
      { name: "React Native", description: "For builing native mobile apps", icon: "/react-logo-svgrepo-com.svg" },
      { name: "Kotlin", description: "For builing android mobile apps", icon: "/kotlin.svg" },
      { name: "Node js", description: "Javascript runtime environment", icon: "/nodejs.svg" },
      { name: "Nest js", description: " Node.js framework", icon: "/nestjs.svg" },
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      { name: "Meta Llama", description: "open source Ai model", icon: "/meta.svg" },
      { name: "OpenAI", description: "open source Ai model", icon: "/openai.svg" },
      { name: "TensorFlow", description: "cognitive and machine learning research", icon: "/LogosTensorflow.svg" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", description: "Database", icon: "/mongo.svg" },
      { name: "Postgreql", description: "Database", icon: "/post.svg" },
      { name: "Supabase", description: "Database", icon: "/supabase.svg" },
      { name: "AstraDB", description: "Database", icon: "/datastax.png" },
    ],
  },
]

export default function Component() {
  return (
    <div className="bg-[#161616] text-white min-h-screen flex-1 flex-col p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Stack</h1>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Tools, resources and software we use for our projects.
        </p>

        <div className="space-y-8">
          {tools.map((category) => (
            <Card key={category.category} className="bg-[#1C1C1C] border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-white">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center space-x-4">
                      <Image width={40} height={40} src={item.icon} alt={item.name} className="w-10 h-10 rounded" />
                      <div>
                        <h3 className="text-sm font-medium text-white">{item.name}</h3>
                        <p className="text-xs text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}