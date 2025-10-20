interface HelloWorldProps {
  name?: string
}

export default function HelloWorld({ name = 'World' }: HelloWorldProps) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg">
      <h1 className="text-2xl font-bold text-blue-800">
        Hello, {name}!
      </h1>
      <p className="text-blue-600 mt-2">
        This is a reusable HelloWorld component built with React and TypeScript.
      </p>
    </div>
  )
}

