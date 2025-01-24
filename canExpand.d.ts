import {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  UiSchema,
} from "./types.ts";
/** Checks whether the field described by `schema`, having the `uiSchema` and `formData` supports expanding. The UI for
 * the field can expand if it has additional properties, is not forced as non-expandable by the `uiSchema` and the
 * `formData` object doesn't already have `schema.maxProperties` elements.
 *
 * @param schema - The schema for the field that is being checked
 * @param [uiSchema={}] - The uiSchema for the field
 * @param [formData] - The formData for the field
 * @returns - True if the schema element has additionalProperties, is expandable, and not at the maxProperties limit
 */
export default function canExpand<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(schema: RJSFSchema, uiSchema?: UiSchema<T, S, F>, formData?: T): boolean;
