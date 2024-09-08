import { JsonExchangeCustomerAgent } from "../../src/customer";
import { apiExchanges } from "../common/api";

const jsonExchangeCustomerFetchHandler = new JsonExchangeCustomerAgent(apiExchanges, 'MOCK AUTH');

jsonExchangeCustomerFetchHandler.exchange(apiExchanges.crudTest1.create, { test1Number: 123, test1String: 'ABC' });