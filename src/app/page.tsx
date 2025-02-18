import Content from "@/components/home/content";
import SeasonNavBar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="mt-20">
        <SeasonNavBar />
      </div>
      <aside className="fixed left-2 md:left-5 bottom-2 md:bottom-5 z-50">
        S - M - L
      </aside>
      <Content />
    </>
  );
}
