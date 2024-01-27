type Error<TError> = {
  kind: "error";
  error: TError;
};

type Success<TData> = {
  kind: "success";
  data: TData;
};

export type Result<TData, TError> = Success<TData> | Error<TError>;

export function onSuccess<TData>(
  result: Result<TData, unknown>,
  onSuccess: (successValue: TData) => void,
) {
  if (result.kind === "success") onSuccess(result.data);
}

export function onError<TError>(
  result: Result<unknown, TError>,
  onError: (message: TError) => void,
) {
  if (result.kind === "error") onError(result.error);
}

export function success<TData>(data: TData): Success<TData> {
  return { kind: "success", data };
}

export function error<TError>(error: TError): Error<TError> {
  return { kind: "error", error };
}
