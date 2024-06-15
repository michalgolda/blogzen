import { ZodType } from "zod";
import { EventHandler, EventHandlerRequest } from "h3";
import { VALIDATION_ERROR } from "./errors";

export const withBodyValidation = <
  BodySchema extends ZodType,
  Request extends EventHandlerRequest,
  Response
>(
  handler: EventHandler<Request, Response>,
  bodySchema: BodySchema
): EventHandler<Request, Response> =>
  defineEventHandler<Request>(async (event) => {
    const result = await readValidatedBody(event, (body) =>
      bodySchema.safeParse(body)
    );

    if (!result.success) {
      setResponseStatus(event, VALIDATION_ERROR.status);

      return {
        ...VALIDATION_ERROR,
        data: {
          issues: result.error.issues,
        },
      };
    }

    const response = await handler(event);

    return response;
  });
