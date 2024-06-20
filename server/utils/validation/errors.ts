export type ErrorDefinition = {
  code: string;
  status: number;
};

export const VALIDATION_ERROR: ErrorDefinition = {
  code: "VALIDATION_ERROR",
  status: 400,
};
