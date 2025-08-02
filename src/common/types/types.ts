export type FieldError = {
  error: string
  field: string
}

export type BaseResponse<T = {}> = {
  data: T
  resultCode: number
  messages: string[]
  fieldsErrors: FieldError[]
}

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export type LoginResponse = {
  resultCode: number
  messages: [] | string[],
  fieldsErrors: [],
  data: {
    userId: number
    token?: string
  }
}
