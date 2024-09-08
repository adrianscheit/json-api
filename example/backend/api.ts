import { JsonExchangeServiceAgent } from "../../src/service";
import { apiExchanges } from "../common/api";

interface CustomerData {
    name: string;
    email: string;
    permissions: ReadonlySet<string>;
}

const jsonExchangeServiceHandler = new JsonExchangeServiceAgent<CustomerData>(apiExchanges);

jsonExchangeServiceHandler.registerHandle(apiExchanges.crudTest1.create, async (request, _) => {
    return request;
});

jsonExchangeServiceHandler.validate();