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
  return (
    <h1
      style={{
        color: "red",
        backgroundColor: "aqua",
      }}
    >
      {text.toUpperCase()}
    </h1>
  );
}

export function ParagraphHelloWorld() {
  const text = "Selamat Belajar React JS dari programmer zaman now";
  const style = {
    color: "blue",
    backgroundColor: "yellow",
  };
  return <p style={style}>{text.toLowerCase()}</p>;
}
