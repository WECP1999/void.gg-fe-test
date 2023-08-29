type DataNotFoundProps = {
  search: string;
};

export default function DataNotFound({ search }: DataNotFoundProps) {
  return <>Ooop! No data was found with the filter: {search}</>;
}
