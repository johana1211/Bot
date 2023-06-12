export type StatusChat = "SEND" | "RECEIVE" | "IN_PROGRESS";

export interface Example {
  id: number;
  phone: string;
  date: string;
  status: StatusChat;
}

export type NoSensitiveInfoDiaryEntity = Omit<Example, "phone">;
// utility types
// export type NoSensitiveInfoDiaryEntity = Pick<
//   Example,
//   "id" | "status" | "date"
// >;
