// export type StatusChat = "SEND" | "RECEIVE" | "IN_PROGRESS";

export enum StatusChatEnum {
  SEND = "SEND",
  RECEIVE = "RECEIVE",
  IN_PROGRESS = "IN_PROGRESS",
}

export interface Example {
  id: number;
  phone: string;
  date: string;
  status: StatusChatEnum;
}

export type NoSensitiveInfoDiaryEntity = Omit<Example, "phone">;

export type NewDiaryEntry = Omit<Example, "id">;
// utility types
// export type NoSensitiveInfoDiaryEntity = Pick<
//   Example,
//   "id" | "status" | "date"
// >;
