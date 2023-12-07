import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const page: FC<pageProps> = ({ params: { id } }) => {
  return <div>{id}</div>;
};

export default page;
