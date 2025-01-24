import { CONST_KEY, getSchemaType, isObject } from "./.ts";
import isString from "lodash/isString";
/**
 * Checks if the schema const property value is an AJV $data reference
 * and the current schema is not an object or array
 *
 * @param schema - The schema to check if the const is an AJV $data reference
 * @returns - true if the schema const property value is an AJV $data reference otherwise false.
 */
export default function constIsAjvDataReference(schema) {
  const schemaConst = schema[CONST_KEY];
  const schemaType = getSchemaType(schema);
  return isObject(schemaConst) && isString(schemaConst?.$data) &&
    schemaType !== "object" && schemaType !== "array";
}
//# sourceMappingURL=constIsAjvDataReference.js.map
