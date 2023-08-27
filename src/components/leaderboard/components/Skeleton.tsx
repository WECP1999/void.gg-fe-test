import { SkeletonRow } from './style';

export default function Skeleton() {
  return (
    <tr>
      <td>
        <SkeletonRow className="m-auto" width="2.5em" />
      </td>
      <td>
        <SkeletonRow width="20em" />
      </td>
      <td>
        <SkeletonRow className="m-auto" width="2.5em" />
      </td>
      <td>
        <SkeletonRow className="m-auto" width="2.5em" />
      </td>
    </tr>
  );
}
