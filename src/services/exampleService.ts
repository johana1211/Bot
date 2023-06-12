import { Example } from "../types"
import exampleData from "./example.json";

const prueba: Array<Example> = exampleData as Array<Example>;
export const getEntries = () => prueba;

export const addEntry = () => null;
