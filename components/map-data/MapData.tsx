import useFetch from "@hooks/useFetch";
import { Coords } from "types/types";
import useBoundingBox from "@hooks/useBoundingBox";
import Map from "@components/map/Map";
import { data } from "@helpers/helpers";

type MapDataProps = {
  userLocation: undefined | Coords;
  radius: number;
};

export default function MapData({ userLocation, radius }: MapDataProps) {
  // const { boundingBoxPolygon } = useBoundingBox(userLocation, radius);
  // const { data } = useFetch(boundingBoxPolygon);

  // data transformation
  const transformedData = data.map(globalData => {
    const {
      AddressInfo,
      Connections,
      OperatorInfo,
      StatusType,
      UsageCost,
      UsageType,
      GeneralComments,
    } = globalData;

    const chargingPointsInfo = {
      id: AddressInfo.ID,
      address: {
        title: AddressInfo.Title,
        lat: AddressInfo.Latitude,
        lng: AddressInfo.Longitude,
        postCode: AddressInfo.Postcode,
        info: GeneralComments,
      },
      connection: {
        connectionType: Connections[0].ConnectionType.FormalName,
        currentType: Connections[0].CurrentType.Description,
        level: Connections[0].Level.IsFastChargeCapable,
      },
      info: {
        eMail: OperatorInfo?.ContactEmail,
        phone: OperatorInfo?.PhonePrimaryContact,
        website: OperatorInfo?.WebsiteURL,
      },
      statusType: {
        ConnectionType: StatusType.IsOperational,
      },
      cost: UsageCost,
      paymentOptions: UsageType,
    };

    return chargingPointsInfo;
  });

  return <Map userLocation={userLocation} data={transformedData} />;
}
