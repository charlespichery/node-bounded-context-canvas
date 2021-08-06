import fs from "fs";
import {describeOrder} from "./boundedcontext/order/describeOrder";

const orderBoundedContext = describeOrder();
const reportsFolder = "./export";
fs.existsSync(reportsFolder) || fs.mkdirSync(reportsFolder);

fs.writeFileSync(`${reportsFolder}/orderBoundedContext.json`, JSON.stringify(orderBoundedContext));