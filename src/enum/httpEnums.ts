// REQUEST METHOD
export enum RequestMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

// Content Type
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form data: upload file use
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  // form data: qs -> import Qs from 'qs' --> { data: Qs.stringify(data) }
  FOTM_URL_ENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
}
