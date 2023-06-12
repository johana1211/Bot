import { Example, NoSensitiveInfoDiaryEntity, StatusChat } from "../types";
import exampleData from "./example.json";

const prueba: Array<Example> = exampleData as Array<Example>;
export const getEntries = () => prueba;

export const getEntriesWithoutSensitiveInfo =
  (): NoSensitiveInfoDiaryEntity[] => {
    return prueba.map(({ id, date, status }) => {
      return {
        id,
        date,
        status,
      };
    });
  };

export const findById = (
  id: number
): NoSensitiveInfoDiaryEntity | undefined => {
  const entry = prueba.find((item) => item.id === id);
  if (entry !== null) {
    const { ...restOfEntry } = entry;
    // const { phone, ...restOfEntry } = entry; No found
    return restOfEntry;
  }
  return undefined;
};

export const addEntry = (
  id: number,
  status: StatusChat,
  phone: string,
  date: string
) => null;
