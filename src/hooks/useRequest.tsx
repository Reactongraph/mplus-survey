import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useRequest = () => {
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const request = (
    method: 'POST' | 'GET' | 'PATCH' | 'DELETE',
    path: string,
    data?: any,
    token?: string
  ) => {
    let extrasInHeader: any = {};
    if (token) {
      extrasInHeader.Authorization = `Bearer ${token}`;
    }

    let url = `${process.env.NEXT_PUBLIC_API_URL}${path}`;
    let config = {
      method,
      url,
      headers: {
        ...extrasInHeader
      },
      data
    };

    setIsLoading(true);
    axios(config)
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error('Something went wrong!');
        setIsLoading(false);
      });
  };
  return {
    request,
    response,
    isLoading
  };
};

export default useRequest;
