export type StatusChat = "SEND" | "RECEIVE" | "IN_PROGRESS";

export interface Example {
  id: number;
  number: string;
  date: string;
  status: StatusChat;
}
