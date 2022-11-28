import Sidebar from "@components/ui/sidebar/Sidebar";
import Nav from "@components/ui/navigation/Nav";
import Map from "@components/map/Map";

export default function Home() {
  console.log("Home renders");
  return (
    <>
      <div className="w-full bg-primary-clr">
        <div className="flex flex-no-wrap">
          <Sidebar />
          <main className="w-full">
            <Nav />
            <Map />
          </main>
        </div>
      </div>
    </>
  );
}
