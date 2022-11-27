import Sidebar from "@components/ui/sidebar/Sidebar";
import Main from "@components/main/Main";
import Map from "@components/map/Map";

export default function Home() {
  return (
    <>
      <div className="w-full bg-gray-200">
        <div className="flex flex-no-wrap">
          <Sidebar/>
          <Main>
            <Map/>
          </Main>
        </div>
      </div>
    </>
  );
}
