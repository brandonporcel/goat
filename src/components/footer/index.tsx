function Footer() {
  return (
    <div className="border-grid border-t border-gray-800 md:px-8 py-4">
      <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        Source code available on{" "}
        <a
          href={"https://github.com/brandonporcel/kindle-lyrics"}
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4 hover:opacity-80"
        >
          GitHub
        </a>
        . Design from{" "}
        <a
          href="https://taigatakahashi.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4 hover:opacity-80"
        >
          taigatakahashi
        </a>
        .
      </div>
    </div>
  );
}

export default Footer;
