import { Card } from "@/app/components/card";
import Link from "next/link";

export default function UserAnalytics() {
  return (
    <Card>
      <div>User Analytics</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
