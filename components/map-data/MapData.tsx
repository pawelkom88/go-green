import useFetch from "@hooks/useFetch";
import { useCurrentLocation } from "@context/UserLocationContext";
import { useRadius } from "@context/RadiusContext";
import { Coords } from "types/types";
import useBoundingBox from "@hooks/useBoundingBox";
import Map from "@components/map/Map";
import useDebounce from "@hooks/useDebounce";
import Modal from "@components/ui/modal/Modal";
import Spinner from "@components/ui/spinner/Spinner";
import { DataType } from "types/types";

export default function MapData() {
  const { currentLocation: userLocation } = useCurrentLocation();
  const { radius } = useRadius();
  const { boundingBoxPolygon } = useBoundingBox(userLocation as Coords, radius);
  const debouncedValue = useDebounce(boundingBoxPolygon, 1500);
  const { data, loading, error } = useFetch(debouncedValue);

  // data transformation
  const transformedData = (data as null | Array<DataType>)?.map((globalData: any) => {
    const {
      AddressInfo,
      Connections,
      OperatorInfo,
      StatusType,
      UsageCost,
      UsageType,
      GeneralComments,
      NumberOfPoints,
    } = globalData;

    const chargingPointsInfo = {
      id: AddressInfo.ID,
      address: {
        title: AddressInfo.Title === "null" ? "Unknown" : AddressInfo.Title,
        lat: AddressInfo.Latitude,
        lng: AddressInfo.Longitude,
        postCode: AddressInfo.Postcode,
        info: GeneralComments,
      },
      connection: {
        connectionType: Connections[0]?.ConnectionType?.FormalName,
        currentType: Connections[0]?.CurrentType?.Description,
        level: Connections[0]?.Level?.IsFastChargeCapable,
      },
      info: {
        eMail: OperatorInfo?.ContactEmail,
        phone: OperatorInfo?.PhonePrimaryContact,
        website: OperatorInfo?.WebsiteURL,
      },
      statusType: {
        ConnectionType: StatusType?.IsOperational,
      },
      cost: UsageCost,
      paymentOptions: UsageType,
      NumberOfPoints,
    };

    return chargingPointsInfo;
  });

  return (
    <>
      <Map data={transformedData} />
      {error && (
        <Modal size="flex-center h-[245px]">
          An error occured while fetching data. Please try again.
        </Modal>
      )}
      {loading && <Spinner />}
    </>
  );
}
