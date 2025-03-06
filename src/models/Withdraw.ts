import { User } from "./User";

export interface Withdraw {
  id: string;
  amount: number;
  bank: string;
  account: string;
  status: WithdrawStatus;

  userId: string;
  user: User;

  createdAt: Date;
  updatedAt: Date;
}

type WithdrawStatus = "Pending" | "Paid";
