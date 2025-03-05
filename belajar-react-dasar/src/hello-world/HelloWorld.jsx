import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Hello world!",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}

export function HeaderHelloWorld({ text = "Ups, lupa kasih teks" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

export function ParagraphHelloWorld() {
  const text = "Selamat Belajar React JS dari programmer zaman now";

  return <p className="content">{text.toLowerCase()}</p>;
}
