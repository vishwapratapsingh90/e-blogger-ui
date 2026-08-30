import { Card } from "@/app/components/card";
import Link from "next/link";

export default function RevenueMetrics() {
  return (
    <Card>
      <div>Revenue</div>
      <div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  );
}
