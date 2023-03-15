// import useFetch from "@hooks/useFetch";
// import { useCurrentLocation } from "@context/UserLocationContext";
// import { useRadius } from "@context/RadiusContext";
// import { BoundingBox, Coords } from "types/types";
// import useBoundingBox from "@hooks/useBoundingBox";
// import useDebounce from "@hooks/useDebounce";
// import Map from "@components/map/Map";
// import Modal from "@components/ui/modal/Modal";
// import Spinner from "@components/ui/spinner/Spinner";
// import { POIDetails } from "domain/api-types";

// export default function MapData() {
  // const { currentLocation } = useCurrentLocation();
  // const { radius } = useRadius();
  // const { boundingBoxPolygon } = useBoundingBox(currentLocation, radius);

  // const debouncedValue: BoundingBox = useDebounce(boundingBoxPolygon, 1500);

  // const { data, loading, error } = useFetch(debouncedValue);

  // data transformation
  // const transformedData: POIDetails[] = data.map(data => {
  //   const {
  //     AddressInfo,
  //     Connections,
  //     OperatorInfo,
  //     StatusType,
  //     UsageCost,
  //     UsageType,
  //     GeneralComments,
  //     NumberOfPoints: NumberOfChargingPoints,
  //   } = data;

  //   const POIDetails: POIDetails = {
  //     id: AddressInfo.ID,
  //     address: {
  //       title: AddressInfo.Title === "null" ? "Unknown" : AddressInfo.Title,
  //       lat: AddressInfo.Latitude,
  //       lng: AddressInfo.Longitude,
  //       postCode: AddressInfo.Postcode,
  //       info: GeneralComments,
  //     },
  //     connection: {
  //       connectionType: Connections[0]?.ConnectionType?.FormalName,
  //       currentType: Connections[0]?.CurrentType?.Description,
  //       level: Connections[0]?.Level?.IsFastChargeCapable,
  //     },
  //     contactInfo: {
  //       eMail: OperatorInfo?.ContactEmail,
  //       phone: OperatorInfo?.PhonePrimaryContact,
  //       website: OperatorInfo?.WebsiteURL,
  //     },
  //     statusType: {
  //       ConnectionType: StatusType?.IsOperational,
  //     },
  //     cost: UsageCost,
  //     paymentOptions: UsageType,
  //     NumberOfChargingPoints,
  //   };

  //   return POIDetails;
  // });

  // return (
  //   <>
      // <Map />
      {/* <Map data={transformedData} /> */}
    
    {/* </>
  );
} */}
