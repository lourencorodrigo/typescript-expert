function get(url: string, input: Record<string, string>): Promise<any> {
  return fetch(url, {
    method: 'GET',
    body: JSON.stringify(input),
  });
}

function post(url: string, input: Record<string, string>): Promise<any> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(input),
  });
}

type CreateAPIMethod = <
  TInput extends Record<string, string>,
  TOutput
>(opts: {
  url: string;
  method: 'GET' | 'POST';
}) => (input: TInput) => Promise<TOutput>;

const createAPIMethod: CreateAPIMethod = (opts) => (input) => {
  const method = opts.method === 'GET' ? get : post;

  return method(opts.url, input).then((res) => res.json())
};

const getUser = createAPIMethod<
  { id: string }, // The input
  { name: string } // The output
>({
  method: 'GET',
  url: '/user/:id',
});

getUser({ id: '1' }).then((res) => {
  console.log(res.name);
});
