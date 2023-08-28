import { SkeletonRow } from '../../../shared/table/style';

export default function Skeleton() {
  return (
    <tr className="skeleton">
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
