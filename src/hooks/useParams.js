import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

export const useParams = (key, isNumber) => {
  // something like: ?x=123&foo=bar in the URL
  const [param, setParam] = useQueryParam(
    key,
    isNumber ? NumberParam : StringParam
  );

  return { param };
};
