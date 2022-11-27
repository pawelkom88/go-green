import Sidebar from "@components/ui/sidebar/Sidebar";
import Nav from "@components/ui/navigation/Nav";
import Map from "@components/map/Map";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gray-200">
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
