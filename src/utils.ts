import { NewDiaryEntry, StatusChatEnum } from "./types";

const parsePhone = (statusRequest: any): string => {
  if (!isString(statusRequest)) {
    throw new Error("Incorrect phone");
  }
  return statusRequest;
};

const parseStatus = (statusRequest: any): StatusChatEnum => {
  if (!isString(statusRequest) || !isStatus(statusRequest)) {
    throw new Error("Incorrect status");
  }
  return statusRequest;
};

const parseDate = (dateRequest: any): string => {
  if (!isString(dateRequest) || !isDate(dateRequest)) {
    throw new Error("Invalid date");
  }
  return dateRequest;
};
const isString = (str: unknown): boolean => {
  return typeof str === "string" || str instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isStatus = (status: any): boolean => {
  return Object.values(StatusChatEnum).includes(status);
};
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    phone: parsePhone(object.phone),
    date: parseDate(object.date),
    status: parseStatus(object.status),
  };
  return newEntry;
};

export default toNewDiaryEntry;
